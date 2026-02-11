import React, { useState } from 'react'
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AdvancedSearchModal from './AdvancedSearchModal'

const SearchCard = () => {
  const [activeTab, setActiveTab] = useState('Courses')
  const [loading, setLoading] = useState(false)
  const axiosSecure = useAxiosSecure()

  let navigate = useNavigate()

  const tabs = ['Courses', 'Scholarships', 'Universities', 'Events', 'Guide me', 'Get instant offer']

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setLoading(false) // Reset loading state when switching tabs
  }

  // Form states for different tabs
  const [coursesForm, setCoursesForm] = useState({
    subject: '',
    studyLevel: '',
    destination: ''
  })

  const [scholarshipsForm, setScholarshipsForm] = useState({
    studyLevel: '',
    destination: ''
  })

  const [universitiesForm, setUniversitiesForm] = useState({
    universityName: '',
    destination: ''
  })

  const [eventsForm, setEventsForm] = useState({
    city: '',
    month: '',
    destination: ''
  })



  // Handle form submissions
  const handleSearch = async (e) => {
    e.preventDefault()

    // For informational tabs, don't submit forms
    if (activeTab === 'Guide me' || activeTab === 'Get instant offer') {
      return
    }

    setLoading(true)
    console.log(coursesForm, scholarshipsForm, universitiesForm)

    try {
      let endpoint = ''
      let data = {}

      switch (activeTab) {
        case 'Courses':
          endpoint = '/api/search/course'
          data = coursesForm
          break
        case 'Scholarships':
          endpoint = '/api/search/scholarships'
          data = scholarshipsForm
          break
        case 'Universities':
          endpoint = '/api/search/universities'
          data = universitiesForm
          break
        case 'Events':
          endpoint = '/api/search/events'
          data = eventsForm
          break
        default:
          throw new Error('Invalid tab selected')
      }

      const response = await axiosSecure.post(endpoint, data)

      if (response.data.success) {
        toast.success('Search completed successfully!')
        // 👉 result data সহ specific route এ navigate করা
        const routeMap = {
          'Courses': '/search-results/courses',
          'Scholarships': '/search-results/scholarships', 
          'Universities': '/search-results/universities',
          'Events': '/search-results/events'
        }
        const targetRoute = routeMap[activeTab] || '/search-results'
        
        // Search data এবং filters pass করা
        navigate(targetRoute, { 
          state: { 
            results: response.data.data, 
            tab: activeTab,
            searchData: data,
            searchType: activeTab.toLowerCase()
          } 
        })
      } else {
        toast.error(response.data.message || 'Search failed')
      }
    } catch (error) {
      console.error('Search error:', error)
      toast.error('An error occurred during search. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Render different forms based on active tab
  const renderForm = () => {
    console.log('Current active tab:', activeTab) // Debug log
    switch (activeTab) {
      case 'Courses':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-4">
              <label className="sr-only">Course subject</label>
              <input
                type="text"
                placeholder="Enter course subject e.g. Law"
                value={coursesForm.subject}
                onChange={(e) => setCoursesForm({ ...coursesForm, subject: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="lg:col-span-4">
              <label className="sr-only">Study level</label>
              <select
                value={coursesForm.studyLevel}
                onChange={(e) => setCoursesForm({ ...coursesForm, studyLevel: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select study level</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="phd">PhD</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
              </select>
            </div>
            <div className="lg:col-span-4">
              <label className="sr-only">Study destination</label>
              <select
                value={coursesForm.destination}
                onChange={(e) => setCoursesForm({ ...coursesForm, destination: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a study destination</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="netherlands">Netherlands</option>
                <option value="ireland">Ireland</option>
              </select>
            </div>
            <div className="lg:col-span-12 flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-[#11AD00] px-6 py-3 text-white hover:bg-[#4CADFF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        )

      case 'Scholarships':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-6">
              <label className="sr-only">Study level</label>
              <select
                value={scholarshipsForm.studyLevel}
                onChange={(e) => setScholarshipsForm({ ...scholarshipsForm, studyLevel: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select study level</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="phd">PhD</option>
                <option value="diploma">Diploma</option>
              </select>
            </div>
            <div className="lg:col-span-6">
              <label className="sr-only">Study destination</label>
              <select
                value={scholarshipsForm.destination}
                onChange={(e) => setScholarshipsForm({ ...scholarshipsForm, destination: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a study destination</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="netherlands">Netherlands</option>
                <option value="ireland">Ireland</option>
              </select>
            </div>
            <div className="lg:col-span-12 flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        )

      case 'Universities':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-6">
              <label className="sr-only">University name</label>
              <input
                type="text"
                placeholder="Search by university name"
                value={universitiesForm.universityName}
                onChange={(e) => setUniversitiesForm({ ...universitiesForm, universityName: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="lg:col-span-6">
              <label className="sr-only">Study destination</label>
              <select
                value={universitiesForm.destination}
                onChange={(e) => setUniversitiesForm({ ...universitiesForm, destination: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a study destination</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="netherlands">Netherlands</option>
                <option value="ireland">Ireland</option>
              </select>
            </div>
            <div className="lg:col-span-12 flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        )

      case 'Events':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-4">
              <label className="sr-only">City</label>
              <select
                value={eventsForm.city}
                onChange={(e) => setEventsForm({ ...eventsForm, city: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">City</option>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="sylhet">Sylhet</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="khulna">Khulna</option>
              </select>
            </div>
            <div className="lg:col-span-4">
              <label className="sr-only">Month</label>
              <select
                value={eventsForm.month}
                onChange={(e) => setEventsForm({ ...eventsForm, month: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className="lg:col-span-4">
              <label className="sr-only">Study destinations</label>
              <select
                value={eventsForm.destination}
                onChange={(e) => setEventsForm({ ...eventsForm, destination: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Study destinations</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="netherlands">Netherlands</option>
                <option value="ireland">Ireland</option>
              </select>
            </div>
            <div className="lg:col-span-12 flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        )

      case 'Guide me':
        return (
          <div className="py-8">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Personalized Study Guidance</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Our expert counselors are here to help you make the best decisions for your international education journey.
                  Get personalized advice on universities, courses, scholarships, and application processes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-blue-600 text-3xl mb-3">🎓</div>
                  <h4 className="font-semibold text-gray-800 mb-2">University Selection</h4>
                  <p className="text-gray-600 text-sm">Find the perfect university that matches your academic goals and budget.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-green-600 text-3xl mb-3">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Scholarship Guidance</h4>
                  <p className="text-gray-600 text-sm">Discover available scholarships and funding opportunities for your studies.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-purple-600 text-3xl mb-3">📋</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Application Support</h4>
                  <p className="text-gray-600 text-sm">Get step-by-step guidance through the entire application process.</p>
                </div>
              </div>

              {/* <div className="flex justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Contact Our Counselors
                </button>
              </div>  */}
            </div>
          </div>
        )

      case 'Get instant offer':
        return (
          <div className="py-8">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Your Instant University Offer</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Skip the lengthy application process! Get instant conditional offers from top universities worldwide.
                  Our streamlined process connects you directly with universities that match your profile.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-blue-600 text-3xl mb-3">⚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Instant Response</h4>
                  <p className="text-gray-600 text-sm">Get immediate conditional offers within 24-48 hours of submission.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-green-600 text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Direct University Access</h4>
                  <p className="text-gray-600 text-sm">Connect directly with university admission teams and decision makers.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-purple-600 text-3xl mb-3">📄</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Simplified Process</h4>
                  <p className="text-gray-600 text-sm">Minimal documentation required - just your academic credentials and preferences.</p>
                </div>
              </div>

              {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">How It Works:</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                    <p className="text-gray-600">Submit your profile</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                    <p className="text-gray-600">We match you with universities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                    <p className="text-gray-600">Receive instant offers</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                    <p className="text-gray-600">Choose your best option</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => window.location.href = '/instant-offer'}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white hover:from-blue-700 hover:to-purple-700 transition-colors text-lg font-medium"
                >
                  Start Your Instant Offer Process
                </button>
              </div> */}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:-mt-20">
      <div className="rounded-2xl bg-white opacity-100 shadow-md ring-1 ring-gray-200 overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-shadow">
        {/* Debug info - remove this in production */}
        <div className="px-4 pt-2 text-xs text-gray-500">
          Active Tab: {activeTab}
        </div>
        {/* Tabs */}
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 pt-4 overflow-x-auto overflow-y-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-3 text-sm sm:text-base whitespace-nowrap border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === tab
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="px-4 sm:px-6 pb-5 pt-4">
          {activeTab === 'Guide me' || activeTab === 'Get instant offer' ? (
            renderForm()
          ) : (<>
            <form key={activeTab} onSubmit={handleSearch}>
              {renderForm()}
              
            </form>
            {/* <button className='inline-flex items-center gap-2 rounded-full bg-[#11AD00] px-6 py-3 text-white hover:bg-[#4CADFF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>Advanced Search</button> */}
            <AdvancedSearchModal></AdvancedSearchModal>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchCard