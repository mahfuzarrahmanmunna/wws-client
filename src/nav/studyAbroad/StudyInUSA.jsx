import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/WhyChooseUSA.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";
import DestinationTable from "../../component/DestinationTable";
import ContactHome from "../../component/ContactHome";

const StudyInUSA = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Destinations", "United States"],
        title: "Study in USA – World-Leading Universities",
        description:
            "The United States, home to the world's most prestigious universities and cutting-edge research institutions, offers international students unparalleled opportunities for academic excellence and career advancement.",
        buttonText: "Start Your American Dream",
        buttonAction: () => console.log("Start USA Journey"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "The USA's higher education system is globally recognized for its academic rigor, research excellence, and innovative approach to learning. Universities like Harvard, MIT, Stanford, and Yale consistently rank among the world's best, offering programs across all disciplines from traditional fields like Liberal Arts and Business to cutting-edge areas like Artificial Intelligence, Biotechnology, and Space Technology. The USA's commitment to academic freedom and innovation is matched by its vibrant campus life, with state-of-the-art facilities, diverse student organizations, and opportunities to collaborate with leading industry professionals. Beyond academics, students can explore America's diverse landscapes, from bustling cities to national parks, while experiencing the country's rich cultural diversity and entrepreneurial spirit that drives global innovation.",
        image1: stepImg,
        image2: guideImg,
        image1Alt: "American university campus",
        image2Alt: "Student life in the USA",
        galleryTitle: "Why Choose the USA?",
        gallerySubtitle: "Innovation, diversity, and global opportunities",
        cardTitle: "Build Your Future in the World's Innovation Hub",
        cardDescription:
            "Cities like New York, Los Angeles, Boston, San Francisco, and Chicago offer world-class universities with cutting-edge facilities, extensive research opportunities, and strong industry connections. With internationally recognized degrees, excellent career prospects, and Optional Practical Training (OPT) opportunities, the USA provides an ideal launchpad for your global career.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Counselling clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk with a USA Education Expert",
        description:
            "Need guidance about courses, fees, visas, or life in the USA? Book a free one-on-one consultation with our certified USA education mentors. They'll help you shortlist universities, explain scholarship options, outline accommodation choices, and prepare you for a smooth transition to studying in the USA.",
        buttonText: "Book Your Session",
        buttonAction: () => console.log("Mentor session booked"),
        image: counsellorImg,
        imageAlt: "Mentor assisting student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Studying in the USA means joining a tradition of academic excellence and innovation that has shaped the modern world. You'll benefit from world-class teaching, cutting-edge research opportunities, and a curriculum designed to develop critical thinking, creativity, and practical skills.",
        introText2:
            "The USA's Optional Practical Training (OPT) program allows international students to work for up to 3 years after completing their studies, providing valuable experience in the world's largest economy.",
        mainHeading: "Key Highlights of Studying in the USA",
        mainDescription:
            "The USA remains the world's most popular study destination. Here's why students from across the globe choose it:",
        sectionHeading: "Academic Excellence & Global Recognition",
        sectionText1:
            "Renowned institutions like Harvard University, Massachusetts Institute of Technology, Stanford University, Yale University, and Princeton University consistently rank among the world's top universities.",
        sectionText2:
            "US degrees are highly valued by employers worldwide, providing you with a competitive edge in the global job market and flexibility to pursue careers internationally.",
        buttonText: "Explore US Universities",
        buttonAction: () => console.log("Explore universities"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Discover Student Life & Opportunities",
        globalPerspectiveText:
            "The USA's diverse and inclusive learning environment fosters innovation, entrepreneurship, and global thinking, preparing you to succeed in an interconnected world.",
        careerHeading: "Career Growth & Industry Links",
        careerParagraphs: [
            "Many US universities have strong partnerships with leading global companies, tech giants, financial institutions, and research organizations, offering students excellent internship and graduate employment opportunities.",
            "Graduates can benefit from Optional Practical Training (OPT), which allows up to 3 years of post-study work experience, giving you a significant advantage in today's competitive job market.",
        ],
        migrationHeading: "Visa & Immigration Support",
        migrationParagraphs: [
            "The US student visa process is well-established and student-friendly. We'll assist you with document preparation, financial requirements, health insurance, and application submissions for a smooth experience.",
            "The USA's immigration policies support international students, making it easier to transition from academic life to professional opportunities in the world's largest economy.",
        ],
        personalHeading: "Lifestyle & Culture",
        personalParagraphs: [
            "Experience America's diverse culture — from world-class museums and entertainment venues to diverse cuisine, vibrant arts scenes, and exciting outdoor activities across different regions.",
            "Americans are known for their friendliness, openness, and entrepreneurial spirit, making it easy for international students to feel welcome and build lasting friendships.",
        ],
        otherHeading: "Helpful Tips Before You Go",
        otherIntroText: "Prepare well to make the most of your US experience:",
        subSections: [
            {
                heading: "Financial Planning",
                paragraphs: [
                    "Living costs vary significantly between states and cities; New York and California are the most expensive, while states like Texas and Florida offer more affordable options. Plan for accommodation, food, transport, and entertainment.",
                ],
            },
            {
                heading: "Cultural Adaptation",
                paragraphs: [
                    "Join university clubs, sports teams, cultural organizations, or professional societies to meet people, learn about American culture, and make the most of your student experience.",
                ],
            },
        ],
        finalHeading: "Take the Next Step",
        finalText:
            "Whether you dream of studying computer science at MIT, business at Harvard, engineering at Stanford, or medicine at Johns Hopkins, the USA offers an incredible platform for academic and personal growth. Start planning today to secure your spot in upcoming intakes and embark on an unforgettable journey in the land of opportunity.",
        buttonText: "Apply for 2025 Intake",
        buttonAction: () => console.log("Apply clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Study in the USA – FAQs",
        qaData: [
            {
                id: 1,
                question: "What are the most popular courses in the USA?",
                answer:
                    "Top choices include Computer Science, Business Administration, Engineering, Medicine, Data Science, Psychology, Economics, and International Relations. Programs in Artificial Intelligence, Cybersecurity, and Environmental Science are also highly sought after.",
            },
            {
                id: 2,
                question: "How much does it cost to study in the USA?",
                answer:
                    "Tuition fees typically range from $20,000 to $60,000 per year for undergraduate programs and $25,000 to $70,000 for postgraduate programs. Living costs average $15,000–$25,000 annually, with major cities being significantly more expensive than smaller towns.",
            },
            {
                id: 3,
                question: "Are there scholarships for international students?",
                answer:
                    "Yes! The USA offers various scholarships including Fulbright Scholarships, university-specific awards, merit-based scholarships, and need-based financial aid. Early application and strong academic performance increase your chances of receiving financial support.",
            },
            {
                id: 4,
                question: "Can I work while studying in the USA?",
                answer:
                    "International students can work up to 20 hours per week on-campus during term time and full-time during scheduled breaks. Off-campus work requires authorization and is limited to specific circumstances.",
            },
        ],
    };

    // Sample data for USA universities
    const usaUniversities = [
        { id: 1, institution: "Harvard University", ranking: "4" },
        { id: 2, institution: "Massachusetts Institute of Technology", ranking: "1" },
        { id: 3, institution: "Stanford University", ranking: "3" },
        { id: 4, institution: "Yale University", ranking: "16" },
        { id: 5, institution: "Princeton University", ranking: "17" },
        { id: 6, institution: "University of Pennsylvania", ranking: "15" },
        { id: 7, institution: "California Institute of Technology", ranking: "7" },
        { id: 8, institution: "Columbia University", ranking: "23" },
        { id: 9, institution: "University of Chicago", ranking: "11" },
        { id: 10, institution: "Johns Hopkins University", ranking: "28" }
    ];

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <DestinationTable
                title="Top universities in the USA for studying in the USA"
                subtitle="Here are the top universities for higher education in the USA:"
                tableData={usaUniversities}
            />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default StudyInUSA;