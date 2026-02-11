import React from 'react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Fast & Efficient',
    body:
      'Lightning-fast delivery without compromising on quality or attention to detail.',
    cta: { label: 'Learn More', to: '/fast-efficient-details' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Creative Solutions',
    body:
      'Innovative designs that stand out and make a lasting impression on your audience.',
    cta: { label: 'Learn More', to: '/creative-solutions' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Client Focused',
    body:
      "Your success is our priority. We work closely with you every step of the way.",
    cta: { label: 'Learn More', to: '/client-focused' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'IELTS and test prep support',
    body:
      'Prepare with expert resources, test strategies, and access to official IELTS and English proficiency training.',
    cta: { label: 'Start preparing', to: '/ielts-and-test' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5.25 5.25h10.5A2.25 2.25 0 0118 7.5v11.25H7.5A2.25 2.25 0 015.25 16.5V5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 3.75h9.75A2.25 2.25 0 0118 6v12M9 8.25h4.5M9 12h4.5" />
      </svg>
    )
  },
  {
    title: 'Support through every step',
    body:
      'From course selection and visa applications to pre-departure and post-arrival guidance, we are here for you.',
    cta: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
        <text x="12" y="16" textAnchor="middle" fontSize="3" fontWeight="bold" fill="currentColor">24/7</text>
      </svg>
    )
  },
  {
    title: 'Global reach, local care',
    body:
      'With offices and partners across multiple countries, you can access expert counsellors wherever you are.',
    cta: { label: 'Find support near you', to: '/global-reach' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]
const WhyIts = () => {
  return (
    <section className="bg-white mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">What Makes World Wise Scholars Different

        </h2>
        <div className="mt-2 h-1 w-10 rounded bg-purple-600" />
        <p className="mt-2 text-[#7A828E] text-lg">We are not sales-driven—we are student-driven, We fuse creativity and technology to shape ideas into <br /> innovative realities. Fueled by passion, we deliver excellence that stands out and makes an impact.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:shadow-lg hover:shadow-gray-100"
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full text-white bg-[#11AD00] hover:bg-[#4CADFF] transition-colors duration-300">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base leading-6 text-[#7A828E]">{card.body}</p>
              {card.cta ? (
                <Link
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
                  to={card.cta.to}
                >
                  {card.cta.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyIts