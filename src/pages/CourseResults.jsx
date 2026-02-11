import React, { useEffect, useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Result2 from "../component/Result2";
import ContactHome from "../component/ContactHome";
import GetOffer from "../component/GetOffer";
import { Link, useLocation } from "react-router-dom";

const CourseResults = () => {
    const location = useLocation();
    const navState = location?.state || {};
    const [courses, setCourses] = useState([]);
    const [filters, setFilters] = useState({
        subject: "",
        destination: "",
        studyLevel: "",
        tuitionFee: [0, 50000],
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
                    if (!cancelled) setCourses(navState.results);
                } else {
                    const response = await fetch("http://localhost:3000/api/course");
                    const data = await response.json();
                    if (!cancelled) setCourses(data);
                }
            } catch (error) {
                console.error("Error loading courses:", error);
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
            const { subject, destination, studyLevel } = navState.searchData;
            setFilters((prev) => ({
                ...prev,
                subject: subject || "",
                destination: destination || "",
                studyLevel: studyLevel || "",
            }));
        }
    }, [navState.searchData]);

    // ✅ Extract filter options
    const subjects = useMemo(
        () => [...new Set(courses.map((c) => c.subject).filter(Boolean))],
        [courses]
    );
    const destinations = useMemo(
        () => [...new Set(courses.map((c) => c.destination).filter(Boolean))],
        [courses]
    );
    const studyLevels = useMemo(
        () => [...new Set(courses.map((c) => c.studyLevel).filter(Boolean))],
        [courses]
    );

    // ✅ Tuition fee range calculation
    const feeRange = useMemo(() => {
        const allFees = courses
            .map((c) => {
                const match = c.tuitionFee?.match(/[\d,]+/g);
                return match ? match.map((n) => parseInt(n.replace(/,/g, ""))) : null;
            })
            .flat()
            .filter(Boolean);
        if (allFees.length === 0) return [0, 0];
        return [Math.min(...allFees), Math.max(...allFees)];
    }, [courses]);

    // ✅ Handle filter change
    const handleFilterChange = (key, value) =>
        setFilters((prev) => ({ ...prev, [key]: value }));

    // ✅ Handle sorting
    const handleSortChange = (e) => setSortBy(e.target.value);

    // ✅ Filtered & sorted results (optimized)
    const filteredCourses = useMemo(() => {
        let filtered = courses.filter((c) => {
            // Subject (case-insensitive partial match)
            if (filters.subject) {
                const subjectVal = String(c.subject || "").toLowerCase();
                const query = String(filters.subject || "").toLowerCase();
                if (!subjectVal.includes(query)) return false;
            }
            // Destination (case-insensitive exact)
            if (filters.destination) {
                const destVal = String(c.destination || "").toLowerCase();
                const query = String(filters.destination || "").toLowerCase();
                if (destVal !== query) return false;
            }
            // Study Level (case-insensitive exact)
            if (filters.studyLevel) {
                const levelVal = String(c.studyLevel || "").toLowerCase();
                const query = String(filters.studyLevel || "").toLowerCase();
                if (levelVal !== query) return false;
            }
            // Tuition Fee
            if (filters.tuitionFee.length === 2) {
                const [min, max] = filters.tuitionFee;
                const match = c.tuitionFee?.match(/[\d,]+/g);
                if (match) {
                    const minFee = parseInt(match[0].replace(/,/g, ""));
                    const maxFee = parseInt(match[match.length - 1].replace(/,/g, ""));
                    if (maxFee < min || minFee > max) return false;
                }
            }
            return true;
        });

        // Sort
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.subject.localeCompare(b.subject);
                case "fee":
                    const getFee = (r) => {
                        const match = r.tuitionFee?.match(/[\d,]+/);
                        return match ? parseInt(match[0].replace(/,/g, "")) : 999999;
                    };
                    return getFee(a) - getFee(b);
                case "popularity":
                default:
                    return 0;
            }
        });
    }, [courses, filters, sortBy]);

    // ✅ Course Card (same design)
    const renderCourseCard = (course) => (
        <div key={course._id} className="bg-white rounded-lg mt-12 border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col w-72">
            <div className="flex justify-end mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Available</span>
            </div>
            <div className="mb-4 flex-grow">
                <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: {course.studyLevel}</p>
                <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {course.destination}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{course.description}</p> {/* line clamp 4 lines */}
            </div>
            <div className="flex gap-3 mt-auto">
                <Link to={`/search-results/courses/courses-details/${course._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">View Details</Link>
                <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">Apply Now</button>
            </div>
        </div>
    )

    // ✅ Render section
    return (
        <div className="min-h-screen bg-gray-50">
            {/* <Header /> */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters */}
                    <div className="w-full md:w-1/4 bg-white rounded-lg border border-gray-200 p-4">
                        <h3 className="text-gray-900 font-semibold mb-2">Filters</h3>

                        {/* Subject */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <select
                                value={filters.subject}
                                onChange={(e) => handleFilterChange("subject", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {subjects.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Destination */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Destination
                            </label>
                            <select
                                value={filters.destination}
                                onChange={(e) =>
                                    handleFilterChange("destination", e.target.value)
                                }
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {destinations.map((d) => (
                                    <option key={d} value={d}>
                                        {d}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Study Level */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Study Level
                            </label>
                            <select
                                value={filters.studyLevel}
                                onChange={(e) =>
                                    handleFilterChange("studyLevel", e.target.value)
                                }
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {studyLevels.map((lvl) => (
                                    <option key={lvl} value={lvl}>
                                        {lvl}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tuition Fee */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Tuition Fee
                            </label>
                            <Slider
                                range
                                min={feeRange[0]}
                                max={feeRange[1]}
                                value={filters.tuitionFee}
                                onChange={(v) => handleFilterChange("tuitionFee", v)}
                            />
                            <div className="flex justify-between text-xs mt-1">
                                <span>${filters.tuitionFee[0]}</span>
                                <span>${filters.tuitionFee[1]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Course List */}
                    <div className="flex-1">
                        <div className="mb-6 sm:mb-8 flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                {filteredCourses.length} Courses Found
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                                    Sort by:
                                </span>
                                <select
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    className="border border-gray-300 rounded-lg px-2 py-2 text-xs sm:text-sm"
                                >
                                    <option value="popularity">Popularity</option>
                                    <option value="name">Name A-Z</option>
                                    <option value="fee">Tuition Fee</option>
                                </select>
                            </div>
                        </div>

                        <GetOffer />
                        {loading ? (
                            <div className="text-center py-12">Loading...</div>
                        ) : filteredCourses.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {filteredCourses.map(renderCourseCard)}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                No courses found.
                            </div>
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

export default CourseResults;
