import React from 'react'
import IELTSBanner from '../../component/IELTSBanner'
import bannerImg from '../../assets/LS_2.jpg'

const IeltsPrep = () => {
  // Props for the reusable IELTS Banner component
  const bannerProps = {
    title: "IELTS Preparation",
    description: "Get ready for your IELTS test with our comprehensive preparation resources, expert guidance, and proven strategies to achieve your target score.",
    bannerImage: bannerImg,
    paragraphText: "Proper preparation is key to IELTS success. Our comprehensive preparation program covers all four test components with expert guidance, practice materials, and personalized feedback to help you achieve your target band score.",
    buttonText: "Start Preparation",
    buttonAction: () => console.log("Start IELTS Preparation"),
    reasons: [
      {
        title: "1. Comprehensive study materials",
        description: "Access a wide range of official IELTS practice materials, sample tests, and study guides designed by IELTS experts to help you understand the test format and question types."
      },
      {
        title: "2. Expert-led preparation courses",
        description: "Join our structured preparation courses led by certified IELTS instructors who provide personalized guidance, tips, and strategies tailored to your specific needs and target score."
      },
      {
        title: "3. Practice tests and mock exams",
        description: "Take full-length practice tests under exam conditions to familiarize yourself with the test format, timing, and pressure. Get detailed feedback on your performance to identify areas for improvement."
      },
      {
        title: "4. Individual skill development",
        description: "Focus on improving specific skills with targeted exercises for Listening, Reading, Writing, and Speaking. Our materials address common challenges and provide step-by-step solutions."
      },
      {
        title: "5. Flexible learning options",
        description: "Choose from online self-study courses, live virtual classes, or in-person sessions. Study at your own pace with 24/7 access to materials and support from our expert team."
      },
      {
        title: "6. Progress tracking and feedback",
        description: "Monitor your improvement with detailed progress reports, personalized feedback on practice tests, and regular assessments to ensure you're on track to achieve your target band score."
      }
    ]
  }

  return <IELTSBanner {...bannerProps} />
}

export default IeltsPrep