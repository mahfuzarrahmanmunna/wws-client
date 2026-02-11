import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/WhyChooseNewZealand.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";
import DestinationTable from "../../component/DestinationTable";
import ContactHome from "../../component/ContactHome";

const StudyInNewZeland = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Destinations", "New Zealand"],
        title: "Study in New Zealand – Discover Excellence",
        description:
            "New Zealand, known for its breathtaking landscapes and world-class education system, offers international students an unparalleled study experience. With globally recognized universities.",
        buttonText: "Start Your Kiwi Journey",
        buttonAction: () => console.log("Start New Zealand Journey"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "New Zealand offers a high-quality education system, globally recognised qualifications, and a safe, welcoming environment for international studentsNew Zealand's education system is consistently ranked among the world's best, with universities offering cutting-edge programs in fields like Agriculture, Environmental Science, Engineering, Business, Medicine, and Creative Arts. The country's innovative approach to education emphasizes practical learning, research, and industry collaboration. New Zealand is home to world-leading research institutions and offers excellent post-study work opportunities.",
        image1: stepImg,
        image2: guideImg,
        image1Alt: "New Zealand landscape",
        image2Alt: "Campus life in New Zealand",
        galleryTitle: "Why Choose New Zealand?",
        gallerySubtitle: "Innovation, adventure, and world-class education",
        cardTitle: "Build Your Future in the Land of Opportunity",
        cardDescription:
            "Cities like Auckland, Wellington, Christchurch, and Dunedin offer vibrant student communities with excellent facilities, modern campuses, and strong industry connections. With competitive tuition fees, generous scholarships, and straightforward visa processes, New Zealand provides an accessible pathway to world-class education and exciting career prospects in the Asia-Pacific region.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Counselling clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk with a New Zealand Education Expert",
        description:
            "Need guidance about courses, fees, visas, or life in New Zealand? Book a free one-on-one consultation with our certified New Zealand education mentors. They'll help you shortlist universities, explain scholarship options, outline accommodation choices, and prepare you for a smooth transition to studying in New Zealand.",
        buttonText: "Book Your Session",
        buttonAction: () => console.log("Mentor session booked"),
        image: counsellorImg,
        imageAlt: "Mentor assisting student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Studying in New Zealand means joining a progressive education system that values creativity, critical thinking, and practical skills. You'll benefit from small class sizes, personalized attention, and a curriculum designed to meet global industry standards.",
        introText2:
            "New Zealand's Post-Study Work Visa allows graduates to gain valuable work experience in their field of study, opening doors to opportunities in sectors such as technology, agriculture, tourism, healthcare, engineering, and renewable energy.",
        mainHeading: "Key Highlights of Studying in New Zealand",
        mainDescription:
            "New Zealand has become one of the most sought-after study destinations. Here's why students from around the world choose it:",
        sectionHeading: "Academic Excellence & Innovation",
        sectionText1:
            "Renowned institutions like the University of Auckland, University of Otago, Victoria University of Wellington, and University of Canterbury deliver world-class education and cutting-edge research across diverse disciplines.",
        sectionText2:
            "New Zealand qualifications are internationally recognized, providing you with flexibility to pursue advanced studies or professional careers globally.",
        buttonText: "Explore New Zealand Universities",
        buttonAction: () => console.log("Explore universities"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Discover Student Life & Opportunities",
        globalPerspectiveText:
            "New Zealand's inclusive and diverse learning environment encourages innovation, collaboration, and global thinking, preparing you to succeed in an interconnected world.",
        careerHeading: "Career Growth & Industry Links",
        careerParagraphs: [
            "Many New Zealand universities have strong partnerships with leading companies and research organizations, offering students excellent internship opportunities and graduate employment prospects.",
            "Graduates can apply for the Post-Study Work Visa, which allows up to 3 years of work experience, giving you a significant advantage in today's competitive job market.",
        ],
        migrationHeading: "Visa & Immigration Support",
        migrationParagraphs: [
            "The New Zealand student visa process is straightforward and student-friendly. We'll assist you with document preparation, financial requirements, health insurance, and application submissions for a hassle-free experience.",
            "New Zealand's immigration policies are designed to attract skilled graduates, making it easier to transition from student life to professional opportunities.",
        ],
        personalHeading: "Lifestyle & Culture",
        personalParagraphs: [
            "Experience New Zealand's unique culture — from Maori traditions and world-class cuisine to outdoor adventures and vibrant arts scenes in cosmopolitan cities.",
            "Kiwis are known for their friendliness, openness, and welcoming nature, making it easy for international students to feel at home and build lasting friendships.",
        ],
        otherHeading: "Helpful Tips Before You Go",
        otherIntroText: "Prepare well to make the most of your New Zealand adventure:",
        subSections: [
            {
                heading: "Plan Your Budget",
                paragraphs: [
                    "Living costs vary between cities; Auckland and Wellington may be more expensive, while Christchurch and Dunedin offer more affordable options. Budget for accommodation, food, transport, and recreational activities.",
                ],
            },
            {
                heading: "Embrace the Outdoors",
                paragraphs: [
                    "Take advantage of New Zealand's incredible natural beauty by joining outdoor clubs, hiking groups, or adventure sports societies to make friends and explore the country.",
                ],
            },
        ],
        finalHeading: "Take the Next Step",
        finalText:
            "Whether you dream of studying marine biology in Auckland, agricultural science in Lincoln, or film production in Wellington, New Zealand offers an incredible platform for academic and personal growth. Start planning today to secure your spot in upcoming intakes and embark on an unforgettable journey in Aotearoa.",
        buttonText: "Apply for 2025 Intake",
        buttonAction: () => console.log("Apply clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Study in New Zealand – FAQs",
        qaData: [
            {
                id: 1,
                question: "What are the most popular courses in New Zealand?",
                answer:
                    "Top choices include Agriculture, Environmental Science, Engineering, Business & Management, Medicine, Tourism & Hospitality, Computer Science, Creative Arts, and Marine Biology. Programs in renewable energy and sustainable development are also highly sought after.",
            },
            {
                id: 2,
                question: "How much does it cost to study in New Zealand?",
                answer:
                    "Tuition fees typically range from NZ$22,000 to NZ$35,000 per year for undergraduate programs and NZ$26,000 to NZ$40,000 for postgraduate programs. Living costs average NZ$15,000–NZ$20,000 annually, covering accommodation, food, transport, and entertainment.",
            },
            {
                id: 3,
                question: "Are there scholarships for international students?",
                answer:
                    "Yes! New Zealand offers various scholarships including the New Zealand Excellence Awards, university-specific scholarships, and government-funded programs. Early application increases your chances of receiving financial support.",
            },
            {
                id: 4,
                question: "Can I work while studying in New Zealand?",
                answer:
                    "International students can work up to 20 hours per week during term time and full-time during scheduled breaks. This provides valuable work experience and helps with living expenses.",
            },
        ],
    };

    // Sample data for New Zealand universities
    const newZealandUniversities = [
        { id: 1, institution: "University of Auckland", ranking: "68" },
        { id: 2, institution: "University of Otago", ranking: "206" },
        { id: 3, institution: "Victoria University of Wellington", ranking: "223" },
        { id: 4, institution: "University of Canterbury", ranking: "256" },
        { id: 5, institution: "Massey University", ranking: "292" },
        { id: 6, institution: "University of Waikato", ranking: "331" },
        { id: 7, institution: "Lincoln University", ranking: "368" },
        { id: 8, institution: "Auckland University of Technology", ranking: "437" },
        { id: 9, institution: "Unitec Institute of Technology", ranking: "1001" },
        { id: 10, institution: "Eastern Institute of Technology", ranking: "1001" }
    ];

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <DestinationTable
                title="Top universities in New Zealand for studying in New Zealand"
                subtitle="Here are the top universities for higher education in New Zealand:"
                tableData={newZealandUniversities}
            />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default StudyInNewZeland;