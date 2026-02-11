// AdvancedSearchModal.js
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdvancedSearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [filters, setFilters] = useState({
    country: '',
    level: '',
    gpa_percent: '',
    english_test: '',
    total_score: '',
    budget_per_year: '',
    preferred_intake: '',
    study_gaps_years: ''
  });
  
  const navigate = useNavigate();
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Fetch courses to populate dropdown options
  useEffect(() => {
    if (isModalOpen) {
      setLoading(true);
      axios.get('http://localhost:3000/popular')
        .then(response => {
          setCourses(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
          setLoading(false);
        });
    }
  }, [isModalOpen]);
  
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Add styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position and styles when modal closes
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }
  }, [isModalOpen]);
  
  // Get unique values for dropdowns
  const getUniqueValues = (key) => {
    return [...new Set(courses.map(course => course[key]))].filter(Boolean);
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearching(true);
    
    try {
      // Build query string with only non-empty filters
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
      
      // Make API call to get filtered results
      const response = await axios.get(`http://localhost:3000/popular/courses?${queryParams.toString()}`);
      
      // Store results in sessionStorage to pass to results page
      sessionStorage.setItem('searchResults', JSON.stringify(response.data));
      sessionStorage.setItem('searchFilters', JSON.stringify(filters));
      
      // Close modal
      closeModal();
      
      // Navigate to results page
      navigate('/results');
    } catch (error) {
      console.error('Error searching courses:', error);
      alert('Failed to search courses. Please try again.');
    } finally {
      setSearching(false);
    }
  };
  
  return (
    <>
      <button 
        onClick={openModal}
        className='inline-flex items-center gap-2 rounded-full bg-[#11AD00] px-6 py-3 text-white hover:bg-[#4CADFF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Advanced Search
      </button>
      
      {isModalOpen && createPortal(
  <div className="fixed inset-0 z-[10000] bg-black/60 flex items-center justify-center p-4" onClick={closeModal}>
    <div className="relative z-[10001] bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Advanced Search</h2>
          <button 
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            type="button"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select 
                  name="country"
                  value={filters.country}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  disabled={loading}
                >
                  <option value="">Select Country</option>
                  {getUniqueValues('country').map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Level</label>
                <select 
                  name="level"
                  value={filters.level}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  disabled={loading}
                >
                  <option value="">Select Level</option>
                  {getUniqueValues('level').map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                <input 
                  type="number"
                  name="gpa_percent"
                  value={filters.gpa_percent}
                  onChange={handleFilterChange}
                  placeholder="65%" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  min="0"
                  max="100"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">English Test</label>
                <select 
                  name="english_test"
                  value={filters.english_test}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  disabled={loading}
                >
                  <option value="">Select Test</option>
                  {getUniqueValues('english_test').map(test => (
                    <option key={test} value={test}>{test}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Score</label>
                <input 
                  type="number"
                  name="total_score"
                  value={filters.total_score}
                  onChange={handleFilterChange}
                  placeholder="6.5" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  step="0.1"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Annual Budget</label>
                <input 
                  type="number"
                  name="budget_per_year"
                  value={filters.budget_per_year}
                  onChange={handleFilterChange}
                  placeholder="£15000" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Intake Time</label>
                <select 
                  name="preferred_intake"
                  value={filters.preferred_intake}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  disabled={loading}
                >
                  <option value="">Select Intake</option>
                  {getUniqueValues('preferred_intake').map(intake => (
                    <option key={intake} value={intake}>{intake}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Study Gap</label>
                <input 
                  type="number"
                  name="study_gaps_years"
                  value={filters.study_gaps_years}
                  onChange={handleFilterChange}
                  placeholder="0 years" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11AD00]"
                  min="0"
                  disabled={loading}
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                type="button"
                onClick={closeModal}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                disabled={searching}
              >
                Cancel
              </button>
              
              <div className="flex gap-3">
                <button 
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#11AD00] px-6 py-3 text-white hover:bg-[#4CADFF] transition-colors disabled:opacity-50"
                  disabled={searching || loading}
                >
                  {searching ? (
                    <>
                      <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </>
                  ) : (
                    'Check my Eligibility'
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>,
  document.body
)}
    </>
  );
};

export default AdvancedSearchModal;