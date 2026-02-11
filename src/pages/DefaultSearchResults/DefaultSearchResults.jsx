import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, BookOpen, University, Award, Calendar } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Courses",
        desc: "Find top-rated academic programs tailored to your goals.",
        icon: <BookOpen className="w-8 h-8 text-blue-500" />,
        path: "/search-results/courses",
        color: "bg-blue-50 hover:bg-blue-100",
    },
    {
        id: 2,
        name: "Universities",
        desc: "Explore world-class universities and discover your next destination.",
        icon: <University className="w-8 h-8 text-green-500" />,
        path: "/search-results/universities",
        color: "bg-green-50 hover:bg-green-100",
    },
    {
        id: 3,
        name: "Scholarships",
        desc: "Find scholarships that help make your dream education affordable.",
        icon: <Award className="w-8 h-8 text-yellow-500" />,
        path: "/search-results/scholarships",
        color: "bg-yellow-50 hover:bg-yellow-100",
    },
    {
        id: 4,
        name: "Events",
        desc: "Join upcoming seminars, fairs, and events for study abroad opportunities.",
        icon: <Calendar className="w-8 h-8 text-purple-500" />,
        path: "/search-results/events",
        color: "bg-purple-50 hover:bg-purple-100",
    },
];

const DefaultSearchResults = () => {
    return (
        <div className="text-center">
            {/* 🔍 Search Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Explore Opportunities That Match Your Ambition
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                    Use our smart search to find courses, universities, scholarships, and events across the globe.
                </p>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search for courses, universities, or scholarships..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    </div>
                </div>
            </motion.div>

            {/* 📚 Category Cards */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.1 },
                    },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {categories.map((cat) => (
                    <motion.div
                        key={cat.id}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            to={cat.path}
                            className={`block p-6 rounded-2xl shadow-sm border ${cat.color} transition-all`}
                        >
                            <div className="flex justify-center mb-3">{cat.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{cat.desc}</p>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default DefaultSearchResults;
