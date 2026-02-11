import React from 'react'
import { Link } from 'react-router-dom'

const Getready = () => {
  return (
    <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-white">Top Universities We Work With</span>
          <span className="text-white"></span>
          <span className="text-white"></span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-white text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          We work with recognized, accredited universities and institutions across our destination countries
        </p>
        
        {/* CTA Button */}
        <Link to={"/contact"} className="bg-green-600 hover:bg-[#4CADFF] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors">
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}

export default Getready