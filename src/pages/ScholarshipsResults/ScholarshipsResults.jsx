import React, { useEffect, useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link, useLocation } from "react-router-dom";
import ContactHome from "../../component/ContactHome";
import GetOffer from "../../component/GetOffer";

const ScholarshipsResults = () => {
    const location = useLocation();
    const navState = location?.state || {};
    const [scholarships, setScholarships] = useState([]);
    const [filters, setFilters] = useState({
        studyLevel: "",
        destination: "",
        duration: "",
        tuitionFee: [0, 100000], // Donation/Funding range
        coursesIncluded: "",
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
                    if (!cancelled) setScholarships(navState.results);
                } else {
                    const response = await fetch("http://localhost:3000/api/scholarships");
                    const data = await response.json();
                    if (!cancelled) setScholarships(data);
                }
            } catch (error) {
                console.error("Error loading scholarships:", error);
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
            const { studyLevel, destination } = navState.searchData;
            setFilters((prev) => ({
                ...prev,
                studyLevel: studyLevel || "",
                destination: destination || "",
            }));
        }
    }, [navState.searchData]);

    // ✅ Extract filter options
    const studyLevels = useMemo(() => [...new Set(scholarships.map(s => s.studyLevel).filter(Boolean))], [scholarships]);
    const destinations = useMemo(() => [...new Set(scholarships.map(s => s.destination).filter(Boolean))], [scholarships]);
    const durations = useMemo(() => [...new Set(scholarships.map(s => s.duration).filter(Boolean))], [scholarships]);
    const coursesIncludedList = useMemo(() => [...new Set(scholarships.flatMap(s => s.coursesIncluded).filter(Boolean))], [scholarships]);

    // ✅ Donation/Funding range for slider
    const feeRange = useMemo(() => {
        const allFees = scholarships
            .map(s => {
                const match = s.tuitionFee?.match(/[\d,]+/g);
                return match ? match.map(n => parseInt(n.replace(/[,€$SGD]/g, ""))) : null;
            })
            .flat()
            .filter(Boolean);
        if (allFees.length === 0) return [0, 0];
        return [Math.min(...allFees), Math.max(...allFees)];
    }, [scholarships]);

    // ✅ Handle filter change
    const handleFilterChange = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));
    const handleSortChange = (e) => setSortBy(e.target.value);

    // ✅ Filtered & sorted results
    const filteredScholarships = useMemo(() => {
        return scholarships.filter(s => {
            if (filters.studyLevel) {
                const lvlVal = String(s.studyLevel || "").toLowerCase();
                const query = String(filters.studyLevel || "").toLowerCase();
                if (lvlVal !== query) return false;
            }
            if (filters.destination) {
                const destVal = String(s.destination || "").toLowerCase();
                const query = String(filters.destination || "").toLowerCase();
                if (destVal !== query) return false;
            }
            if (filters.duration) {
                const durVal = String(s.duration || "").toLowerCase();
                const query = String(filters.duration || "").toLowerCase();
                if (durVal !== query) return false;
            }
            if (filters.coursesIncluded) {
                const list = (s.coursesIncluded || []).map(c => String(c).toLowerCase());
                const query = String(filters.coursesIncluded || "").toLowerCase();
                if (!list.includes(query)) return false;
            }

            // Donation/Funding filter
            if (filters.tuitionFee.length === 2) {
                const [min, max] = filters.tuitionFee;
                const match = s.tuitionFee?.match(/[\d,]+/g);
                if (match) {
                    const minFee = parseInt(match[0].replace(/[,€$SGD]/g, ""));
                    const maxFee = parseInt(match[match.length - 1].replace(/[,€$SGD]/g, ""));
                    if (maxFee < min || minFee > max) return false;
                }
            }

            return true;
        }).sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.studyLevel.localeCompare(b.studyLevel);
                case "popularity":
                default:
                    return 0;
            }
        });
    }, [scholarships, filters, sortBy]);

    // ✅ Scholarship Card
    const renderScholarshipCard = scholarship => (
        <div key={scholarship._id} className="bg-white rounded-lg mt-12 border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col w-72">
            <div className="flex justify-end mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Open</span>
            </div>
            <div className="mb-4 flex-grow">
                <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: {scholarship.studyLevel}</p>
                <p className="text-gray-900 font-semibold text-sm mb-1">Destination: {scholarship.destination}</p>
                <p className="text-gray-900 font-semibold text-sm mb-1">Duration: {scholarship.duration}</p>
                <p className="text-gray-900 font-semibold text-sm mb-1">Donation/Funding: {scholarship.tuitionFee}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{scholarship.description}</p>
            </div>
            <div className="flex gap-3 mt-auto">
                <Link to={`/search-results/scholarships/scholarship-details/${scholarship._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">View Details</Link>
                <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">Apply Now</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters */}
                    <div className="w-full md:w-1/4 bg-white rounded-lg border border-gray-200 p-4">
                        <h3 className="text-gray-900 font-semibold mb-2">Filters</h3>

                        {/* Study Level */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Study Level</label>
                            <select
                                value={filters.studyLevel || ""}
                                onChange={e => handleFilterChange("studyLevel", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {studyLevels.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>

                        {/* Destination */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Destination</label>
                            <select
                                value={filters.destination || ""}
                                onChange={e => handleFilterChange("destination", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>

                        {/* Duration */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
                            <select
                                value={filters.duration || ""}
                                onChange={e => handleFilterChange("duration", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {durations.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>

                        {/* Courses Included */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Courses Included</label>
                            <select
                                value={filters.coursesIncluded || ""}
                                onChange={e => handleFilterChange("coursesIncluded", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {coursesIncludedList.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        {/* Donation/Funding */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Donation/Funding</label>
                            <Slider
                                range
                                min={feeRange[0]}
                                max={feeRange[1]}
                                value={filters.tuitionFee}
                                onChange={v => handleFilterChange("tuitionFee", v)}
                            />
                            <div className="flex justify-between text-xs mt-1">
                                <span>€{filters.tuitionFee[0]}</span>
                                <span>€{filters.tuitionFee[1]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Scholarship List */}
                    <div className="flex-1">
                        <div className="mb-6 sm:mb-8 flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                {filteredScholarships.length} Scholarships Found
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
                        ) : filteredScholarships.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {filteredScholarships.map(renderScholarshipCard)}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">No scholarships found.</div>
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

export default ScholarshipsResults;
