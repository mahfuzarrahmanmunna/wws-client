import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ContactHome from "../component/ContactHome";
import GetOffer from "../component/GetOffer";

const ResultsPage = () => {
  const [results, setResults] = useState(null);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Try to get results from sessionStorage first
    const storedResults = sessionStorage.getItem('searchResults');
    const storedFilters = sessionStorage.getItem('searchFilters');
    
    if (storedResults) {
      setResults(JSON.parse(storedResults));
      setFilters(JSON.parse(storedFilters));
      setLoading(false);
    } else {
      // If no stored results, redirect to home
      navigate('/');
    }
  }, [navigate]);

  const handleBackToSearch = () => {
    navigate('/');
  };

  const handleApplyFilters = () => {
    navigate('/');
  };

  const handleViewDetails = (course) => {
    // Handle viewing course details
    console.log('View details for:', course);
  };

  const handleApplyNow = (course) => {
    // Handle applying to course
    console.log('Apply now for:', course);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#11AD00]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <button 
            onClick={handleBackToSearch}
            className="mt-4 bg-[#11AD00] text-white px-4 py-2 rounded hover:bg-[#0a8a00]"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  // Course Card (matching CourseResults design with all data)
  const renderCourseCard = (course, index) => (
    <div key={index} className="bg-white rounded-lg mt-12 border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Available</span>
      </div>
      <div className="mb-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{course.course_name || 'Course Name'}</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-medium">Country:</span> {course.country}</p>
          <p><span className="font-medium">Study Level:</span> {course.level}</p>
          <p><span className="font-medium">GPA Required:</span> {course.gpa_percent}%</p>
          <p><span className="font-medium">English Test:</span> {course.english_test} - {course.total_score}</p>
          <p><span className="font-medium">Budget:</span> £{course.budget_per_year}/year</p>
          <p><span className="font-medium">Intake:</span> {course.preferred_intake}</p>
          <p><span className="font-medium">Study Gap Allowed:</span> {course.study_gaps_years} years</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mt-3 ">{course.description}</p>
      </div>
      <div className="flex gap-3 mt-auto">
        
        <button 
          onClick={() => handleApplyNow(course)}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          Apply Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        
          {/* Filters Sidebar - Design Only */}
          

          {/* Course List */}
          <div className="">
            <div className="mb-6 sm:mb-8 flex justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {results?.count || 0} Courses Found
                </h1>
                <p className="text-gray-600 mt-1">
                  Matching your criteria
                </p>
              </div>
              
            </div>

            <GetOffer />
            
            {results?.data?.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">No courses found</h2>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
                <button 
                  onClick={handleApplyFilters}
                  className="px-6 py-2 bg-[#11AD00] text-white rounded-md hover:bg-[#0a8a00] transition-colors"
                >
                  Modify Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mb-10 gap-4 sm:gap-6">
                {results?.data?.map(renderCourseCard)}
              </div>
            )}
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

export default ResultsPage;