import React, { useState } from 'react';
import ContactHome from './ContactHome';
import { Link } from 'react-router-dom';

/**
 * Reusable Paragraph Component for Study Abroad Pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.mainText - Main paragraph text content
 * @param {string} props.image1 - First image source path
 * @param {string} props.image2 - Second image source path
 * @param {string} props.image1Alt - First image alt text
 * @param {string} props.image2Alt - Second image alt text
 * @param {string} props.galleryTitle - Gallery section title
 * @param {string} props.gallerySubtitle - Gallery section subtitle
 * @param {string} props.cardTitle - Sign-up card title
 * @param {string} props.cardDescription - Sign-up card description
 * @param {string} props.buttonText - Sign-up button text
 * @param {Function} props.buttonAction - Sign-up button click handler
 * 
 * @example
 * // Basic usage with default props
 * <WhyStudyAbroadParagraph />
 * 
 * @example
 * // Custom usage with props
 * <WhyStudyAbroadParagraph 
 *   mainText="Your custom paragraph text here..."
 *   image1={customImage1}
 *   image2={customImage2}
 *   cardTitle="Custom Card Title"
 *   buttonText="Get Started"
 * />
 */
const WhyStudyAbroadParagraph = ({
  mainText,
  image1,
  image2,
  image1Alt,
  image2Alt,
  galleryTitle,
  gallerySubtitle,
  cardTitle,
  cardDescription,
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
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Block */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                <p className="text-base sm:text-lg lg:text-xl mb-4">
                  {mainText}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Visual Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column - Image Gallery Block */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100">
            <div className="flex h-[300px] sm:h-[400px] lg:h-[500px]">
              
              {/* Image Gallery Section (Left 2/3) */}
              <div className="relative flex-1 flex flex-col">
                {/* Top Image */}
                <div className="flex-1 relative">
                  <img 
                    src={image1}
                    alt={image1Alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Light overlay for better text readability */}
                  <div className="absolute inset-0  bg-opacity-20"></div>
                </div>
                
                {/* Bottom Image */}
                <div className="flex-1 relative">
                  <img 
                    src={image2}
                    alt={image2Alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Light overlay for better text readability */}
                  <div className="absolute inset-0  bg-opacity-20"></div>
                </div>
              </div>
              
              {/* Blue Section (Right 1/3) */}
              <div className="w-1/3 bg-blue-900 flex flex-col justify-center items-center p-4 sm:p-6">
                {/* Logo */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg sm:text-xl">WWS</span>
                  </div>
                </div>
                
                {/* Gallery Info */}
                <div className="text-center text-white">
                  <p className="text-xs sm:text-sm mb-2 opacity-80">Gallery</p>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2">{galleryTitle}</h3>
                  <p className="text-xs sm:text-sm opacity-80">{gallerySubtitle}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sign-up Card */}
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {cardTitle}
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {cardDescription}
              </p>
              
              <Link to={"/signup"}
               
                className="w-full sm:w-auto bg-[#4CADFF] hover:bg-[#11AD00] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
              <button 
                onClick={handleButtonClick}
                className="w-full md:ms-5 mt-2 sm:w-auto bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </button>
              
            </div>
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

    
  );
};

export default WhyStudyAbroadParagraph;