import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import axios from 'axios'

const ReleventSection2 = () => {
  // Sample counselor data - you can replace with real data
  // const counselors = [
  //   { 
  //     id: 1,
  //     name: "Dr. Sarah Johnson",
  //     email: "abdshakaet@gmail.com",
  //     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&auto=format",
  //     // specialty: "Study Abroad Specialist"
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     email: "michael.chen@worldwisescholars.com",
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
  //     // specialty: "University Admissions Expert"
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Emily Rodriguez",
  //     email: "emily.rodriguez@worldwisescholars.com",
  //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format",
  //     // specialty: "Career Guidance Counselor"
  //   }
  // ]

  const [counselors, setCounselors] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔹 Fetch show === true ambassadors
  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/user/ambassador/show'
        )

        // console.log(res.data)

        // 🔁 Backend data → UI friendly format
        const formattedData = res.data.map(user => ({
          id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          image:
            user.photoURL ||
            ""
        }))

        setCounselors(formattedData)
      } catch (err) {
        console.error('Failed to fetch counselors', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCounselors()
  }, [])

  const handleEmailClick = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  
  

  return (
    counselors.length > 0 &&  <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our Expert
            <span className="block text-[#11AD00]">Counselors</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of experienced counselors is here to guide you through every step of your educational journey. Get personalized advice and support from industry experts.
          </p>
        </Motion.div>

        {/* Counselors Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {counselors.map((counselor, index) => (
            <Motion.div
              key={counselor.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => handleEmailClick(counselor.email)}
            >
              <div className="bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center">
                        Send Email
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-red-600"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {counselor.name}
                  </h3>

                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="text-sm font-medium truncate">
                      {counselor.email}
                    </span>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Motion.div>
          ))}
        </div>

        
      </div>
    </section>
  
  )
}

export default ReleventSection2