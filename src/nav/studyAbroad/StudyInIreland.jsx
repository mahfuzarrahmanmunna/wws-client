import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/WhyChooseIreland.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";
import DestinationTable from "../../component/DestinationTable";
import ContactHome from "../../component/ContactHome";

const StudyInIreland = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Destinations", "Ireland"],
        title: "Study in Ireland – Unlock Endless Learning",
        description:
            "Ireland, the land of scholars and saints, has evolved into one of Europe’s most vibrant destinations for higher education. With globally respected universities, a thriving tech and research ecosystem, and a warm.",
        buttonText: "Start Your Irish Adventure",
        buttonAction: () => console.log("Start Ireland Journey"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "Ireland is an English-speaking destination with strong ties to global tech & pharma industries, making it attractive for international students. It offers generous post-study work opportunities and is becoming more popular for students from Asia.",
        image1: stepImg,
        image2: guideImg,
        image1Alt: "Irish countryside",
        image2Alt: "Campus life in Ireland",
        galleryTitle: "Why Choose Ireland?",
        gallerySubtitle: "Innovation, heritage, and global careers in one place",
        cardTitle: "Build Your Future in Europe’s Knowledge Hub",
        cardDescription:
            "Cities like Dublin, Cork, Galway, and Limerick are hubs of creativity, entrepreneurship, and academic brilliance. With affordable tuition compared to other Western nations, generous scholarships, and straightforward post-study work options, Ireland is a strategic choice for students seeking an internationally recognised qualification and a clear route into Europe’s job market.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Counselling clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk with an Irish Education Expert",
        description:
            "Need guidance about courses, fees, visas, or life in Ireland? Book a free one-on-one consultation with our certified Irish education mentors. They’ll help you shortlist universities, explain scholarship options, outline accommodation choices, and prepare you for a smooth transition to studying in Ireland.",
        buttonText: "Book Your Session",
        buttonAction: () => console.log("Mentor session booked"),
        image: counsellorImg,
        imageAlt: "Mentor assisting student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Studying in Ireland is not only about earning a degree — it’s about joining an international network of innovators, thinkers, and changemakers. You’ll benefit from smaller class sizes, interactive teaching, and a curriculum closely connected to real-world challenges.",
        introText2:
            "Ireland’s Graduate Route allows students to gain professional experience after completing their studies, opening doors in sectors such as IT, pharmaceuticals, finance, healthcare, data science, and renewable energy.",
        mainHeading: "Key Highlights of Studying in Ireland",
        mainDescription:
            "Ireland has become one of Europe’s fastest-growing study destinations. Here’s why thousands of students from across the globe choose it every year:",
        sectionHeading: "Academic & Research Excellence",
        sectionText1:
            "Renowned institutions like Trinity College Dublin, University College Dublin, National University of Ireland Galway, and University College Cork deliver outstanding teaching and world-class research across disciplines.",
        sectionText2:
            "Irish qualifications enjoy international recognition, offering you flexibility to pursue advanced studies or professional careers worldwide.",
        buttonText: "Explore Irish Universities",
        buttonAction: () => console.log("Explore universities"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Discover Student Life & Opportunities",
        globalPerspectiveText:
            "Irish classrooms encourage debate, creativity, and collaboration, giving you a global perspective and preparing you to lead in an ever-changing world.",
        careerHeading: "Career Growth & Industry Links",
        careerParagraphs: [
            "Many Irish universities have strong ties with multinational companies such as Google, Apple, Facebook, Pfizer, and Intel, offering students a clear pathway to internships and graduate employment.",
            "Graduates can apply for the Third Level Graduate Programme, which allows up to 2 years of post-study work experience, giving you a significant edge in today’s competitive market.",
        ],
        migrationHeading: "Visa & Immigration Support",
        migrationParagraphs: [
            "The Irish Study Visa process is student-friendly. We’ll assist you with gathering required documents, proof of funds, medical insurance, and application submissions for a seamless experience.",
            "Ireland’s post-study work permit helps you transition from academic life to professional opportunities within Europe’s growing economy.",
        ],
        personalHeading: "Lifestyle & Culture",
        personalParagraphs: [
            "Immerse yourself in Ireland’s cultural richness — from lively pub music sessions and literary festivals to ancient monuments and breathtaking coastal drives.",
            "Irish people are known for their warmth, humour, and hospitality, making it easy to settle, connect, and thrive as an international student.",
        ],
        otherHeading: "Helpful Tips Before You Go",
        otherIntroText: "Prepare well to make the most of your Irish journey:",
        subSections: [
            {
                heading: "Budget Wisely",
                paragraphs: [
                    "Living costs vary between cities; Dublin may be pricier, while Galway or Limerick offer more affordable lifestyles. Plan for rent, groceries, local transport, and entertainment.",
                ],
            },
            {
                heading: "Get Involved",
                paragraphs: [
                    "Join university clubs, sports teams, cultural societies, or volunteering groups to meet friends and enrich your student experience.",
                ],
            },
        ],
        finalHeading: "Take the Next Step",
        finalText:
            "Whether you dream of studying literature at Trinity College Dublin, data analytics in Cork, or marine biology along Ireland’s Wild Atlantic Way, this country offers an incredible platform for personal and academic growth. Start planning today to secure your spot in upcoming intakes and embark on an unforgettable adventure in the Emerald Isle.",
        buttonText: "Apply for 2025 Intake",
        buttonAction: () => console.log("Apply clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Study in Ireland – FAQs",
        qaData: [
            {
                id: 1,
                question: "What are the most popular courses in Ireland?",
                answer:
                    "Top choices include Computer Science, Data Analytics, Engineering, Business & Finance, Literature, Pharmacy, Medicine, and Renewable Energy. Creative writing, game design, and hospitality programs are also in demand.",
            },
            {
                id: 2,
                question: "How much does it cost to study in Ireland?",
                answer:
                    "Tuition fees typically range from €10,000 to €25,000 per year depending on the level and institution. Living costs average €10,000–€13,000 annually, covering rent, utilities, food, transport, and leisure.",
            },
            {
                id: 3,
                question: "Are there scholarships for international students?",
                answer:
                    "Yes! Ireland offers a variety of scholarships, including the Government of Ireland International Education Scholarships, as well as university-specific awards. Applying early maximises your chances of success.",
            },
            {
                id: 4,
                question: "Can I work while studying in Ireland?",
                answer:
                    "International students can work up to 20 hours per week during term and 40 hours per week during scheduled breaks, giving you the opportunity to earn extra income and gain valuable experience.",
            },
        ],
    };

    // Sample data for Ireland universities
    const irelandUniversities = [
        { id: 1, institution: "Trinity College Dublin", ranking: "81" },
        { id: 2, institution: "University College Dublin", ranking: "171" },
        { id: 3, institution: "National University of Ireland Galway", ranking: "270" },
        { id: 4, institution: "University College Cork", ranking: "292" },
        { id: 5, institution: "Dublin City University", ranking: "471" },
        { id: 6, institution: "University of Limerick", ranking: "501" },
        { id: 7, institution: "Maynooth University", ranking: "801" },
        { id: 8, institution: "Technological University Dublin", ranking: "801" },
        { id: 9, institution: "Dundalk Institute of Technology", ranking: "1001" },
        { id: 10, institution: "Waterford Institute of Technology", ranking: "1001" }
    ];

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <DestinationTable
                title="Top universities in Ireland for studying in Ireland"
                subtitle="Here are the top universities for higher education in Ireland:"
                tableData={irelandUniversities}
            />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default StudyInIreland;
