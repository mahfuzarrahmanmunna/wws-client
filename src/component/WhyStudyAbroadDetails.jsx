import React from 'react'

/**
 * Reusable Details Component for Study Abroad Pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.introText1 - First introductory paragraph
 * @param {string} props.introText2 - Second introductory paragraph
 * @param {string} props.mainHeading - Main section heading
 * @param {string} props.mainDescription - Main section description
 * @param {string} props.sectionHeading - Academic section heading
 * @param {string} props.sectionText1 - First academic paragraph
 * @param {string} props.sectionText2 - Second academic paragraph
 * @param {string} props.buttonText - CTA button text
 * @param {Function} props.buttonAction - Button click handler
 * 
 * @example
 * // Basic usage with default props
 * <WhyStudyAbroadDetails />
 * 
 * @example
 * // Custom usage with props
 * <WhyStudyAbroadDetails 
 *   mainHeading="Custom Benefits"
 *   buttonText="Get Started"
 *   buttonAction={() => navigate('/contact')}
 * />
 */
const WhyStudyAbroadDetails = ({
  introText1,
  introText2,
  mainHeading,
  mainDescription,
  sectionHeading,
  sectionText1,
  sectionText2,
  buttonText,
  buttonAction = () => {}
}) => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Introductory Text */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
            {introText1}
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
            {introText2}
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {mainHeading}
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
            {mainDescription}
          </p>
        </div>

        {/* Academic Growth Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {sectionHeading}
          </h3>
          
          <div className="space-y-6 lg:space-y-8">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
              {sectionText1}
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
              {sectionText2}
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
         {/* <div className="pt-6 sm:pt-8">
          <button 
            onClick={buttonAction}
            className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default WhyStudyAbroadDetails