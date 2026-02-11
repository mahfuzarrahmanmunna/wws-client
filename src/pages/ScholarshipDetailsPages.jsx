import React from 'react'
import ScholarshipDetails from '../component/ScholarshipDetails'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ContactHome from '../component/ContactHome'

const ScholarshipDetailsPages = () => {

   let {id}= useParams()
   console.log(id)

   const fetchScholarship = async () => {
    const res = await fetch(`http://localhost:3000/api/scholarship/${id}`);
    return res.json();
  };

    const { data, isLoading, isError, error } = useQuery({
    queryKey: ["scholarship", id],   // unique key for caching with id
    queryFn: fetchScholarship,   // function that returns data
  });

  console.log(data)

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#11AD00] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading scholarship details...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Scholarship</h2>
          <p className="text-gray-600 mb-4">Sorry, we couldn't load the scholarship details.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 py-3 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Show not found state
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🎓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Scholarship Not Found</h2>
          <p className="text-gray-600 mb-4">The scholarship you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 py-3 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
    <ScholarshipDetails
      studyLevel={data.studyLevel}
      destination={data.destination}
      description={data.description}
      eligibility={data.eligibility}
      duration={data.duration}
      tuitionFee={data.tuitionFee}
      coursesIncluded={data.coursesIncluded}
      applicationLink={data.applicationLink || "https://example.com/apply"}
      contactEmail={data.contactEmail}
      bannerImage="https://via.placeholder.com/1920x1080?text=Scholarship+Banner"
    />
    <ContactHome></ContactHome>

    </>
  )
}

export default ScholarshipDetailsPages