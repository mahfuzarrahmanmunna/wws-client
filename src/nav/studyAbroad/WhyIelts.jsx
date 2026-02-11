import React from 'react'
import IELTSBanner from '../../component/IELTSBanner'
import bannerImg from '../../assets/LS_1.jpg'

const WhyIelts = () => {
  // Props for the reusable IELTS Banner component
  const bannerProps = {
    title: "Why Choose IELTS?",
    description: "IELTS is the world's most popular English language test for higher education and global migration, trusted by over 10,000 organizations worldwide.",
    bannerImage: bannerImg,
    paragraphText: "IELTS (International English Language Testing System) is designed to assess the language ability of candidates who need to study or work where English is the language of communication.",
    buttonText: "Start Your Journey",
    buttonAction: () => console.log("Start IELTS Journey"),
    reasons: [
      {
        title: "1. Globally recognized and trusted",
        description: "IELTS is accepted by over 10,000 organizations worldwide, including universities, employers, professional bodies, immigration authorities, and other government agencies."
      },
      {
        title: "2. Fair and reliable assessment",
        description: "IELTS provides a fair, accurate, and reliable measure of your English language skills through rigorous testing standards and quality assurance processes."
      },
      {
        title: "3. Two test formats available",
        description: "Choose between IELTS Academic for higher education and professional registration, or IELTS General Training for work experience, training programs, and migration to English-speaking countries."
      },
      {
        title: "4. Comprehensive skill evaluation",
        description: "IELTS tests all four language skills - Listening, Reading, Writing, and Speaking - giving you a complete picture of your English language abilities."
      },
      {
        title: "5. Fast results and convenient scheduling",
        description: "Get your results quickly with computer-delivered IELTS results available in 3-5 days, and paper-based results in 13 days. Tests are available up to 4 times a month."
      },
      {
        title: "6. Real-world communication focus",
        description: "IELTS uses real-world scenarios and authentic materials, ensuring the test reflects how you'll actually use English in your studies, work, and daily life."
      }
    ]
  }

  return <IELTSBanner {...bannerProps} />
}

export default WhyIelts