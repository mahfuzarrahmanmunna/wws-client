import React from 'react'
import WhyStudyAbroadHeader from '../../component/WhyStudyAbroadHeader'
import WhyStudyAbroadParagraph from '../../component/WhyStudyAbroadParagraph'
import WhyStudyAbroadBookNow from '../../component/WhyStudyAbroadBookNow'
import WhyStudyAbroadDetails from '../../component/WhyStudyAbroadDetails'
import WhyStudyAbroadMoredetails from '../../component/WhyStudyAbroadMoredetails'
import StudyAbroadQA from '../../component/StudyAbroadQA'
import abroad1 from "../../assets/abroad.jpg"
import studentsImage from "../../assets/applicationGuides.jpg"
import graduationImage from "../../assets/graduation.jpg"
import counsellorImage from "../../assets/graduation.jpg"
import ContactHome from '../../component/ContactHome'

const ApplicationGuide = () => {

    // ===== Application Guide Routes Props Configuration =====

// Header
const headerProps = {
  breadcrumbItems: ["WWS Bangladesh", "Application Guide"],
  title: "Application Guide for Studying Abroad",
  description: "Step-by-step guidance to make your study abroad application process smooth and stress-free.",
  buttonText: "Start Your Application",
  buttonAction: () => {
    console.log("Start Application clicked");
  },
  image: studentsImage
};

// Paragraph
const paragraphProps = {
  mainText: "Applying to study abroad can feel overwhelming at first, but with the right guidance, the process becomes structured and achievable. From researching universities and preparing documents to applying for your visa and arranging accommodation, every step matters. Our application guide ensures you stay on track and avoid common pitfalls. With expert support, you can confidently complete your journey and secure admission into your dream university abroad.",
  image1: studentsImage,
  image2: graduationImage,
  image1Alt: "Student researching study abroad options",
  image2Alt: "Students submitting applications",
  galleryTitle: "Study Abroad Application Process",
  gallerySubtitle: "Step-by-step journey from planning to admission",
  cardTitle: "One-stop application solution",
  cardDescription: "Get personalized guidance, document checklists, and expert counselling to make your overseas education dream a reality.",
  buttonText: "Book Free Counselling",
  buttonAction: () => {
    console.log("Guidance clicked");
  }
};

// BookNow
const bookNowProps = {
  title: "Talk to an Application Expert",
  description: "Get free support from our counsellors who will guide you through every stage of the application – from shortlisting universities to submitting documents and preparing for your visa interview.",
  buttonText: "Book Free Session",
  buttonAction: () => {
    console.log("Book Free Session clicked");
  },
  image: studentsImage,
  imageAlt: "Application counsellor"
};

// Details
const detailsProps = {
  introText1: "Applying to study abroad is more than filling forms. It's about making informed choices, presenting yourself as a strong candidate, and ensuring every document is in place. A well-prepared application not only boosts your admission chances but also increases the likelihood of scholarships and funding opportunities.",
  introText2: "Here’s a detailed breakdown of the application process to help you stay organized and stress-free.",
  mainHeading: "Step-by-Step Application Process",
  mainDescription: "Each step in the study abroad application journey plays a vital role. Missing a deadline or forgetting a document can delay your admission. Follow our guide to ensure a smooth journey.",
  sectionHeading: "Step 1: Research & Shortlist",
  sectionText1: "Begin with researching universities and courses that align with your academic goals, career aspirations, and financial situation. Consider factors like rankings, tuition fees, living costs, part-time work options, and post-study opportunities.",
  sectionText2: "Use reliable sources, attend virtual events, or speak with counsellors to build your shortlist of universities and programs.",
  buttonText: "Find Your University",
  buttonAction: () => {
    console.log("Find University clicked");
  }
};

// More Details
const moreDetailsProps = {
  mainHeading: "Detailed Application Stages",
  globalPerspectiveText: "Applying abroad helps you learn planning, organization, and resilience. Each step adds to your global outlook, shaping you for future challenges.",
  
  careerHeading: "Step 2: Prepare Your Documents",
  careerParagraphs: [
    "Most universities require academic transcripts, certificates, recommendation letters, and language proficiency scores (IELTS/TOEFL). Some programs also ask for GRE/GMAT scores.",
    "A well-written Statement of Purpose (SOP) and a compelling CV or resume highlight your motivation, achievements, and career goals.",
    "Ensure your documents are error-free and formatted as per university requirements. This step forms the foundation of your application."
  ],

  migrationHeading: "Step 3: Submit Applications",
  migrationParagraphs: [
    "Once your documents are ready, complete online applications for your shortlisted universities. Pay attention to deadlines as missing them could mean waiting for another year.",
    "Application portals usually ask for details about your academics, extracurriculars, and personal background. Double-check all information before submission.",
    "Pay application fees (if applicable) and keep copies of confirmation emails and receipts."
  ],

  personalHeading: "Step 4: Wait for Admission Decision",
  personalParagraphs: [
    "Universities typically take 4–12 weeks to process applications. Meanwhile, continue preparing for interviews or entrance tests if required.",
    "Stay positive and use this time to explore scholarship options, financial aid, or part-time job regulations in your target country."
  ],

  otherHeading: "Step 5: Apply for Student Visa",
  otherIntroText: "Once you receive an admission letter, the next big step is applying for your student visa.",
  subSections: [
    {
      heading: "Visa Documents Required",
      paragraphs: [
        "Valid passport with sufficient validity.",
        "University admission letter or Confirmation of Enrollment (CoE).",
        "Proof of financial capacity (bank statements, loan letters, or sponsorship).",
        "Health insurance and medical test certificates (depending on the country).",
        "Visa application form and proof of visa fee payment."
      ]
    },
    {
      heading: "Visa Interview Preparation",
      paragraphs: [
        "Some countries require an interview. Be prepared to answer questions about your study plans, finances, and future career goals.",
        "Practice with counsellors to boost your confidence and avoid common mistakes."
      ]
    }
  ],

  finalHeading: "Step 6: Pre-departure Preparation",
  finalText: "After visa approval, arrange accommodation, book your flights, and attend pre-departure orientation sessions. Familiarize yourself with the culture, banking system, and health facilities of your host country. This final step ensures a smooth transition and a confident start to your academic journey abroad.",
  buttonText: "Book Pre-departure Session",
  buttonAction: () => {
    console.log("Pre-departure clicked");
  }
};

// QA Section
const qaProps = {
  title: "Frequently Asked Questions about Applications",
  qaData: [
    {
      id: 1,
      question: "When should I start my application?",
      answer: "It’s recommended to start at least 12–18 months before your intended intake. This allows sufficient time for research, tests, applications, visa, and financial planning."
    },
    {
      id: 2,
      question: "Do all universities require IELTS/TOEFL?",
      answer: "Most English-speaking countries require proof of English proficiency. However, some universities may waive this requirement if you studied in an English-medium institution or provide alternative pathways."
    },
    {
      id: 3,
      question: "How many universities should I apply to?",
      answer: "On average, students apply to 5–8 universities. This increases your chances of admission while ensuring you have backup options if your top choice doesn’t work out."
    },
    {
      id: 4,
      question: "How much does the application process cost?",
      answer: "Application fees vary from $50–$150 per university. Additional costs may include English tests ($200–$250), courier services, and visa fees ($200–$500 depending on country)."
    },
    {
      id: 5,
      question: "Can I apply for scholarships at the same time?",
      answer: "Yes, many universities allow you to apply for scholarships along with your admission application. External scholarships may have separate deadlines, so plan accordingly."
    },
    {
      id: 6,
      question: "What if my visa is rejected?",
      answer: "Visa rejection is rare if you provide correct documents and genuine reasons for study. In case of rejection, you can reapply after addressing the issues stated by the embassy."
    }
  ]
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

export default ApplicationGuide