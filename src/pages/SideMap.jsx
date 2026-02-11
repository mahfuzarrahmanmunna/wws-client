import React from 'react'

const SideMap = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Site Map</h1>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">World Wise Scholars</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to the World Wise Scholars Site Map. This page is designed to help you easily navigate our platform and explore all the sections available to you. Whether you are a student, educator, or partner, this overview will guide you through our main pages and their purpose.
            </p>

            {/* Website Structure */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Website Overview</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Home:</strong> Discover our mission, featured programs, and the vision of World Wise Scholars.</li>
                <li><strong>About Us:</strong> Learn more about who we are, our values, and how we support global learners.</li>
                <li><strong>Courses:</strong> Explore a wide range of academic and professional courses designed for lifelong learning.</li>
                <li><strong>Events:</strong> Stay updated on workshops, webinars, and educational events happening around the world.</li>
                <li><strong>Scholarships:</strong> Find scholarship opportunities and application details for eligible students.</li>
                <li><strong>Contact:</strong> Reach out to us for support, inquiries, or collaboration opportunities.</li>
                <li><strong>Privacy Policy:</strong> Understand how we collect, use, and protect your personal information.</li>
                <li><strong>Terms & Conditions:</strong> Review the rules and guidelines for using our platform responsibly.</li>
              </ul>
            </div>

            {/* Navigation Guidance */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Navigation Tips</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can access all major pages from the main navigation bar at the top of the website. For quick access, you can also use the footer links available at the bottom of every page.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are unable to find something specific, you can use the search bar or contact our support team for guidance.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Need Assistance?</h4>
                <p className="text-gray-700 mb-3">
                  If you have trouble locating a page or need help navigating the site, feel free to contact us.
                </p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a
                    href="mailto:worldwisescholars@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    worldwisescholars@gmail.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMap
