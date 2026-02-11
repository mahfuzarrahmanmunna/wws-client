import React from 'react'

/**
 * Reusable Destination Table Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main table heading
 * @param {string} props.subtitle - Subtitle text below heading
 * @param {Array} props.tableData - Array of table rows with institution and ranking
 * 
 * @example
 * // Basic usage
 * <DestinationTable 
 *   title="Top universities in Canada for studying in Canada"
 *   subtitle="Here are the top universities for higher education in Canada:"
 *   tableData={canadaUniversities}
 * />
 * 
 * @example
 * // Custom usage
 * <DestinationTable 
 *   title="Top universities in Australia"
 *   subtitle="Leading educational institutions in Australia:"
 *   tableData={australiaUniversities}
 * />
 */
const DestinationTable = ({
  title,
  subtitle,
  tableData
}) => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full mx-auto">
              {/* Table Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider w-20 whitespace-nowrap">
                    S. No.
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Institution
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider w-40 whitespace-nowrap">
                    QS Ranking 2024 (Globally)
                  </th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData?.map((item, index) => (
                  <tr key={item.id || index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {/* Serial Number */}
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}.
                    </td>
                    
                    {/* Institution Name */}
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer transition-colors duration-200">
                      {item.institution}
                    </td>
                    
                    {/* QS Ranking */}
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {item.ranking}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-base text-gray-500">
            Rankings are based on QS World University Rankings 2024
          </p>
        </div>
      </div>
    </div>
  )
}

export default DestinationTable