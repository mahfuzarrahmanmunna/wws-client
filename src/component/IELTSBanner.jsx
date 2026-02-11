import React, { useState } from 'react'
import ContactHome from './ContactHome'

/**
 * Reusable IELTS Banner Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main heading text
 * @param {string} props.description - Description text below the title
 * @param {string} props.bannerImage - Image source path for banner background
 * @param {string} props.paragraphText - Text content for the detailed section
 * @param {string} props.buttonText - Button text (default: "Book now")
 * @param {Function} props.buttonAction - Button click handler (default: empty function)
 * @param {Array} props.reasons - Array of reason objects with title and description
 * 
 * @example
 * <IELTSBanner 
 *   title="Why takes IELTS with WWS?"
 *   description="We take pride in delivering exceptional customer service"
 *   bannerImage={bannerImg}
 *   paragraphText="WWS is a proud partner of the IELTS test..."
 *   reasons={[
 *     { title: "1. Find a test location", description: "We offer..." },
 *     { title: "2. Take IELTS on computer", description: "Many centres..." }
 *   ]}
 * />
 */
const IELTSBanner = ({ 
  title,
  description,
  bannerImage,
  paragraphText,
  buttonText = "Book now",
  buttonAction = () => {},
  reasons = []
}) => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={bannerImage}
            alt="IELTS Banner" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-opacity-10 opacity-30"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav className="text-sm sm:text-base mb-4">
                <span className="opacity-80 text-gray-600">WWS Bangladesh</span>
                <span className="mx-2">/</span>
                <span className="font-medium">{title}</span>
              </nav>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                {title}
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                {description}
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={handleButtonClick}
                className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed Content Section */}
      <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          {/* Introductory Paragraph */}
          <p className="text-gray-800 text-2xl leading-relaxed mb-12">
            {paragraphText}
          </p>
          
          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Here are six reasons why you should take your IELTS test with WWS:
          </h2>
          
          {/* Reasons List */}
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-800 text-xl leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
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

export default IELTSBanner
