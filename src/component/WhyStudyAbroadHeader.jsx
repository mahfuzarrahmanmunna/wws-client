import React, { useState } from 'react'
import ContactHome from './ContactHome'

/**
 * Reusable Header Component for Study Abroad Pages
 * 
 * @param {Object} props - Component props
 * @param {Array} props.breadcrumbItems - Array of breadcrumb items (default: ["WWS Bangladesh", "Why Go Abroad?"])
 * @param {string} props.title - Main heading text (default: "Why study abroad?")
 * @param {string} props.description - Description text (default: "Choosing to study abroad means choosing growth, adventure, and opportunity")
 * @param {string} props.buttonText - Button text (default: "Explore Opportunities")
 * @param {Function} props.buttonAction - Button click handler (default: empty function)
 * @param {string} props.image - Image source path (default: "../assets/abroad.jpg")
 * 
 * @example
 * // Basic usage with default props
 * <WhyStudyAbroadHeader />
 * 
 * @example
 * // Custom usage with props
 * <WhyStudyAbroadHeader 
 *   title="Study in Canada"
 *   description="Discover world-class education in Canada"
 *   buttonText="Apply Now"
 *   buttonAction={() => navigate('/apply')}
 *   image={canadaImage}
 * />
 */
const WhyStudyAbroadHeader = ({ 
  breadcrumbItems,
  title,
  description,
  buttonText,
  buttonAction = () => {},
  image ,
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
    <div className="relative bg-gray-100 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Breadcrumb */}
            <nav className="text-sm sm:text-base text-gray-600">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <span className={index === breadcrumbItems.length - 1 ? "text-gray-800 font-medium" : ""}>
                    {item}
                  </span>
                  {index < breadcrumbItems.length - 1 && <span className="mx-2">/</span>}
                </React.Fragment>
              ))}
            </nav>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
              {description}
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={handleButtonClick}
                className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative lg:order-2">
            {/* Main Image Container */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                {/* Students studying image */}
                <img 
                  src={image}
                  alt="Students studying abroad" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0  bg-opacity-20"></div>
              </div>
              
              {/* Orange curved overlay */}
              <div className="absolute bottom-0 right-0 w-32 sm:w-40 lg:w-48 xl:w-56 h-24 sm:h-32 lg:h-40 xl:h-48 bg-orange-500 rounded-tl-3xl"></div>
              
              {/* Floating study elements */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-2 shadow-lg">
                <span className="text-2xl sm:text-3xl">📚</span>
              </div>
              <div className="absolute top-8 right-8 bg-white bg-opacity-90 rounded-full p-2 shadow-lg">
                <span className="text-2xl sm:text-3xl">🌍</span>
              </div>
              <div className="absolute bottom-16 left-8 bg-white bg-opacity-90 rounded-full p-2 shadow-lg">
                <span className="text-2xl sm:text-3xl">🎓</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-10 sm:h-10 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-pink-300 rounded-full opacity-60"></div>
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

export default WhyStudyAbroadHeader