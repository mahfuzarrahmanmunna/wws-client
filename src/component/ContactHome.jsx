import React from 'react'
import contact from "../assets/contact.webp"
import ContactForm from './ContactForm'

const ContactHome = () => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Copy + Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">WWS can help you</h2>
        <div className="mt-2 h-1 w-10 rounded bg-purple-600" />
            <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl">
              Enter your details and one of our expert counsellors will reach out to you so we can
              connect you to the right course, country, university – and even scholarships!
            </p>

            {/* Form */}
            <ContactForm></ContactForm>
          </div>

          {/* Right: Image placeholder (ami daner picture ta boshabo) */}
          <div className="relative hidden lg:block">
            {/* <div className="absolute -top-8 -left-8 w-40 h-40 rounded-3xl bg-lime-500"></div> */}
            <div className="relative z-10 h-full min-h-[520px] rounded-3xl  flex items-center justify-center overflow-hidden">
              <p className="text-slate-500"><img src={contact} alt="" className='rounded-lg' /></p>
            </div>
            {/* <div className="absolute -bottom-10 right-6 w-28 h-28 rounded-3xl bg-blue-600"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHome