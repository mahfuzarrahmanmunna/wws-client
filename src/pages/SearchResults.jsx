import React, { useState, useMemo, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Result1 from '../component/Result1'
import Result2 from '../component/Result2'
import ContactHome from '../component/ContactHome'
import GetOffer from '../component/GetOffer'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const SearchResults = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { results, tab, searchType } = location.state || { results: [], tab: 'Courses', searchType: null }

  const [realResults, setRealResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState('popularity')
  const [filters, setFilters] = useState({
    subject: '',
    destination: '',
    studyLevel: '',
    tuitionFee: [0, 50000],
  })

  useEffect(() => {
    if (!location.state) navigate('/')
  }, [location.state, navigate])

  useEffect(() => {
    if (searchType) fetchRealData(searchType)
  }, [searchType])

  const fetchRealData = async (type) => {
    setLoading(true)
    setError(null)
    try {
      let apiEndpoint = ''
      switch (type) {
        case 'courses': apiEndpoint = 'http://localhost:3000/api/course'; break
        case 'scholarships': apiEndpoint = 'http://localhost:3000/api/scholarships'; break
        case 'universities': apiEndpoint = 'http://localhost:3000/api/universities'; break
        case 'events': apiEndpoint = 'http://localhost:3000/api/events'; break
        default: apiEndpoint = 'http://localhost:3000/api/course'
      }
      const response = await fetch(apiEndpoint)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      setRealResults(data)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(error.message)
      setRealResults([])
    } finally {
      setLoading(false)
    }
  }


  const handleSortChange = (e) => setSortBy(e.target.value)
  const handleFilterChange = (key, value) => setFilters(prev => ({ ...prev, [key]: value }))
  const handleBackToSearch = () => navigate('/')
  console.log(realResults);
  // Unique filter options
  // const subjects = useMemo(() => [...new Set(realResults.map(r => r.category).filter(Boolean))], [realResults])
  const subjects = useMemo(() => {
    // Flatten all coursesOffered arrays into one array, remove duplicates
    const allCourses = realResults.flatMap(r => r.coursesOffered || [])
    return [...new Set(allCourses)]
  }, [realResults])
  const destinations = useMemo(() => [...new Set(realResults.map(r => r.destination).filter(Boolean))], [realResults])
  const studyLevels = useMemo(() => {
    // Try studyLevel first, otherwise use coursesOffered
    const levels = realResults.flatMap(r => r.studyLevel ? [r.studyLevel] : r.coursesOffered || [])
    return [...new Set(levels.filter(Boolean))]
  }, [realResults])

  // Tuition fee range
  const feeRange = useMemo(() => {
    const fees = realResults
      .map(r => {
        if (!r.tuitionFee) return null;
        // tuitionFee example: "£18,000 - £38,000 per year"
        const match = r.tuitionFee.match(/[\d,]+/g);
        if (!match) return null;
        // convert string to number
        return match.map(n => parseInt(n.replace(/,/g, '')));
      })
      .flat() // flatten array of arrays
      .filter(Boolean); // remove null/0

    if (fees.length === 0) return [0, 0];

    return [Math.min(...fees), Math.max(...fees)];
  }, [realResults]);
  // console.log(feeRange);

  // console.log(studyLevels); 

  // Filtered & sorted results
  const filteredResults = useMemo(() => {
    let actualResults = realResults.length > 0 ? realResults : (results || [])
    return actualResults.filter(r => {
      // Subject (check array)
      if (filters.subject && !(r.coursesOffered || []).includes(filters.subject)) return false

      // Destination
      if (filters.destination && r.destination !== filters.destination) return false

      // Study Level (adjust if studyLevel exists)
      if (filters.studyLevel && r.studyLevel !== filters.studyLevel) return false

      // Tuition Fee
      if (filters.tuitionFee.length === 2) {
        const minFee = filters.tuitionFee[0]
        const maxFee = filters.tuitionFee[1]
        let feeNum = 0
        if (r.tuitionFee) {
          const match = r.tuitionFee.match(/[\d,]+/g)
          if (match) feeNum = parseInt(match[0].replace(/,/g, ''))
        }
        if (feeNum < minFee || feeNum > maxFee) return false
      }

      return true
    }).sort((a, b) => {
      switch (sortBy) {
        case 'ranking': return (a.ranking || 999) - (b.ranking || 999)
        case 'name': return (a.universityName || a.name || '').localeCompare(b.universityName || b.name || '')
        case 'fee': {
          const getFee = r => {
            if (!r.tuitionFee) return 999999
            const match = r.tuitionFee.match(/[\d,]+/)
            return match ? parseInt(match[0].replace(/,/g, '')) : 999999
          }
          return getFee(a) - getFee(b)
        }
        case 'popularity':
        default: return 0
      }
    })
  }, [realResults, results, filters, sortBy])

  const renderCourseCard = (course) => (
    <div key={course._id} className="bg-white rounded-lg mt-12 border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col w-72">
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Available</span>
      </div>
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: {course.studyLevel}</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {course.destination}</p>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{course.description}</p>
      </div>
      <div className="flex gap-3 mt-auto">
        <Link to={`courses-details/${course._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">View Details</Link>
        <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">Apply Now</button>
      </div>
    </div>
  )

  const renderScholarshipCard = (scholarship) => (
    <div key={scholarship._id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          {scholarship.amount || 'Available'}
        </span>
      </div>
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: {scholarship.studyLevel}</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {scholarship.destination}</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {scholarship.description || `These ${scholarship.studyLevel} scholarships in ${scholarship.destination} are designed for students seeking comprehensive financial support for their education. Emphasis is placed on academic excellence, research potential, and global career readiness.`}
        </p>
      </div>
      <div className="flex gap-3 mt-auto">
        <Link to={`/search-results/scholarship-details/${scholarship?._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </Link>
        <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )

  const renderUniversityCard = (university) => (
    <div key={university._id || university.universityName} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{university.universityName}</h3>
        </div>
        <span className="bg-green-100 text-green-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2">
          Available
        </span>
      </div>
      <div className="mb-3 sm:mb-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 sm:mb-3 text-xs">
          <div>
            <span className="font-medium text-gray-700">Established:</span>
            <span className="text-gray-600 ml-1">{university.established}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Destination:</span>
            <span className="text-gray-600 ml-1">{university.destination}</span>
          </div>
        </div>
        <div className="mb-2 sm:mb-3">
          <span className="font-medium text-gray-700 text-xs">Popular Courses:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {university.coursesOffered?.slice(0, 3).map((course, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                {course}
              </span>
            ))}
            {university.coursesOffered?.length > 3 && (
              <span className="text-gray-500 text-xs">+{university.coursesOffered.length - 3} more</span>
            )}
          </div>
        </div>
        <div className="mb-2 sm:mb-3">
          <span className="font-medium text-gray-700 text-xs">Tuition Fee:</span>
          <span className="text-green-600 font-semibold ml-1 text-xs">{university.tuitionFee}</span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
          {university.description}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
        <Link to={`/search-results/university-details/${university?._id}`} className="flex-1 bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium">
          View Details
        </Link>
        <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-green-700 transition-colors text-xs font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )

  const renderEventCard = (event) => (
    <div key={event._id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          Available
        </span>
      </div>
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Event Type: Education Fair</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {event.destination}</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {event.description || `Join our education fair in ${event.city || 'major cities'} to explore study opportunities in ${event.destination}. Meet university representatives, learn about courses, scholarships, and application processes. Perfect for students planning their international education journey.`}
        </p>
      </div>
      <div className="flex gap-3 mt-auto">
        <Link to={`/search-results/event-details/${event?._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </Link>
        <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )

  const renderResults = () => {
    if (loading) return <div className="text-center py-8 sm:py-12">Loading...</div>
    if (error) return <div className="text-center py-8 sm:py-12">{error}</div>
    if (!filteredResults || filteredResults.length === 0) return <div className="text-center py-8 sm:py-12">No results found</div>

    return (
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredResults.map(item => {
          switch (tab) {
            case 'Courses':
              return renderCourseCard(item)
            case 'Scholarships':
              return renderScholarshipCard(item)
            case 'Universities':
              return renderUniversityCard(item)
            case 'Events':
              return renderEventCard(item)
            default:
              return renderCourseCard(item)
          }
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">

        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6">
          <button onClick={handleBackToSearch} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
            <span className="text-lg">←</span> Back to Search
          </button>
        </nav>

        {/* Top Banner */}
        <div className="mb-6 sm:mb-8">
          <Result1 />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-1/4 bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-gray-900 font-semibold mb-2">Filters</h3>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
              <select value={filters.subject} onChange={e => handleFilterChange('subject', e.target.value)} className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm">
                <option value="">All</option>
                {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
              </select>
            </div>

            {/* Destination */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-1">Destination</label>
              <select value={filters.destination} onChange={e => handleFilterChange('destination', e.target.value)} className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm">
                <option value="">All</option>
                {destinations.map(dest => <option key={dest} value={dest}>{dest}</option>)}
              </select>
            </div>

            {/* Study Level */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-1">Study Level</label>
              <select value={filters.studyLevel} onChange={e => handleFilterChange('studyLevel', e.target.value)} className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm">
                <option value="">All</option>
                {studyLevels.map(level => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>

            {/* Tuition Fee */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-1">Tuition Fee ($)</label>
              <Slider
                range
                min={feeRange[0]}
                max={feeRange[1]}
                value={filters.tuitionFee}
                onChange={value => handleFilterChange('tuitionFee', value)}
              />
              <div className="flex justify-between text-xs mt-1">
                <span>${filters.tuitionFee[0]}</span>
                <span>${filters.tuitionFee[1]}</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6 sm:mb-8 flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {filteredResults.length} {tab} Found
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">Sort by:</span>
                <select value={sortBy} onChange={handleSortChange} className="border border-gray-300 rounded-lg px-2 py-2 text-xs sm:text-sm">
                  <option value="popularity">Popularity</option>
                  <option value="ranking">Ranking</option>
                  <option value="name">Name A-Z</option>
                  <option value="fee">Tuition Fee</option>
                </select>
              </div>
            </div>

            <GetOffer />
            {renderResults()}
          </div>
        </div>

        {/* Bottom Banners */}
        <div className="mt-8 space-y-6">
          <Result2 />
          <ContactHome />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-white">
          <button onClick={() => setIsModalOpen(false)} className="fixed top-4 right-4 z-[10000] bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors shadow-lg" aria-label="Close modal">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full h-full overflow-x-hidden">
            <ContactHome />
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchResults