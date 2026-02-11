import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icon from "../assets/wws1.png"
import useAuth from '../Hooks/useAuth/useAuth'
// import useAdmin from '../Hooks/role/useAdmin'
// import useAmbassador from '../Hooks/role/useAmbassador'
// import useUser from '../Hooks/role/useUser'

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});
  const navigate = useNavigate();

  let { user, signOuts } = useAuth()

  console.log(user)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileOpen])

  // Navigation functions for different categories
  const handleFindCourses = () => {
    navigate('/search-results/courses', {
      state: {
        searchType: 'courses',
        tab: 'Courses',
        fromHeader: true
      }
    });
  };

  const handleFindScholarships = () => {
    navigate('/search-results/scholarships', {
      state: {
        searchType: 'scholarships',
        tab: 'Scholarships',
        fromHeader: true
      }
    });
  };

  const handleFindUniversities = () => {
    navigate('/search-results/universities', {
      state: {
        searchType: 'universities',
        tab: 'Universities',
        fromHeader: true
      }
    });
  };

  const handleFindEvents = () => {
    navigate('/search-results/events', {
      state: {
        searchType: 'events',
        tab: 'Events',
        fromHeader: true
      }
    });
  };

  const navItems = [
    {
      label: 'Study Abroad',
      to: '/',
      dropdown: [
        { label: 'Why Go Global?', to: '/WhyStudyAbroad' },
        { label: 'Study Destinations', to: '/studyDestination' },
        { label: 'Application Guide', to: '/applicationGuide' },
        { label: 'Next Steps', to: '/next-step' },
        { label: 'Before You Fly', to: '/before-you-fly' },
        { label: 'Thrive Abroad', to: '/thriveAbroad' }
      ]
    },
    {
      label: 'Destinations',
      to: '/',
      dropdown: [
        { label: 'Study in Australia', to: '/study-in-australia' },
        { label: 'Study in Canada', to: '/study-in-canada' },
        { label: 'Study in Ireland', to: '/study-in-ireland' },
        { label: 'Study in New Zealand', to: '/study-in-NewZeland' },
        { label: 'Study in UK', to: '/study-in-Uk' },
        { label: 'Study in USA', to: '/study-in-Usa' }
      ]
    },
    {
      label: 'Programs',
      to: '/search-results',
      dropdown: [
        { label: 'Find a course', action: handleFindCourses },
        { label: 'Find a university', action: handleFindUniversities },
        { label: 'Find a events', action: handleFindEvents },
        { label: 'What is IELTS?', to: '/what-is-ielts' },
        { label: 'Why WWS IELTS?', to: '/why-ielts' },
        { label: 'IELTS Preparation', to: '/ielts-preparation' },
      ]
    },
    {
      label: 'Scholarships',
      to: '/',
      dropdown: [
        { label: 'Find a scholarship', action: handleFindScholarships },
      ]
    },
    {
      label: 'Find us on',
      to: '/',
      dropdown: [
        {
          label: 'Facebook',
          to: 'https://www.facebook.com/worldwisesocial',
          icon: (
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          )
        },
        {
          label: 'Instagram',
          to: 'https://www.instagram.com/worldwisescholars',
          icon: (
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          )
        },
        {
          label: 'LinkedIn',
          to: 'https://www.linkedin.com/company/world-wise-scholars',
          icon: (
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          )
        },
        {
          label: 'Twitter',
          to: 'https://x.com/WwiseScholars',
          icon: (
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </div>
          )
        },
      ]
    },
  ];

  const handleLogout = () => {
    signOuts()
      .then(() => {
        // signed out
      })
      .catch(() => { })
  }

  // Role hooks - currently unused but may be needed for future role-based features
  // let [isAdmin] = useAdmin()
  // let [isambassador] = useAmbassador()
  // let [isUser] = useUser()

  //  console.log(isAdmin,isambassador,isUser)

  return (
    // bg-white/95
    <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" aria-label="WWS home">
              <img
                width={220}
                height={48}
                src={icon}
                alt="World Wise Scholars"
                className="h-28 md:h-32 w-auto object-contain"
              />
            </Link>
          </div>
          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.to}
                  className={`text-sm xl:text-[15px] transition-colors whitespace-nowrap flex items-center gap-1 ${activeDropdown === index
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-slate-700 hover:text-blue-600'
                    }`}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 z-50 transition-all duration-300 ${activeDropdown === index
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                    }`}>
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        dropdownItem.action ? (
                          <button
                            key={dropdownIndex}
                            onClick={dropdownItem.action}
                            className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-left"
                          >
                            <div className="flex items-center gap-3">
                              {dropdownItem.icon && dropdownItem.icon}
                              <span>{dropdownItem.label}</span>
                            </div>
                            {dropdownItem.hasArrow && (
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </button>
                        ) : (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.to}
                            target={item.label === 'Social' ? "_blank" : undefined}
                            rel={item.label === 'Social' ? "noopener noreferrer" : undefined}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {dropdownItem.icon && dropdownItem.icon}
                              <span>{dropdownItem.label}</span>
                            </div>
                            {dropdownItem.hasArrow && (
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Let's Collaborate Button */}
            <Link to={"/contact"} className="inline-flex items-center rounded-full border-2 border-blue-500 px-5 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              Book a Free Counseling
            </Link>

            {user ? (
              <>
                {/* User Profile Section */}
                <div className="relative">
                  {/* User Avatar */}
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-slate-800 truncate">
                          {user.displayName || 'User'}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <div className="px-4 py-2 space-y-1">
                        <Link
                          to="/dashboard/dashboard-home"
                          onClick={() => setIsProfileDropdownOpen(false)}
                          className="w-full text-left text-sm text-slate-700 hover:bg-slate-50 rounded px-3 py-2 transition-colors block"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => { setIsProfileDropdownOpen(false); handleLogout(); }}
                          className="w-full text-left text-sm text-slate-700 hover:bg-slate-50 rounded px-3 py-2 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/signin"
                className="inline-flex items-center rounded-full border-1 border-blue-400 px-5 py-2 text-sm text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Sign in
              </Link>
            )}
          </div>
          {/* Mobile: hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile hamburger button - shows navigation menu */}
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
            >
              {isMobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`${isMobileOpen ? 'fixed inset-0 z-40 mb-40' : 'hidden'} lg:hidden`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="relative bg-white border-t border-gray-100 shadow-lg">
          {/* Close button inside mobile menu */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-3 right-3 inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="px-4 py-4 space-y-3 max-h-screen overflow-y-auto">
          {/* Navigation Links */}
          <div className="space-y-1 mt-5">
            {navItems.map((item, index) => {
              const isOpen = !!openMobileDropdowns[index];
              return (
                <div key={item.label}>
                  {item.dropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdowns((prev) => ({ ...prev, [index]: !prev[index] }))
                      }
                      className="flex items-center justify-between w-full rounded-lg px-3 py-3 text-base text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-3">{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setIsMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && isOpen && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) =>
                        dropdownItem.action ? (
                          <button
                            key={dropdownIndex}
                            onClick={() => {
                              setIsMobileOpen(false);
                              dropdownItem.action();
                            }}
                            className="flex items-center gap-3 w-full text-left rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownItem.icon && dropdownItem.icon}
                            {dropdownItem.label}
                          </button>
                        ) : (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.to}
                            target={item.label === 'Social' ? "_blank" : undefined}
                            rel={item.label === 'Social' ? "noopener noreferrer" : undefined}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownItem.icon && dropdownItem.icon}
                            {dropdownItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Mobile Let's Collaborate Button */}
          <div className="mt-4">
            <Link to={"/contact"} className="w-full inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-5 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              Book a Free Counseling
            </Link>
          </div>
          
          {/* Mobile User Profile Section */}
          {user && (
            <div className="mt-3 px-3 py-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-medium">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">
                    {user.displayName || 'User'}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
              {/* Quick actions for mobile: Dashboard + Logout */}
              <div className="mt-3 space-y-2">
                <Link
                  to="/dashboard/dashboard-home"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => { setIsMobileOpen(false); handleLogout(); }}
                  className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
          {!user && (
            <div className="mt-3 flex items-center gap-3 px-1">
              <Link
                to="/signin"
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-full border-1 border-blue-400 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Sign in
              </Link>
            </div>
          )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header