import React from 'react'
import { motion as Motion } from 'framer-motion'
import blur from "../assets/blur.jpg"

const ReleventSection3 = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Personalized Study Destination Guidance",
      description: "Navigating the vast array of global study options with our expert advice, we help you identify the best destinations that align with your academic goals, cultural preferences, and career aspirations"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Scholarship and Financial Aid Assistance",
      description: "Our team provides up-to-date information on scholarships, grants, and financial aid options available worldwide"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visa and Immigration Advisory",
      description: "We offer expert advice on visa requirements, documentation, and immigration procedures to help you stay compliant and stress-free."
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Blurred Background Image */}
      <img 
        src={blur}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'blur(4px)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Services Badge */}
        <Motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm tracking-wider">
            SERVICES
          </div>
        </Motion.div>

        {/* Main Title */}
        <Motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
           Our <span className="text-yellow-100">Top-Notch</span> Services
        </Motion.h2>

        {/* Description */}
        <Motion.p
          className="text-lg md:text-xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Specializing in <strong className="text-yellow-400">study destination guidance</strong> and <strong className="text-yellow-400">scholarship and financial aid assistance</strong>, 
          and visa and immigration advisory, we partner with students and families to craft a professional and meaningful educational journey that<strong className="text-yellow-400">set</strong> the stage for future success. Through expert guidance, thoughtful research, and ongoing support from our team,<strong className="text-yellow-400"> we help shape modern, thriving academic careers</strong>
        </Motion.p>

        {/* Services Grid */}
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <Motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <Motion.div
                  className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {service.icon}
                </Motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* CTA Section */}
        <Motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Scholarship Journey Today
          </button>
        </Motion.div>
      </div>
    </section>
  )
}

export default ReleventSection3