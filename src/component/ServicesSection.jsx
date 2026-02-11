import React, { useRef } from 'react'
import { motion as Motion, useScroll, useTransform } from 'framer-motion'
import icon1 from "../assets/r1.jpg"
import icon2 from "../assets/new.jpg"
import icon3 from "../assets/p1.jpeg"
import icon4 from "../assets/ev.jpg"
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const services = [
    {
      title: "PROGRAMS",
      description: "Comprehensive study abroad programs tailored to your academic goals and career aspirations.",
      icon: icon1,
      link: "/programs-overview-2023"
    },
    {
      title: "RESULTS",
      description: "Proven track record of successful student placements and high acceptance rates.",
      icon: icon2,
      link: "/results-achievements-2023"
    },
    {
      title: "COACHING",
      description: "Expert guidance and personalized coaching to help you achieve your study abroad dreams.",
      icon: icon3,
      link: "/coaching-services-2023"
    },
    {
      title: "EVENTS",
      description: "Join our educational events, webinars, and university fairs to explore opportunities.",
      icon: icon4,
      link: "/upcoming-events-2023"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden">
      {/* Parallax Background */}
      <Motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="h-[120%] w-full bg-gradient-to-br from-blue-50 via-white to-gray-50" />
      </Motion.div>

      {/* Content */}
      <Motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={`relative ${index % 2 === 0 ? 'mt-8' : 'mt-0'
                }`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl hover:shadow-gray-100 transition-shadow duration-300 border border-gray-200">
                {/* Coral icon */}
                <div className="flex justify-center mb-6">
                  <div className=" flex items-center justify-center p-2">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-40 h-40  rounded-xl"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* More link */}
                <div className="text-center">
                  <Link
                    to={service.link}
                    className="text-green-600 font-medium underline hover:text-green-700 transition-colors duration-200"
                  >
                    MORE
                  </Link>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  )
}

export default ServicesSection