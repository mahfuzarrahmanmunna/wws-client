import React from 'react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import img1 from "../assets/abroad1.jpg"
import img2 from "../assets/usa.webp"

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ten Reasons Why You Should Study In The UK",
      image: img1,
      category: "Study Abroad",
      readTime: "5 min read",
      to: '/ten-reasons-why-you-should-study-in-the-uk'
    },
    {
      id: 2,
      title: "Master's In The UK With Placement",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      category: "Masters",
      readTime: "7 min read",
      to: '/masters-in-the-uk-with-placement'
    },
    {
      id: 3,
      title: "Top Five English Language Tests Accepted By Universities Worldwide",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      category: "Language Tests",
      readTime: "6 min read",
      to: '/top-five-english-language-tests-accepted-by-universities-worldwide'
    },
    {
      id: 4,
      title: "Ten Reasons To Study In The USA",
      image: img2,
      category: "Study Abroad",
      readTime: "8 min read",
      to: '/ten-reasons-to-study-in-the-usa'
    },
    {
      id: 5,
      title: "Best Business Schools In The USA",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      category: "Business",
      readTime: "9 min read",
      to: '/best-business-schools-in-the-usa'
    },

    {
      id: 6,
      title: "Guide To Affordable Universities In The USA For International Students",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      category: "Affordable",
      readTime: "10 min read",
      to: '/guide-to-affordable-universities'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.div
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BLOG / ARTICLES
          </Motion.div>

          <Motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Complete{' '}
            <span className="text-[#11AD00]">Guide to Study Abroad</span>
          </Motion.h2>

          <Motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Articles
              <Motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </Motion.svg>
            </Link> */}
          </Motion.div>
        </Motion.div>

        {/* Blog Grid */}
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post, index) => (
            <Motion.div
              key={post.id}
              variants={itemVariants}
              className="group h-full" // Added h-full to make cards fill grid cell height
            >
              <Motion.article
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col" // Added h-full and flex flex-col
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                {/* Image Container */}
                <Motion.div
                  className="relative h-48 overflow-hidden flex-shrink-0" // Added flex-shrink-0
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Category Badge */}
                  <Motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </Motion.div>
                </Motion.div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col"> 
                  {/* Calendar Icon & Read Time */}
                  <Motion.div
                    className="flex items-center gap-2 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </Motion.div>

                  {/* Title */}
                  <Motion.h3
                    className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  >
                    {post.title}
                  </Motion.h3>

                  {/* Read More Link */}
                  <Motion.div
                    className="mt-auto" // Added mt-auto to push to bottom
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  >
                    <Link
                      to={post.to}
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors duration-300"
                    >
                      Read More
                      <Motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </Motion.svg>
                    </Link>
                  </Motion.div>
                </div>
              </Motion.article>
            </Motion.div>
          ))}
        </Motion.div>


      </div>
    </section>
  )
}

export default BlogSection