import React from 'react'
import { motion as Motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroImg from "../assets/paralel.jpeg"

const ReleventSection1 = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const topics = [
    {
      title: "IELTS Preparation",
      description: "Master the IELTS test with our comprehensive preparation programs and expert guidance.",
      icon: "📚"
    },
    {
      title: "University Applications",
      description: "Get personalized assistance for university applications and admission processes.",
      icon: "🎓"
    },
    {
      title: "Visa Support",
      description: "Navigate visa requirements with our experienced immigration consultants.",
      icon: "✈️"
    },
    {
      title: "Scholarship Guidance",
      description: "Discover funding opportunities and scholarship programs for international students.",
      icon: "💰"
    }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Fixed Background with Parallax */}
      <Motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div 
          className="h-[120%] w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </Motion.div>

      {/* Content */}
      <Motion.div 
        className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Journey to Success
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From IELTS preparation to university admission, we guide you through every step of your study abroad journey.
            </p>
          </Motion.div> 

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {topics.map((topic, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{topic.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{topic.description}</p>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Start Your Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  )
}

export default ReleventSection1