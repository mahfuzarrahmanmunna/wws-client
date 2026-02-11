import React, { useState } from 'react'
import ContactHome from './ContactHome'

const Result1 = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)

    const handleButtonClick = () => {
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    buttonAction() // Call the original button action if provided
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset'
  }
  return (
    <div className="bg-[#17004C] rounded-2xl p-8 mb-8 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 transform translate-x-16 -translate-y-8"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full opacity-30 transform translate-x-24 translate-y-12"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not seeing the perfect course?
          </h2>
          <p className="text-lg text-white mb-6 opacity-90">
            Complete 4 easy questions to unlock course matches designed just for you!
          </p>
          <button onClick={handleButtonClick} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-medium">
            Apply Now
          </button>
        </div>
        
        {/* Right Content - Person Image Placeholder */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background for person */}
            <div className="w-64 h-64 bg-blue-200 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍🎓</span>
                </div>
              </div>
            </div>
            {/* Decorative shapes around person */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
        {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-white">
          {/* Close Button - Fixed Position */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 z-[10000] bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Modal Content - Fullscreen without scrollbars */}
          <div className="w-full h-full overflow-x-hidden">
            <ContactHome />
          </div>
        </div>
      )}
    </div>
  )
}

export default Result1