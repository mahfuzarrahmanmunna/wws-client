import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/WhychooseUK.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";
import DestinationTable from "../../component/DestinationTable";
import ContactHome from "../../component/ContactHome";

const StudyInUK = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Destinations", "United Kingdom"],
        title: "Study in the UK – Experience World-Class Education",
        description:
            "The United Kingdom, home to some of the world's most prestigious universities, offers international students an unparalleled educational experience.",
        buttonText: "Start Your British Journey",
        buttonAction: () => console.log("Start UK Journey"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "The UK is home to many of the world’s top universities and offers a relatively time-efficient model for international students (e.g., many master’s programmes are 1 year). Degrees are globally recognisedThe UK's education system is globally renowned for its rigorous academic standards, innovative teaching methods, and world-class research opportunities. Universities like Oxford, Cambridge, Imperial College London, and LSE consistently rank among the world's best, offering programs across all disciplines from traditional subjects like Literature and History to cutting-edge fields like Artificial Intelligence, Biotechnology, and Sustainable Development. The UK's commitment to academic excellence is matched by its vibrant student life, with historic campuses, diverse societies, and opportunities to engage with leading industry professionals.",
        image1: stepImg,
        image2: guideImg,
        image1Alt: "British university campus",
        image2Alt: "Student life in the UK",
        galleryTitle: "Why Choose the UK?",
        gallerySubtitle: "Tradition, innovation, and global recognition",
        cardTitle: "Build Your Future in the World's Education Capital",
        cardDescription:
            "Cities like London, Manchester, Edinburgh, Birmingham, and Bristol offer world-class universities with state-of-the-art facilities, extensive libraries, and strong industry connections. With internationally recognized qualifications, excellent post-study work opportunities, and a multicultural environment, the UK provides an ideal platform for launching your global career.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Counselling clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk with a UK Education Expert",
        description:
            "Need guidance about courses, fees, visas, or life in the UK? Book a free one-on-one consultation with our certified UK education mentors. They'll help you shortlist universities, explain scholarship options, outline accommodation choices, and prepare you for a smooth transition to studying in the UK.",
        buttonText: "Book Your Session",
        buttonAction: () => console.log("Mentor session booked"),
        image: counsellorImg,
        imageAlt: "Mentor assisting student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Studying in the UK means joining a tradition of academic excellence that spans centuries. You'll benefit from world-class teaching, cutting-edge research opportunities, and a curriculum designed to develop critical thinking and practical skills.",
        introText2:
            "The UK's Graduate Route allows international students to stay and work for up to 2 years after completing their studies, providing valuable experience in one of the world's leading economies.",
        mainHeading: "Key Highlights of Studying in the UK",
        mainDescription:
            "The UK remains one of the world's most popular study destinations. Here's why students from across the globe choose it:",
        sectionHeading: "Academic Excellence & Global Recognition",
        sectionText1:
            "Renowned institutions like the University of Oxford, University of Cambridge, Imperial College London, London School of Economics, and University College London consistently rank among the world's top universities.",
        sectionText2:
            "UK qualifications are highly valued by employers worldwide, providing you with a competitive edge in the global job market and flexibility to pursue careers internationally.",
        buttonText: "Explore UK Universities",
        buttonAction: () => console.log("Explore universities"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Discover Student Life & Opportunities",
        globalPerspectiveText:
            "The UK's diverse and inclusive learning environment fosters innovation, creativity, and global thinking, preparing you to succeed in an interconnected world.",
        careerHeading: "Career Growth & Industry Links",
        careerParagraphs: [
            "Many UK universities have strong partnerships with leading global companies, financial institutions, tech giants, and research organizations, offering students excellent internship and graduate employment opportunities.",
            "Graduates can benefit from the Graduate Route, which allows up to 2 years of post-study work experience, giving you a significant advantage in today's competitive job market.",
        ],
        migrationHeading: "Visa & Immigration Support",
        migrationParagraphs: [
            "The UK student visa process is well-established and student-friendly. We'll assist you with document preparation, financial requirements, health insurance, and application submissions for a smooth experience.",
            "The UK's immigration policies support international students, making it easier to transition from academic life to professional opportunities in one of the world's leading economies.",
        ],
        personalHeading: "Lifestyle & Culture",
        personalParagraphs: [
            "Experience the UK's rich cultural heritage — from historic landmarks and world-class museums to vibrant arts scenes, diverse cuisine, and exciting nightlife in cosmopolitan cities.",
            "British people are known for their politeness, sense of humor, and welcoming nature, making it easy for international students to feel at home and build lasting friendships.",
        ],
        otherHeading: "Helpful Tips Before You Go",
        otherIntroText: "Prepare well to make the most of your UK experience:",
        subSections: [
            {
                heading: "Budget Planning",
                paragraphs: [
                    "Living costs vary significantly between cities; London is the most expensive, while cities like Manchester, Birmingham, and Edinburgh offer more affordable options. Plan for accommodation, food, transport, and entertainment.",
                ],
            },
            {
                heading: "Cultural Integration",
                paragraphs: [
                    "Join university societies, sports clubs, cultural groups, or volunteering organizations to meet people, learn about British culture, and make the most of your student experience.",
                ],
            },
        ],
        finalHeading: "Take the Next Step",
        finalText:
            "Whether you dream of studying literature at Oxford, engineering at Imperial College, business at LSE, or medicine at Cambridge, the UK offers an incredible platform for academic and personal growth. Start planning today to secure your spot in upcoming intakes and embark on an unforgettable journey in one of the world's most prestigious education systems.",
        buttonText: "Apply for 2025 Intake",
        buttonAction: () => console.log("Apply clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Study in the UK – FAQs",
        qaData: [
            {
                id: 1,
                question: "What are the most popular courses in the UK?",
                answer:
                    "Top choices include Business & Management, Engineering, Computer Science, Medicine, Law, Economics, Literature, Psychology, and International Relations. Programs in Artificial Intelligence, Data Science, and Sustainable Development are also highly sought after.",
            },
            {
                id: 2,
                question: "How much does it cost to study in the UK?",
                answer:
                    "Tuition fees typically range from £15,000 to £35,000 per year for undergraduate programs and £18,000 to £45,000 for postgraduate programs. Living costs average £12,000–£18,000 annually, with London being significantly more expensive than other cities.",
            },
            {
                id: 3,
                question: "Are there scholarships for international students?",
                answer:
                    "Yes! The UK offers various scholarships including the Chevening Scholarships, Commonwealth Scholarships, university-specific awards, and government-funded programs. Early application increases your chances of receiving financial support.",
            },
            {
                id: 4,
                question: "Can I work while studying in the UK?",
                answer:
                    "International students can work up to 20 hours per week during term time and full-time during scheduled breaks. This provides valuable work experience and helps with living expenses.",
            },
        ],
    };

    // Sample data for UK universities
    const ukUniversities = [
        { id: 1, institution: "University of Oxford", ranking: "1" },
        { id: 2, institution: "University of Cambridge", ranking: "2" },
        { id: 3, institution: "Imperial College London", ranking: "6" },
        { id: 4, institution: "University College London", ranking: "9" },
        { id: 5, institution: "London School of Economics", ranking: "45" },
        { id: 6, institution: "University of Edinburgh", ranking: "22" },
        { id: 7, institution: "King's College London", ranking: "40" },
        { id: 8, institution: "University of Manchester", ranking: "32" },
        { id: 9, institution: "University of Bristol", ranking: "55" },
        { id: 10, institution: "University of Warwick", ranking: "67" }
    ];

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <DestinationTable
                title="Top universities in the UK for studying in the UK"
                subtitle="Here are the top universities for higher education in the UK:"
                tableData={ukUniversities}
            />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default StudyInUK;