import React from 'react'
import { motion as Motion } from 'framer-motion'
import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"
import a4 from "../assets/a4.jpg"
import a5 from "../assets/a5.jpeg"
import a6 from "../assets/a6.jpg"

const Study = () => {
  const destinations = [
    { title: 'Australia', image: a1 },
    { title: 'Canada', image: a2 },
    { title: 'New Zealand', image: a3 },
    { title: 'United Kingdom', image: a4 },
    { title: 'United States', image: a5 },
    { title: 'Ireland', image: a6 }
  ]
  return (
    <section className="bg-white mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">Choose Your Study Destination</h2>
        <div className="mt-2 h-1 w-10 rounded bg-blue-600" />
        <p className="mt-3 text-gray-600">Choosing to study abroad is a life-changing decision. At World Wise Scholars, we simplify the process by offering personalized counseling, verified university options, and structured visa guidance, ensuring students make informed and achievable choices based on their academic profile, career goals, and financial capacity</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((dest, idx) => (
          <Motion.div
            key={idx}
            className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-shadow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* Hover reveal layer */}
            <Motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Motion.div
                initial={{ y: 16, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="rounded-full bg-white/90 px-5 py-2 text-gray-900 font-semibold shadow"
              >
                Study in {dest.title}
              </Motion.div>
            </Motion.div>
            {/* Title */}
            <div className="absolute left-5 bottom-5">
              <h3 className="text-white text-xl font-bold drop-shadow">{dest.title}</h3>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}

export default Study