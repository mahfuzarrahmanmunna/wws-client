import React from 'react'
import IELTSBanner from '../../component/IELTSBanner'
import bannerImg from '../../assets/Whatisielts.jpg'

const WhatsIltes = () => {
  // Props for the reusable IELTS Banner component
  const bannerProps = {
    title: "Why takes IELTS with WWS?",
    description: "We take pride in delivering exceptional customer service to ensure your IELTS test experience is the best it can be.",
    bannerImage: bannerImg,
    paragraphText: "WWS is a proud partner of the IELTS test and delivers the test through our extensive network of custom built test centres worldwide.",
    buttonText: "Book now",
    buttonAction: () => console.log("Book IELTS Test"),
    reasons: [
      {
        title: "1. Find a test location that works for you",
        description: "We offer the test at more than 200 convenient and well-appointed locations across the world. Find a test location that suits your needs."
      },
      {
        title: "2. Take IELTS on a computer",
        description: "Many WWS IELTS test centres now offer computer-delivered IELTS. With fast results and a face-to-face Speaking test, computer-delivered IELTS is a great option for those who wish to take their IELTS test using a computer. Check with your local WWS office to see if computer-delivered IELTS is available in your city."
      },
      {
        title: "3. You'll hear the difference",
        description: "We offer infrared headphones for the Listening test at some of our WWS IELTS centres. They offer high quality audio and the flexibility to adjust the volume and strap at your own convenience. Check with your local WWS office to see if they're available."
      },
      {
        title: "4. You'll be better prepared",
        description: "WWS offers a comprehensive range of low cost and free IELTS preparation materials to support you as you study for the test. You can register online for an IELTS Masterclass in your city and download your free IELTS Support Tools."
      },
      {
        title: "5. You can choose how you receive your results",
        description: "We give you the option to receive your test results via SMS or through our secure online portal. Your WWS counsellor can help with any IELTS questions that you have and help you to book your test."
      },
      {
        title: "6. We're always here to help",
        description: "Our dedicated support team is available to assist you throughout your IELTS journey. From registration to receiving your results, we're committed to providing you with the best possible experience and ensuring your success."
      }
    ]
  }

  return <IELTSBanner {...bannerProps} />
}

export default WhatsIltes