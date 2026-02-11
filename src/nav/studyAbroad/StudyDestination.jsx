import React from 'react'
import WhyStudyAbroadHeader from '../../component/WhyStudyAbroadHeader'
import WhyStudyAbroadParagraph from '../../component/WhyStudyAbroadParagraph'
import WhyStudyAbroadBookNow from '../../component/WhyStudyAbroadBookNow'
import WhyStudyAbroadDetails from '../../component/WhyStudyAbroadDetails'
import WhyStudyAbroadMoredetails from '../../component/WhyStudyAbroadMoredetails'
import StudyAbroadQA from '../../component/StudyAbroadQA'
import abroad1 from "../../assets/abroad.jpg"
import studentsImage from "../../assets/whygoglobal.jpg"
import graduationImage from "../../assets/graduation.jpg"
import counsellorImage from "../../assets/graduation.jpg"
import ContactHome from '../../component/ContactHome'

const StudyDestination = () => {
// Header props configuration
const headerProps = {
  breadcrumbItems: ["WWS Bangladesh", "Study Destinations"],
  title: "Top Study Abroad Destinations",
  description:
    "Discover the most popular countries for international students and find the perfect destination for your academic journey.",
  buttonText: "Explore Countries",
  buttonAction: () => {
    console.log("Explore Countries clicked");
  },
  image: studentsImage, // Add your own image
};

// Paragraph props configuration
const paragraphProps = {
  mainText:
    "Choosing the right study destination is a life-changing decision. Each country offers unique opportunities in terms of quality education, lifestyle, career prospects, and cultural experiences. Whether you dream of studying in the USA, UK, Canada, Australia, Germany, or beyond – every destination has something special to offer. From world-class universities and diverse learning environments to post-study work opportunities, the options are endless.",
  image1: studentsImage,
  image2: graduationImage,
  image1Alt: "Global university campus",
  image2Alt: "Students in front of international landmarks",
  galleryTitle: "Popular Study Destinations",
  gallerySubtitle: "Explore the top choices for international students",
  cardTitle: "Start your journey with the right destination",
  cardDescription:
    "Create your student profile and get matched with the best destination for your academic and career goals.",
  buttonText: "Free Counselling",
  buttonAction: () => {
    console.log("Get Started clicked");
  },
};

// BookNow props configuration
const bookNowProps = {
  title: "Confused about where to study?",
  description:
    "Book a free session with our counsellors to explore destinations, compare universities, and understand visa processes – all in one place.",
  buttonText: "Talk to an Expert",
  buttonAction: () => {
    console.log("Talk to an Expert clicked");
  },
  image: studentsImage,
  imageAlt: "Counsellor guiding students",
};

const detailsProps = {
  // Introduction paragraph explaining key factors in destination selection
  introText1: "Selecting the right destination depends on many factors such as tuition fees, scholarships, lifestyle, job prospects, and visa rules. Each country provides a different advantage. For example, the USA is known for research excellence, Canada for affordability and PR opportunities, Australia for diverse culture, and Germany for free/low-cost education.",
  
  // Reassurance paragraph about guidance services
  introText2: "No matter where you choose, we guide you through the journey of selecting the right country based on your academic background and career goals.",
  
  // Main section heading
  mainHeading: "Top Study Destinations for Bangladeshi Students",
  
  // Brief description of the section's purpose
  mainDescription: "Here are some of the most preferred countries for international students worldwide.",
  
  // Specific country focus heading
  sectionHeading: "United States of America (USA)",
  
  // First paragraph about USA's education system
  sectionText1: "The USA hosts the largest number of international students. Known for Ivy League and world-ranked universities, it offers cutting-edge research facilities and diverse programs.",
  
  // Second paragraph about USA's opportunities and challenges
  sectionText2: "International students in the USA enjoy strong job opportunities and cultural diversity. However, tuition can be higher, so scholarships and assistantships play a key role.",
  
  // Call-to-action button text
  buttonText: "Find Universities in USA",
  
  // Button click handler
  buttonAction: () => {
    console.log("Find Universities in USA clicked");
  },
};
const moreDetailsProps = {
  // Main heading for the section
  mainHeading: "Explore the Best Countries to Study Abroad",
  
  // Global perspective on studying abroad
  globalPerspectiveText: "Studying in a foreign country not only improves your academic profile but also gives you a global mindset highly valued by employers.",
  
  // Top destinations section
  careerHeading: "Top Destinations",
  careerParagraphs: [
    "🇺🇸 USA – World’s best universities, cutting-edge technology, and career opportunities.",
    "🇬🇧 UK – Rich academic history, 2-year post-study work visa, and shorter course durations.",
    "🇨🇦 Canada – Affordable tuition, multicultural society, and strong PR pathways.",
    "🇦🇺 Australia – High quality of life, globally recognized degrees, and work-study balance.",
    "🇩🇪 Germany – Tuition-free or low-cost education, especially in public universities.",
    "🇳🇱 Netherlands – Innovative teaching methods, English-taught programs, and scholarships.",
  ],
  
  // Migration opportunities section
  migrationHeading: "Migration and PR Opportunities",
  migrationParagraphs: [
    "Canada, Australia, and Germany are popular among students seeking Permanent Residency (PR).",
    "Post-study work visas are available in the UK, USA, and other top destinations.",
    "Many countries encourage international students to stay and work after graduation.",
  ],
  
  // Importance of destination choice
  personalHeading: "Why destination choice matters",
  personalParagraphs: [
    "Choosing the right study destination helps balance education quality, affordability, and career opportunities.",
    "It ensures you not only get the best academic experience but also a supportive environment to grow personally and professionally.",
  ],
  
  // Alternative destinations section
  otherHeading: "Other study destinations",
  otherIntroText: "Apart from the top choices, many other countries also attract international students.",
  
  // Detailed subsections for alternative destinations
  subSections: [
    {
      heading: "France",
      paragraphs: [
        "Affordable tuition, great culture, and globally ranked institutions.",
        "Strong programs in fashion, arts, and business.",
      ],
    },
    {
      heading: "New Zealand",
      paragraphs: [
        "Beautiful landscapes, safe environment, and quality education.",
        "Good opportunities for part-time work and migration.",
      ],
    },
    {
      heading: "Japan",
      paragraphs: [
        "High-tech education system, innovation, and cultural immersion.",
        "Growing opportunities for English-taught programs.",
      ],
    },
  ],
  
  // Final call-to-action section
  finalHeading: "Get help choosing your destination",
  finalText: "Still confused about which country is best for you? Our counsellors will help compare options and guide you based on budget, academic background, and career goals. Book a free session today!",
  buttonText: "Free Destination Counselling",
  buttonAction: () => {
    console.log("Free Destination Counselling clicked");
  },
};

// QA props configuration
const qaProps = {
  title: "Frequently Asked Questions about Study Destinations",
  qaData: [
    {
      id: 1,
      question: "Which country is best for Bangladeshi students?",
      answer:
        "Canada, UK, and Australia are among the top choices due to affordability, work opportunities, and migration pathways. The USA is best for research and world-class education, while Germany offers low-cost degrees.",
    },
    {
      id: 2,
      question: "Which destination is most affordable?",
      answer:
        "Germany and France are known for low tuition fees. Canada and New Zealand also provide affordable options compared to the USA and UK.",
    },
    {
      id: 3,
      question: "Where can I get PR easily?",
      answer:
        "Canada and Australia provide clear PR pathways after study. Germany also allows work permits leading to long-term residency.",
    },
    {
      id: 4,
      question: "Which country has the best job opportunities?",
      answer:
        "The USA, UK, Canada, and Australia are top destinations for international students seeking part-time and full-time jobs after graduation.",
    },
    {
      id: 5,
      question: "Do all countries offer scholarships?",
      answer:
        "Yes, most countries provide scholarships through governments, universities, or private organizations. Popular ones include Fulbright (USA), Chevening (UK), DAAD (Germany), and Erasmus (EU).",
    },
    {
      id: 6,
      question: "How do I decide the right destination?",
      answer:
        "Consider tuition fees, living costs, visa rules, career opportunities, cultural environment, and your long-term goals. Talking to our expert counsellors can help you make the right choice.",
    },
  ],
};


  return (
    <div>

            <div>
        <WhyStudyAbroadHeader {...headerProps} />
        <WhyStudyAbroadParagraph {...paragraphProps} />
        <WhyStudyAbroadBookNow {...bookNowProps} />
        <WhyStudyAbroadDetails {...detailsProps} />
        <WhyStudyAbroadMoredetails {...moreDetailsProps} />
        <ContactHome></ContactHome>
        <StudyAbroadQA {...qaProps} />
        
    </div>
    </div>
  )
}

export default StudyDestination