import React, { useEffect, useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link, useLocation } from "react-router-dom";
import ContactHome from "../../component/ContactHome";
import GetOffer from "../../component/GetOffer";

const EventsResults = () => {
    const location = useLocation();
    const navState = location?.state || {};
    const [events, setEvents] = useState([]);
    const [filters, setFilters] = useState({
        city: "",
        month: "",
        destination: "",
        programType: "",
        organizer: "",
    });
    const [sortBy, setSortBy] = useState("popularity");
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ✅ Initialize from navigation state or fetch all
    useEffect(() => {
        let cancelled = false;
        const initialize = async () => {
            setLoading(true);
            try {
                if (Array.isArray(navState.results) && navState.results.length > 0) {
                    if (!cancelled) setEvents(navState.results);
                } else {
                    const response = await fetch("http://localhost:3000/api/events");
                    const data = await response.json();
                    if (!cancelled) setEvents(data);
                }
            } catch (error) {
                console.error("Error loading events:", error);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        initialize();
        return () => {
            cancelled = true;
        };
    }, [navState.results]);

    // ✅ Apply initial filters from search data
    useEffect(() => {
        if (navState.searchData) {
            const { city, month, destination } = navState.searchData;
            setFilters((prev) => ({
                ...prev,
                city: city || "",
                month: month || "",
                destination: destination || "",
            }));
        }
    }, [navState.searchData]);

    // ✅ Extract filter options
    const cities = useMemo(
        () => [...new Set(events.map((e) => e.city).filter(Boolean))],
        [events]
    );
    const months = useMemo(
        () => [...new Set(events.map((e) => e.month).filter(Boolean))],
        [events]
    );
    const destinations = useMemo(
        () => [...new Set(events.map((e) => e.destination).filter(Boolean))],
        [events]
    );
    const programTypes = useMemo(
        () => [...new Set(events.map((e) => e.programType).filter(Boolean))],
        [events]
    );
    const organizers = useMemo(
        () => [...new Set(events.map((e) => e.organizer).filter(Boolean))],
        [events]
    );

    // ✅ Handle filter change
    const handleFilterChange = (key, value) =>
        setFilters((prev) => ({ ...prev, [key]: value }));

    // ✅ Handle sorting
    const handleSortChange = (e) => setSortBy(e.target.value);

    // ✅ Filtered & sorted results
    const filteredEvents = useMemo(() => {
        let filtered = events.filter((e) => {
            if (filters.city) {
                const cityVal = String(e.city || "").toLowerCase();
                const query = String(filters.city || "").toLowerCase();
                if (cityVal !== query) return false;
            }
            if (filters.month) {
                const monthVal = String(e.month || "").toLowerCase();
                const query = String(filters.month || "").toLowerCase();
                if (monthVal !== query) return false;
            }
            if (filters.destination) {
                const destVal = String(e.destination || "").toLowerCase();
                const query = String(filters.destination || "").toLowerCase();
                if (destVal !== query) return false;
            }
            if (filters.programType) {
                const typeVal = String(e.programType || "").toLowerCase();
                const query = String(filters.programType || "").toLowerCase();
                if (typeVal !== query) return false;
            }
            if (filters.organizer) {
                const orgVal = String(e.organizer || "").toLowerCase();
                const query = String(filters.organizer || "").toLowerCase();
                if (orgVal !== query) return false;
            }
            return true;
        });

        // Sort
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.programType.localeCompare(b.programType);
                case "popularity":
                default:
                    return 0;
            }
        });
    }, [events, filters, sortBy]);

    // ✅ Event Card (same design)
    const renderEventCard = (event) => (
        <div key={event._id} className="bg-white rounded-lg mt-12 border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col w-72">
            <div className="flex justify-end mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Open</span>
            </div>
            <div className="mb-4 flex-grow">
                <p className="text-gray-900 font-semibold text-sm mb-1">Program Type: {event.programType}</p>
                <p className="text-gray-900 font-semibold text-sm mb-1">City: {event.city}</p>
                <p className="text-gray-900 font-semibold text-sm mb-1">Destination: {event.destination}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{event.description}</p>
            </div>
            <div className="flex gap-3 mt-auto">
                <Link to={`/search-results/events/event-details/${event._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">View Details</Link>
                <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">Apply Now</button>
            </div>
        </div>
    )

    // ✅ Render section
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters */}
                    <div className="w-full md:w-1/4 bg-white rounded-lg border border-gray-200 p-4">
                        <h3 className="text-gray-900 font-semibold mb-2">Filters</h3>

                        {/* City */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
                            <select
                                value={filters.city || ""}
                                onChange={(e) => handleFilterChange("city", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {cities.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        {/* Month */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Month</label>
                            <select
                                value={filters.month || ""}
                                onChange={(e) => handleFilterChange("month", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {months.map((m) => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>

                        {/* Destination */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Destination</label>
                            <select
                                value={filters.destination || ""}
                                onChange={(e) => handleFilterChange("destination", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {destinations.map((d) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>

                        {/* Program Type */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Program Type</label>
                            <select
                                value={filters.programType || ""}
                                onChange={(e) => handleFilterChange("programType", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {programTypes.map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>

                        {/* Organizer */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Organizer</label>
                            <select
                                value={filters.organizer || ""}
                                onChange={(e) => handleFilterChange("organizer", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {organizers.map((o) => (
                                    <option key={o} value={o}>{o}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Event List */}
                    <div className="flex-1">
                        <div className="mb-6 sm:mb-8 flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                {filteredEvents.length} Events Found
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    className="border border-gray-300 rounded-lg px-2 py-2 text-xs sm:text-sm"
                                >
                                    <option value="popularity">Popularity</option>
                                    <option value="name">Name A-Z</option>
                                </select>
                            </div>
                        </div>

                        <GetOffer />
                        {loading ? (
                            <div className="text-center py-12">Loading...</div>
                        ) : filteredEvents.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {filteredEvents.map(renderEventCard)}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">No events found.</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Apply Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] bg-white">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="fixed top-4 right-4 z-[10000] bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors shadow-lg"
                    >
                        ✕
                    </button>
                    <div className="w-full h-full overflow-x-hidden">
                        <ContactHome />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsResults;
