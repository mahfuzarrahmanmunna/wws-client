import React, { useState } from 'react'

/**
 * Reusable Q&A Component for Study Abroad Pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main section heading
 * @param {Array} props.qaData - Array of Q&A objects with id, question, and answer
 * 
 * @example
 * // Basic usage with default props
 * <StudyAbroadQA />
 * 
 * @example
 * // Custom usage with props
 * <StudyAbroadQA 
 *   title="Custom FAQ Section"
 *   qaData={customQAData}
 * />
 */
const StudyAbroadQA = ({
  title,
  qaData
}) => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main Heading */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <div className="mt-2 h-1 w-10 rounded bg-purple-600" />
        </div>
        
        {/* Q&A Sections */}
        <div className="space-y-4 sm:space-y-6">
          {qaData.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              
              {/* Question Header - Full Width */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 px-6 sm:px-8">
                    {item.id}. {item.question}
                  </h3>
                </div>
                
                {/* Expand/Collapse Icon */}
                <div className="ml-4 flex-shrink-0 px-6 sm:px-8">
                  <div className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-full h-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {/* Answer Content - Full Width */}
              {openIndex === index && (
                <div className="w-full border-t border-gray-100">
                  <div className="py-4 sm:py-6">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed px-6 sm:px-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default StudyAbroadQA