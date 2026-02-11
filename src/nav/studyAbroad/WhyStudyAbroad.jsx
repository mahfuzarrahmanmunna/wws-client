import React from 'react'
import WhyStudyAbroadHeader from '../../component/WhyStudyAbroadHeader'
import WhyStudyAbroadParagraph from '../../component/WhyStudyAbroadParagraph'
import WhyStudyAbroadBookNow from '../../component/WhyStudyAbroadBookNow'
import WhyStudyAbroadDetails from '../../component/WhyStudyAbroadDetails'
import WhyStudyAbroadMoredetails from '../../component/WhyStudyAbroadMoredetails'
import StudyAbroadQA from '../../component/StudyAbroadQA'
import abroad1 from "../../assets/abroadF.jpg"
import studentsImage from "../../assets/students.webp"
import graduationImage from "../../assets/graduation.jpg"
import counsellorImage from "../../assets/graduation.jpg"
import ContactHome from '../../component/ContactHome'

const WhyStudyAbroad = () => {
  // Header props configuration
  const headerProps = {
    breadcrumbItems: ["WWS Bangladesh", "Why Go Abroad?"],
    title: "Why study abroad?",
    description: "Choosing to study abroad means choosing growth, adventure, and opportunity",
    buttonText: "Explore Opportunities",
    buttonAction: () => {
      // Add your button action here
      console.log("Explore Opportunities clicked");
    },
    image: abroad1
  };

  // Paragraph props configuration
  const paragraphProps = {
    mainText: "Thinking about studying in another country? You are not alone! More students than ever are packing their bags to head overseas and experience their study abroad dream. But why? Well, studying abroad not only opens doors to high-paying jobs but also helps expand your horizons. It adds a new dimension to your life. You get to earn a foreign degree, gain skills that textbooks alone can't teach, and secure better pay. And who knows? Maybe, eventually, you will find an opportunity to settle down in a new country. Picture yourself in a new cultural setup, making friends globally and having life-altering experiences.",
    image1: studentsImage,
    image2: graduationImage,
    image1Alt: "Students studying in a library",
    image2Alt: "Students walking on campus",
    galleryTitle: "Why study abroad?",
    gallerySubtitle: "Study abroad student journey",
    cardTitle: "One account for all your study abroad needs",
    cardDescription: "Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.",
    buttonText: "Free Counselling",
    buttonAction: () => {
      // Add your sign up action here
      console.log("Sign up clicked");
    }
  };

  // BookNow props configuration
  const bookNowProps = {
    title: "Free guidance. Smarter decisions.",
    description: "Talk to our expert counsellors about courses, universities, scholarships, and more - at no cost.",
    buttonText: "Book now",
    buttonAction: () => {
      // Add your book now action here
      console.log("Book now clicked");
    },
    image: counsellorImage,
    imageAlt: "Expert counsellor"
  };

  // Details props configuration
  const detailsProps = {
    introText1: "Studying abroad is more than just attending classes in a foreign country; it's a transformative journey that helps you develop life skills and reshape your personality. You become an expert in the English language and mature as an individual—emerging as a confident and independent person working overseas. Numerous studies have shown that studying abroad significantly enhances students' intercultural skills, flexibility, adaptability, self-awareness, curiosity, and confidence.",
    introText2: "The benefits are endless! If you're curious to discover how a study abroad experience can transform your life (and your resume), keep reading.",
    mainHeading: "Key Benefits of Studying Abroad",
    mainDescription: "Studying overseas offers an incredible experience with numerous advantages. It allows you to step out of your comfort zone, explore new opportunities, and grow academically. Let's explore the major benefits of studying abroad.",
    sectionHeading: "Academic Excellence",
    sectionText1: "Studying abroad enables you to earn a foreign degree and receive high-quality education. You gain exposure to diverse teaching methods, advanced resources, and global perspectives while acquiring in-depth knowledge and skills.",
    sectionText2: "You can customize your overseas study experience to align with your career aspirations by choosing a specialized program that matches your academic interests. Whether you're passionate about history, arts, business, or science, you'll find a study abroad program that fits perfectly. According to a study published by Springer in 2022, students who studied abroad were 6.2% more likely to graduate in 4 years and achieved GPAs 0.16 points higher than those who didn't.",
    buttonText: "Find your Perfect Courses",
    buttonAction: () => {
      console.log("Free counselling clicked");
    }
  };

  // MoreDetails props configuration
  const moreDetailsProps = {
    mainHeading: "Discover how to study abroad",
    globalPerspectiveText: "A global perspective will make you a stronger applicant for grad school or future jobs. Your time abroad also shows you value international learning and can adapt to new environments.",
    careerHeading: "Grow your career opportunities",
    careerParagraphs: [
      "In today's job market, standing out matters a lot. One of the benefits of studying abroad is it can make your CV or resume stand out against other candidates. It will become easier for you to catch the eye of future employers with your worldwide skills and experience.",
      "Studying abroad can significantly enhance your English language skills, especially if you communicate in English daily while living in a foreign country. Highlighting this proficiency on your resume can showcase your ability to adapt and thrive in diverse environments. Additionally, emphasising your experience of engaging with different cultures can demonstrate valuable soft skills that many employers appreciate, such as adaptability and cross-cultural communication.",
      "Many study abroad programs also offer internship chances. This allows you to gain actual work experience in your field of study. This can boost your career prospects when you start job hunting after graduation.",
      "If you aim to join a large corporation, enter the field of international relations, or bring a global outlook to your profession, studying in an overseas country can help you make a lasting impression."
    ],
    migrationHeading: "Migration Opportunities",
    migrationParagraphs: [
      "Your time overseas and the abilities you pick up while learning in another country can open doors to many migration prospects. Companies recognise the value of global competencies. They look for candidates with global experience, international connections, and specialised expertise.",
      "Studying abroad equips you with skills to address global skill gaps, making you a valuable asset. Countries with talent shortages often offer work visas or permanent residency to retain international students who contribute to their workforce and economy.",
      "A study by 'The Migration Observatory At The University of Oxford' shows that around 112,000 former international students were given graduate visas and around 56,000 international students received other work visas in 2023 in the UK. This is a significant rise from around 40,000 post-study work visas and 3,000 other work visas issued in 2011."
    ],
    personalHeading: "Personal development",
    personalParagraphs: [
      "Studying abroad is more than academic success—it's a journey of personal growth. Leaving your comfort zone helps you adapt, become self-reliant, and gain independence. Navigating a new city, managing finances, and overcoming language barriers build resilience and resourcefulness. You'll form new friendships, develop problem-solving skills, and learn to view challenges as opportunities.",
      "Immersing yourself in a new culture strengthens confidence and decision-making abilities. Exploring unfamiliar places and connecting with diverse people fosters adaptability and autonomy. By embracing new experiences and taking risks, you become a stronger, more capable individual, prepared for future challenges both in and beyond the classroom."
    ],
    otherHeading: "Other reasons to study abroad",
    otherIntroText: "Apart from offering numerous advantages in academics and career prospects, studying in a foreign country adds depth to your life. You might discover new passions and learn more about yourself as you embrace the unfamiliar and remain open to fresh experiences.",
    subSections: [
      {
        heading: "Discover new places",
        paragraphs: [
          "One of the top reasons to study abroad is to travel and discover new places. Imagine yourself visiting the UK, Australia, Ireland, USA, New Zealand, or Canada and experiencing new cultures and creating lifelong memories.",
          "Studying abroad gives you amazing travel opportunities. You can immerse yourself in the everyday life of your host country. You can check out famous landmarks and uncover hidden gems.",
          "What's more, you'll have weekends and holidays to explore places beyond your host country. Let's say you study in London, UK. You can take trains to Paris or Edinburgh to enjoy their breathtaking views and local delicacies."
        ]
      },
      {
        heading: "Hone your English skills",
        paragraphs: [
          "One of the top benefits of studying abroad is the chance to master a new language. Immersing yourself in the English language works wonders to boost your speaking abilities and to grasp the culture more.",
          "Don't fret if you're not yet fluent in English. We offer official preparation materials, practice tests, pathway programs and expert guidance to help students prepare for the IELTS test. Connect with our experts anytime to get personalised support and improve your skills and confidence for the exam.",
          "Imagine ordering coffee without hesitation, riding public transport, and talking to locals–all in their language. Learning a new language is a present you give to yourself. It leads to deeper cultural insights and aids in personal development."
        ]
      },
      {
        heading: "Experience a new culture",
        paragraphs: [
          "When you study abroad, you get to experience the everyday life, customs, and traditions of the country hosting you. You sample new cuisines, take part in local celebrations, and understand social norms. Each day feels like a new adventure. You start to see and value different perspectives and lifestyles.",
          "Grab the opportunity to connect with locals, pose questions, and join cultural activities. By immersing yourself in the local culture, you create lasting memories and return home with a broader outlook."
        ]
      },
      {
        heading: "Find new interests",
        paragraphs: [
          "Studying abroad allows you to learn more about yourself. You get the opportunity and liberty to explore activities you may not have considered and uncover a passion you never knew existed once you step out of your comfort zone.",
          "Picture yourself learning to ride waves on an Australian beach, learning bodhrán or tin whistle in Ireland, or mastering the sport of skiing in Canada. Exploring new hobbies or rediscovering yourself are other worthy reasons to study abroad."
        ]
      },
      {
        heading: "Make new friends",
        paragraphs: [
          "One of the best things about studying abroad is the chance to make new friends for life. Your classmates will be your travel buddies, study pals, and close friends as you deal with the good and challenging parts of studying abroad together. We can help you find accommodation where you can stay with students from around the world. What a better way to make friends!",
          "These connections help enrich your life while enabling you to build a network for the future. As you all go different ways and grow in your careers, you'll have friends and contacts all around the world. This will bring new ideas and opportunities to work together."
        ]
      },
      {
        heading: "Gain new experience and a global mindset",
        paragraphs: [
          "In today's connected world, global thinking is valuable. Studying abroad exposes you to new perspectives, challenges your beliefs, and helps you see cultures—including your own—differently.",
          "By interacting with people from diverse backgrounds, you break stereotypes and appreciate the world's complexity. This mindset benefits you in many ways, from improving job prospects to understanding global issues and the interconnected world."
        ]
      }
    ],
    finalHeading: "Discover how to study abroad",
    finalText: "When you study in another country, you broaden your worldview and boost your job prospects. It combines personal growth with career benefits. You might aim for better grades, learn about new cultures, or discover more about yourself. Whatever your goal, the benefits of studying abroad are substantial. As you try to discover how studying abroad could significantly impact your life, we are here to guide you in every step, from selecting courses and settling in your new home. Whether you want us to help with your study application, open a student bank account, or book accommodation, our counsellors are here to guide you for free. Register today for free counselling to get expert advice from our experienced counsellors.",
    buttonText: "Avail Free Counselling",
    buttonAction: () => {
      console.log("Free counselling clicked");
    }
  };

  // QA props configuration
  const qaProps = {
    title: "Discover how studying abroad can help you",
    qaData: [
      {
        id: 1,
        question: "Benefits of studying abroad",
        answer: "Studying abroad offers numerous benefits including quality education from world-renowned institutions, personal growth through cultural immersion, enhanced career prospects with global experience, improved language skills, and the opportunity to build an international network. It helps you develop independence, adaptability, and cross-cultural communication skills that are highly valued by employers worldwide."
      },
      {
        id: 2,
        question: "The study abroad experience",
        answer: "The study abroad experience is transformative and enriching. You'll live in a different country, adapt to new cultures, make friends from around the world, and gain a global perspective. It typically costs between $15,000-$50,000 per year depending on the country and institution, but the investment pays off through enhanced career opportunities and personal development."
      },
      {
        id: 3,
        question: "Breaking down the steps",
        answer: "To study abroad, follow these simple steps: 1) Research countries and universities that match your academic goals, 2) Check admission requirements and deadlines, 3) Prepare required documents (transcripts, language test scores, recommendation letters), 4) Apply to your chosen institutions, 5) Apply for student visa, 6) Arrange accommodation and finances, 7) Prepare for departure and orientation."
      },
      {
        id: 4,
        question: "Choosing the right destination",
        answer: "When choosing a study destination, consider factors like academic reputation of universities, cost of living and tuition fees, language requirements, climate and lifestyle, job opportunities after graduation, visa policies, and cultural compatibility. Popular destinations include the USA, UK, Canada, Australia, Germany, and Netherlands, each offering unique advantages for international students."
      },
      {
        id: 5,
        question: "Application process and requirements",
        answer: "The application process typically requires academic transcripts, standardized test scores (IELTS/TOEFL for English proficiency), statement of purpose, recommendation letters, financial documents, and passport copies. Deadlines vary by institution but generally fall between December-March for fall intake. Visa requirements include proof of admission, financial capability, and health insurance."
      },
      {
        id: 6,
        question: "Financial planning and scholarships",
        answer: "Financial planning is crucial for studying abroad. Explore scholarship opportunities from governments, universities, and private organizations. Consider part-time work options (usually 20 hours/week), student loans, and family support. Create a budget covering tuition, accommodation, food, transportation, and miscellaneous expenses. Many countries offer post-graduation work permits to help recover investment."
      }
    ]
  };

  return (
 
//     <>
//       <WhyStudyAbroadHeader></WhyStudyAbroadHeader>
//       <WhyStudyAbroadParagraph></WhyStudyAbroadParagraph>
//       <WhyStudyAbroadBookNow></WhyStudyAbroadBookNow>
//       <WhyStudyAbroadDetails></WhyStudyAbroadDetails>
//       <WhyStudyAbroadMoredetails></WhyStudyAbroadMoredetails>
//       <StudyAbroadQA></StudyAbroadQA>
//     </>

    <div>
        <WhyStudyAbroadHeader {...headerProps} />
        <WhyStudyAbroadParagraph {...paragraphProps} />
        <WhyStudyAbroadBookNow {...bookNowProps} />
        <WhyStudyAbroadDetails {...detailsProps} />
        <WhyStudyAbroadMoredetails {...moreDetailsProps} />
        <ContactHome></ContactHome>
        <StudyAbroadQA {...qaProps} />
        
    </div>

  )
}

export default WhyStudyAbroad