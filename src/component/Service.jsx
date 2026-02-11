import React from 'react'
import banner from "../assets/Banner22.jpg"
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    // <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">


    //   <div className="max-w-7xl mx-auto">
    //     {/* Header */}
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl sm:text-5xl font-bold mb-4">
    //         <span className="text-white">Premium </span>
    //         <span className="text-white">Services</span>
    //       </h2>
    //       <p className="text-[#7A828E] text-lg">Elevate your brand with our exclusive offerings</p>
    //     </div>
  
  
    //     {/* Service Cards */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    //       {/* Premium Design Card */}
    //       <div className="bg-gray-800 rounded-lg p-8 border border-blue-600">
    //         <div className="flex items-start gap-4 mb-6">
    //           <div className="bg-blue-600 p-3 rounded-lg">
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-yellow-400">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    //             </svg>
    //           </div>
    //           <h3 className="text-blue-600 text-xl font-bold">Premium Design</h3>
    //         </div>
    //         <p className="text-gray-300 mb-6 leading-relaxed">
    //           Luxury design solutions that set you apart from the competition with premium quality.
    //         </p>
    //         <button className="bg-blue-600 hover:bg-[#11AD00] text-white px-6 py-3 rounded-lg font-medium transition-colors">
    //           Learn More
    //         </button>
    //       </div>

    //       {/* Growth Package Card */}
    //       <div className="bg-gray-800 rounded-lg p-8 border border-green-600">
    //         <div className="flex items-start gap-4 mb-6">
    //           <div className="bg-green-600 p-3 rounded-lg">
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-white">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    //             </svg>
    //           </div>
    //           <h3 className="text-green-600 text-xl font-bold">Growth Package</h3>
    //         </div>
    //         <p className="text-gray-300 mb-6 leading-relaxed">
    //           Comprehensive solutions designed to accelerate your business growth and market presence.
    //         </p>
    //         <button className="bg-green-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
    //           Get Started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>



   





<section 
  className="relative bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[500px]"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* ব্যাকগ্রাউন্ড ওভারলে */}
  <div className="absolute inset-0 bg-black/70"></div>
  
  <div className="relative max-w-7xl mx-auto mt-30">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        <span className="text-white">Premium </span>
        <span className="text-white">Services</span>
      </h2>
      <p className="text-[#7A828E] text-lg">Finding safe and comfortable accommodation is a major concern for students and parents</p>
    </div>
  
    {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Premium Design Card */}
      <div className="bg-gray-800 rounded-lg p-8 border border-blue-600">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-600 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-yellow-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-blue-600 text-xl font-bold">Premium Design</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Luxury design solutions that set you apart from the competition with premium quality.
        </p>
        <Link to={"/"} className="bg-blue-600 hover:bg-[#11AD00] text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Learn More
        </Link>
      </div>
      {/* Growth Package Card */}
      <div className="bg-gray-800 rounded-lg p-8 border border-green-600">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-green-600 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-green-600 text-xl font-bold">Growth Package</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Comprehensive solutions designed to accelerate your business growth and market presence.
        </p>
        <Link to={"/"} className="bg-green-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Get Started
        </Link>
      </div>
    </div>
  </div>
</section>

  )

}

export default Service