import React from 'react'

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">World Wise Scholars</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to World Wise Scholars. These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing or using our platform, you accept these terms in full. If you do not agree with any part of these terms, please do not continue to use our website.
            </p>

            {/* Interpretation */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Interpretation and Definitions</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Words with the initial letter capitalized have specific meanings as defined below. These definitions apply whether they appear in singular or plural.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Company</strong> refers to World Wise Scholars, also referred to as "We", "Us", or "Our".</li>
                <li><strong>Service</strong> means the website, platform, and related offerings provided by World Wise Scholars.</li>
                <li><strong>User</strong> refers to any individual or organization accessing or using the Service.</li>
                <li><strong>Content</strong> refers to text, images, videos, or any other materials shared on or through the Service.</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">User Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our Service, you agree to act responsibly and not misuse the platform in any way. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use the Service for unlawful purposes or in violation of applicable laws.</li>
                <li>Upload, distribute, or share harmful, offensive, or misleading content.</li>
                <li>Attempt to gain unauthorized access to any part of the Service or other user accounts.</li>
                <li>Use any automated system or software to extract data from our platform.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Intellectual Property Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, trademarks, and materials available on the World Wise Scholars platform are the property of the Company or its licensors. You may not reproduce, distribute, or use our materials without prior written permission.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Links to Other Websites</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service may contain links to third-party websites that are not owned or controlled by World Wise Scholars. We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, World Wise Scholars and its affiliates shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our Service.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to the Service immediately, without prior notice, if you violate these Terms and Conditions or engage in any activity that may harm the integrity of our platform.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed and interpreted in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">Changes to These Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. Changes will take effect once posted on this page. It is your responsibility to review these Terms periodically for any updates.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Terms & Conditions last updated on 2025/09/22
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h4>
                <p className="text-gray-700">
                  If you have any questions about these Terms and Conditions, please contact us at{' '}
                  <a href="mailto:worldwisescholars@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold">
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

export default TermsCondition
