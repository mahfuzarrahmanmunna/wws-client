import React, { useState } from 'react';
import banner from "../assets/ieltss.jpg"
import ContactHome from './ContactHome';

/**
 * Reusable Course Detail Banner Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.subject - Course subject
 * @param {string} props.studyLevel - Study level (Undergraduate/Postgraduate/etc)
 * @param {string} props.destination - Country of study
 * @param {string} props.duration - Course duration
 * @param {string} props.description - Course description
 * @param {string} props.tuitionFee - Tuition fee range
 * @param {string} props.requirements - Entry requirements
 * @param {string} props.benefits - Course benefits
 * @param {string} props.applicationLink - URL for application
 * @param {string} props.provider - Institution name
 * @param {string} props.contactEmail - Contact email
 * @param {string} props.bannerImage - Background image for banner (optional)
 * 
 * @example
 * <CourseDetailBanner 
 *   subject="Law"
 *   studyLevel="Undergraduate"
 *   destination="USA"
 *   duration="4 years"
 *   description="An undergraduate law program..."
 *   tuitionFee="$18,000 - $28,000 per year"
 *   requirements="High school diploma..."
 *   benefits="Access to legal research libraries..."
 *   applicationLink="https://example.com/apply/law-usa"
 *   provider="Harvard Law College"
 *   contactEmail="admissions@harvardlaw.edu"
 *   bannerImage={lawBannerImage}
 * />
 */
const CourseDetails = ({
  subject,
  studyLevel,
  destination,
  duration,
  description,
  tuitionFee,
  requirements,
  benefits,
  applicationLink,
  provider,
  contactEmail,
  // bannerImage: banner,
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
            src={banner}
            alt={`${subject} in ${destination}`} 
            className="hidden md:flex w-full h-full object-cover"
          />
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0  bg-opacity-20"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav className="text-sm sm:text-base mb-4">
                <span className="opacity-80 text-black">Study Abroad</span>
                <span className="mx-2 text-black">/</span>
                <span className="text-black">{destination}</span>
                <span className="mx-2 text-black">/</span>
                <span className="font-medium text-black">{subject}</span>
              </nav>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                {subject} in {destination}
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                {studyLevel} Program • {duration} • {provider}
              </p>
              
              {/* CTA Button */}
              <a 
               onClick={handleButtonClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#11AD00] hover:bg-[#4CADFF] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed Content Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Institution Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {provider}
            </h2>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {studyLevel}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {destination}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {duration}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Program</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Tuition Fee */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tuition Fee</h3>
              <p className="text-gray-800 text-lg">{tuitionFee}</p>
            </div>
            
            {/* Duration */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-800 text-lg">{duration}</p>
            </div>
            
            {/* Requirements */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entry Requirements</h3>
              <p className="text-gray-800 text-lg">{requirements}</p>
            </div>
            
            {/* Benefits */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Program Benefits</h3>
              <p className="text-gray-800 text-lg">{benefits}</p>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {/* Email Contact */}
              <div className="flex items-center justify-center sm:justify-start">
                <a 
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center bg-gray-50 hover:bg-gray-100 px-6 py-4 rounded-lg text-[#11AD00] hover:text-[#4CADFF] text-lg font-medium transition-colors duration-200 border border-gray-200 hover:border-[#11AD00]"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {contactEmail}
                </a>
              </div>
              
              {/* Apply Button */}
              <div className="flex items-center justify-center sm:justify-start">
                <a 
                  onClick={handleButtonClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#11AD00] hover:bg-[#4CADFF] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Apply to this Program
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
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

export default CourseDetails;