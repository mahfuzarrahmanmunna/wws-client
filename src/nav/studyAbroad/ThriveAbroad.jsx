import React from 'react'
import WhyStudyAbroadHeader from '../../component/WhyStudyAbroadHeader'
import WhyStudyAbroadParagraph from '../../component/WhyStudyAbroadParagraph'
import WhyStudyAbroadBookNow from '../../component/WhyStudyAbroadBookNow'
import WhyStudyAbroadDetails from '../../component/WhyStudyAbroadDetails'
import WhyStudyAbroadMoredetails from '../../component/WhyStudyAbroadMoredetails'
import StudyAbroadQA from '../../component/StudyAbroadQA'
import studentsImage from "../../assets/ThriveAbroad.jpg"
import graduationImage from "../../assets/graduation.jpg"
import counsellorImage from "../../assets/graduation.jpg"
import ContactHome from '../../component/ContactHome'

const ThriveAbroad = () => {

    // ===== Thrive Abroad Routes Props Configuration =====

// Header
const headerProps = {
  breadcrumbItems: ["WWS Bangladesh", "Thrive Abroad"],
  title: "Thrive Abroad as an International Student",
  description: "Learn how to adapt, excel, and make the most of your study abroad journey — academically, socially, and personally.",
  buttonText: "Start Thriving",
  buttonAction: () => {
    console.log("Thrive clicked");
  },
  image: studentsImage
};

// Paragraph
const paragraphProps = {
  mainText: "Your journey doesn’t end once you receive your admission letter and student visa. In fact, it’s just the beginning! Thriving abroad requires more than good grades — it’s about embracing a new culture, building global networks, developing life skills, and staying resilient in the face of challenges. From managing finances and accommodation to maintaining mental health and creating a balanced lifestyle, our Thrive Abroad guide is designed to help you flourish in every aspect of your overseas journey.",
  image1: studentsImage,
  image2: graduationImage,
  image1Alt: "International students enjoying campus life",
  image2Alt: "Students networking abroad",
  galleryTitle: "Student Life Abroad",
  gallerySubtitle: "Adaptation, growth, and success in a foreign land",
  cardTitle: "Your guide to thriving overseas",
  cardDescription: "Get tips on academics, lifestyle, finance, networking, and personal development to help you maximize your international experience.",
  buttonText: "Join Free Counselling",
  buttonAction: () => {
    console.log("Learn More clicked");
  }
};

// BookNow
const bookNowProps = {
  title: "Need Help Adjusting Abroad?",
  description: "Talk to our experts and alumni who have successfully navigated life overseas. Get practical tips on cultural adjustment, career opportunities, part-time jobs, and much more.",
  buttonText: "Book a Free Session",
  buttonAction: () => {
    console.log("Book Thrive Session clicked");
  },
  image: graduationImage,
  imageAlt: "Counsellor supporting international student"
};

// Details
const detailsProps = {
  introText1: "Studying abroad isn’t just about academics — it’s about learning how to live independently, manage challenges, and grow as a person. Many students face difficulties such as homesickness, culture shock, or financial struggles. But with the right mindset and guidance, you can turn these challenges into stepping stones for success.",
  introText2: "Here’s how you can thrive abroad and make the most of your international experience.",
  mainHeading: "Pre-departure orientation",
  mainDescription: "Before you board the plane, join our live orientation session. You’ll receive essential advice on visas, packing smartly, travel insurance, budgeting, and what to expect in your destination country. Be prepared. Travel with peace of mind.",
  sectionHeading: "Arrival & settling in",
  sectionText1: "Touching down is just the start. We’ll support you with airport pickup, first-week check-ins, opening bank accounts, securing mobile plans, and finding local resources. We want you to feel at home from day one.",
  sectionText2: "Make use of libraries, online resources, and academic workshops offered by your institution. Balancing studies with part-time work requires discipline, but effective time management will help you achieve both academic excellence and financial stability.",
  buttonText: "Explore Student Support",
  buttonAction: () => {
    console.log("Student Support clicked");
  }
};

// More Details
const moreDetailsProps = {
  mainHeading: "Academic engagement & support",
  globalPerspectiveText: "Once classes begin, staying on top of your academics while adapting to a new system is key. From orientation to study groups, we’ll connect you with mentors, help you understand academic expectations and build habits for success.",
  
  careerHeading: "Cultural integration & networks",
  careerParagraphs: [
    "Beyond coursework, your overseas experience is enriched by friendships, clubs, local culture and global networks. We’ll guide you to join student societies, participate in community events and build meaningful relationships",
    "Join clubs, societies, and student organizations to meet people with similar interests. Attend workshops, career fairs, and alumni events to connect with professionals in your field.",
    "Remember: the friendships and connections you build today could open doors to opportunities worldwide in the future."
  ],

  migrationHeading: "Career readiness & future planning",
  migrationParagraphs: [
    "As your studies progress, it’s never too early to think about life beyond the classroom. We’ll provide support with CVs, internship opportunities, job fairs and alumni networks so that you’re ready to step into the professional world in a global style.",
    "Most international students are allowed to work part-time (usually 20 hours per week). This not only helps financially but also gives you valuable work experience.",
    "Balancing studies, part-time jobs, and personal life requires strong time management skills. Avoid burnout by prioritizing rest, healthy eating, and exercise."
  ],

  personalHeading: "Cultural Adaptation & Mental Health",
  personalParagraphs: [
    "Culture shock is common, but it’s also an opportunity to grow. Stay open-minded, respect cultural differences, and engage with local communities to feel more at home.",
    "Homesickness may hit you at times. Stay connected with family and friends online, but also make efforts to build a support system in your new country.",
    "Take care of your mental health. Many universities provide free counselling services, student helplines, and wellness programs. Don’t hesitate to seek help if needed."
  ],

  otherHeading: "Tips for Personal Growth Abroad",
  otherIntroText: "Beyond academics and work, thriving abroad also means personal growth and lifelong learning.",
  subSections: [
    {
      heading: "Learn Local Customs",
      paragraphs: [
        "Take part in local festivals, traditions, and events. It helps you integrate better and makes your experience richer.",
        "Try new cuisines, explore the city, and embrace the culture."
      ]
    },
    {
      heading: "Develop New Skills",
      paragraphs: [
        "Studying abroad is the perfect time to learn new skills — from learning a new language to developing leadership or communication skills.",
        "Enroll in workshops or take online courses alongside your studies."
      ]
    },
    {
      heading: "Stay Healthy",
      paragraphs: [
        "Your health is key to thriving abroad. Maintain a balanced diet, exercise regularly, and make use of your student health insurance for check-ups.",
        "Sleep well and avoid stress by keeping a routine."
      ]
    },
    {
      heading: "Travel & Explore",
      paragraphs: [
        "Use weekends and holidays to explore your host country or nearby destinations. Traveling not only refreshes your mind but also deepens your cultural understanding.",
        "Document your experiences — write journals, make vlogs, or share blogs. These memories will last a lifetime."
      ]
    }
  ],

  finalHeading: "Why follow this journey with us?",
  finalText: "With World Wise Scholars, you don’t just apply abroad; you thrive abroad. From your very first idea until you walk across that graduation stage, we’re always by your side!",
  buttonText: "Join Our Thrive Abroad Community",
  buttonAction: () => {
    console.log("Join Thrive Community clicked");
  }
};

// QA Section
const qaProps = {
  title: "FAQs on Thriving Abroad",
  qaData: [
    {
      id: 1,
      question: "How do I deal with homesickness?",
      answer: "Homesickness is normal. Stay in touch with family online, but also build local connections through student groups and clubs. Keeping yourself engaged reduces loneliness."
    },
    {
      id: 2,
      question: "Can I work part-time while studying?",
      answer: "Yes, most countries allow international students to work part-time (usually 20 hours/week). Check your visa regulations and prioritize your studies while working."
    },
    {
      id: 3,
      question: "How can I improve my English faster?",
      answer: "Immerse yourself! Speak with classmates, join language exchange groups, and practice daily. Avoid sticking only to students from your home country."
    },
    {
      id: 4,
      question: "What should I do if I struggle academically?",
      answer: "Use university resources like tutoring, writing centers, and workshops. Don’t hesitate to approach professors for extra help. Study groups can also improve your learning."
    },
    {
      id: 5,
      question: "How do I manage finances abroad?",
      answer: "Prepare a monthly budget, track your expenses, and use student discounts. If allowed, work part-time to support your living costs. Avoid unnecessary debt."
    },
    {
      id: 6,
      question: "Is it possible to settle abroad after graduation?",
      answer: "Yes, many countries offer post-study work visas. Excelling in academics, networking, and gaining work experience can improve your chances of staying longer."
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

export default ThriveAbroad