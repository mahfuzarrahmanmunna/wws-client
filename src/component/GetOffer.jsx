import React, { useState, useEffect } from 'react'

const GetOffer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [showModal, setShowModal] = useState(false)

  
  

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
    if (e.target.checked) {
      setShowModal(true)
    }
  }

  // Auto-close modal after 3 seconds
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false)
        setIsChecked(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showModal])

  return (
    <>
    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="flex items-start gap-2 sm:gap-3">
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <div className="flex-1">
                <span className="text-xs sm:text-sm font-medium text-gray-900">Get Instant Offer FastLane</span>
                <p className="text-xs text-gray-600 mt-1">Get instant offer for FastLane labelled courses within minutes! </p>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 ">
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                {/* Modal Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">🚀 Exclusive FastLane Offer!</h3>
                    <p className="text-gray-600">Unlock premium benefits with our limited-time offer</p>
                  </div>

                  {/* Offer Cards */}
                  <div className="space-y-4 mb-6">
                    {/* Offer 1 */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">⚡ Instant Processing</h4>
                          <p className="text-sm text-gray-600">Get your offer within 24 hours</p>
                        </div>
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          FREE
                        </div>
                      </div>
                    </div>

                    {/* Offer 2 */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">🎯 Priority Support</h4>
                          <p className="text-sm text-gray-600">Dedicated counselor assistance</p>
                        </div>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          50% OFF
                        </div>
                      </div>
                    </div>

                    {/* Offer 3 */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">📚 Study Materials</h4>
                          <p className="text-sm text-gray-600">Free IELTS prep resources</p>
                        </div>
                        <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          BONUS
                        </div>
                      </div>
                    </div>
                  </div>

                 

                  {/* Footer */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      ⏰ Offer expires in 24 hours • Limited time only
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default GetOffer