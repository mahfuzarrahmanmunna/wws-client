import React, { useState } from 'react'
import ContactHome from './ContactHome'

/**
 * Reusable More Details Component for Study Abroad Pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.mainHeading - Main section heading
 * @param {string} props.globalPerspectiveText - Global perspective paragraph
 * @param {string} props.careerHeading - Career section heading
 * @param {Array} props.careerParagraphs - Array of career paragraphs
 * @param {string} props.migrationHeading - Migration section heading
 * @param {Array} props.migrationParagraphs - Array of migration paragraphs
 * @param {string} props.personalHeading - Personal development heading
 * @param {Array} props.personalParagraphs - Array of personal development paragraphs
 * @param {string} props.otherHeading - Other reasons heading
 * @param {string} props.otherIntroText - Other reasons intro text
 * @param {Array} props.subSections - Array of sub-sections with heading and paragraphs
 * @param {string} props.finalHeading - Final section heading
 * @param {string} props.finalText - Final section text
 * @param {string} props.buttonText - CTA button text
 * @param {Function} props.buttonAction - Button click handler
 * 
 * @example
 * // Basic usage with default props
 * <WhyStudyAbroadMoredetails />
 * 
 * @example
 * // Custom usage with props
 * <WhyStudyAbroadMoredetails 
 *   mainHeading="Custom Study Guide"
 *   buttonText="Get Started"
 *   buttonAction={() => navigate('/guide')}
 * />
 */
const WhyStudyAbroadMoredetails = ({
  mainHeading,
  globalPerspectiveText,
  careerHeading,
  careerParagraphs,
  migrationHeading,
  migrationParagraphs,
  personalHeading,
  personalParagraphs,
  otherHeading,
  otherIntroText,
  subSections,
  finalHeading,
  finalText,
  buttonText,
  buttonAction = () => {}
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
    <div className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main Heading */}
        <div className="">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {mainHeading}
          </h2>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          
          {/* Global Perspective */}
          <div className="max-w-none">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
              {globalPerspectiveText}
            </p>
          </div>

          {/* Grow Career Opportunities */}
          <div className="max-w-none">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {careerHeading}
            </h3>
            <div className="space-y-6 lg:space-y-8">
              {careerParagraphs?.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Migration Opportunities */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {migrationHeading}
            </h3>
            {migrationParagraphs?.map((paragraph, index) => (
              <p key={index} className={`text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed ${index === migrationParagraphs.length - 1 ? '' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Personal Development */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {personalHeading}
            </h3>
            {personalParagraphs?.map((paragraph, index) => (
              <p key={index} className={`text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed ${index === personalParagraphs.length - 1 ? '' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Other Reasons */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {otherHeading}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6">
              {otherIntroText}
            </p>

            {subSections?.map((section, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                  {section.heading}
                </h4>
                {section.paragraphs?.map((paragraph, pIndex) => (
                  <p key={pIndex} className={`text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed ${pIndex === section.paragraphs.length - 1 ? '' : 'mb-4'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Final Section */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {finalHeading}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6">
              {finalText}
            </p>
          </div>

          {/* Call to Action Button */}
        <div className="pt-6 sm:pt-8">
          <button 
             onClick={handleButtonClick}
            className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </button>
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

export default WhyStudyAbroadMoredetails