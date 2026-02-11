import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/WhychooseCanada.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";
import DestinationTable from "../../component/DestinationTable";
import ContactHome from "../../component/ContactHome";

const StudyInCanada = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Destinations", "Canada"],
        title: "Study in Canada – A Gateway to Quality Education",
        description:
            ".",
        buttonText: "Begin Your Canadian Journey",
        buttonAction: () => console.log("Start Canada Journey"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "Canada is well-regarded for high quality of education,multicultural environment, and post-study work & immigration opportunities. It’s increasingly popular among Bangladeshi students Canada’s universities and colleges are globally renowned for their academic excellence and cutting-edge research. Whether you want to pursue Computer Science, Engineering, Healthcare, Environmental Studies, or Arts, you’ll find programs designed to meet the needs of a rapidly evolving job market. Beyond academics, Canada captivates students with its breathtaking natural beauty — from the Rocky Mountains to Niagara Falls — and its inclusive, supportive communities.",
        image1: stepImg,
        image2: guideImg,
        image1Alt: "Canadian landscapes",
        image2Alt: "Campus life in Canada",
        galleryTitle: "Why Choose Canada?",
        gallerySubtitle: "Academic success meets a world-class lifestyle",
        cardTitle: "Shape Your Future in a Land of Opportunities",
        cardDescription:
            "Canadian cities like Toronto, Vancouver, Montreal, and Calgary blend education, innovation, and career growth. With affordable tuition compared to other Western countries and a clear path to permanent residency, Canada is an outstanding choice for students looking to build a successful future abroad.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Counselling clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk to a Canadian Education Mentor",
        description:
            "Confused about choosing the right province, understanding tuition fees, or applying for scholarships? Book a free one-on-one session with our certified Canadian education mentors. They’ll walk you through course selection, visa requirements, accommodation tips, and even advice on part-time jobs and co-op programs.",
        buttonText: "Book Your Session",
        buttonAction: () => console.log("Mentor session booked"),
        image: counsellorImg,
        imageAlt: "Mentor guiding student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Studying in Canada offers more than lectures and libraries — it’s about being part of a forward-thinking society that values diversity, innovation, and community. Through co-op programs, you’ll gain hands-on experience with leading companies, making you job-ready even before graduation.",
        introText2:
            "Canada also offers generous post-study work permits, giving graduates the chance to gain experience in industries like IT, engineering, healthcare, finance, and environmental sciences.",
        mainHeading: "Key Highlights of Studying in Canada",
        mainDescription:
            "From affordable tuition to top-tier universities, here’s what makes Canada a favorite destination for students worldwide:",
        sectionHeading: "Globally Recognised Education",
        sectionText1:
            "Institutions such as the University of Toronto, McGill University, and the University of British Columbia are celebrated for research excellence and student success.",
        sectionText2:
            "Canadian degrees are respected globally, offering you flexibility to work or continue your studies in other countries.",
        buttonText: "Explore Canadian Universities",
        buttonAction: () => console.log("Explore universities"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Experience Canada Beyond the Classroom",
        globalPerspectiveText:
            "Canadian education encourages collaboration, creativity, and practical problem-solving, preparing you for leadership roles in an interconnected world.",
        careerHeading: "Career Prospects",
        careerParagraphs: [
            "Take part in co-op placements or internships to gain valuable work experience while studying.",
            "Graduates can apply for a Post-Graduation Work Permit (PGWP), allowing up to 3 years of work experience in Canada after completing their program.",
        ],
        migrationHeading: "Visa & Immigration Pathways",
        migrationParagraphs: [
            "The Canadian Study Permit allows you to work part-time during semesters and full-time during breaks.",
            "We’ll guide you through the visa process, proof of funds, medical exams, and other formalities so you can focus on your education.",
        ],
        personalHeading: "Life & Culture in Canada",
        personalParagraphs: [
            "From skating on frozen lakes in winter to hiking in summer, Canada offers year-round adventures.",
            "With a strong focus on inclusivity and respect for diversity, international students find it easy to adapt and thrive in Canadian society.",
        ],
        otherHeading: "Essential Tips",
        otherIntroText: "Before you head to Canada, keep these points in mind:",
        subSections: [
            {
                heading: "Plan Your Finances",
                paragraphs: [
                    "Estimate your living costs, including rent, groceries, public transport, and health insurance. Cities like Toronto and Vancouver may have higher expenses than smaller towns.",
                ],
            },
            {
                heading: "Engage with Communities",
                paragraphs: [
                    "Join university associations, cultural clubs, or sports groups to make new friends and build your network.",
                ],
            },
        ],
        finalHeading: "Take the First Step",
        finalText:
            "Whether you dream of studying data analytics in Toronto or environmental science in British Columbia, Canada gives you an incredible platform for growth. Start preparing early so you can make the most of this life-changing journey.",
        buttonText: "Apply for 2025 Intake",
        buttonAction: () => console.log("Apply clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Study in Canada – FAQs",
        qaData: [
            {
                id: 1,
                question: "Which courses are popular in Canada?",
                answer:
                    "Computer Science, Business, Engineering, Nursing, Media & Communication, and Environmental Studies are among the most sought-after programs. Many students also explore Hospitality, Artificial Intelligence, and Agricultural Science.",
            },
            {
                id: 2,
                question: "How much does it cost to study in Canada?",
                answer:
                    "Tuition fees typically range from CAD 13,000 to CAD 35,000 per year, depending on the program and university. Plan for CAD 10,000–15,000 annually for living expenses, including housing, food, and transport.",
            },
            {
                id: 3,
                question: "Are scholarships available in Canada?",
                answer:
                    "Yes! The Canadian government, provinces, and universities offer scholarships like Vanier Canada Graduate Scholarships, Canada-ASEAN Awards, and institution-specific grants for deserving students.",
            },
            {
                id: 4,
                question: "Can I work while studying in Canada?",
                answer:
                    "International students can work up to 20 hours per week during semesters and full-time during scheduled breaks. Co-op and internship programs offer additional paid work opportunities related to your field of study.",
            },
        ],
    };


     // Sample data for Canada universities
  const canadaUniversities = [
    { id: 1, institution: "University of Toronto", ranking: "21" },
    { id: 2, institution: "McGill University", ranking: "30" },
    { id: 3, institution: "University of British Columbia", ranking: "34" },
    { id: 4, institution: "University of Montreal", ranking: "141" },
    { id: 5, institution: "University of Alberta", ranking: "111" },
    { id: 6, institution: "McMaster University", ranking: "189" },
    { id: 7, institution: "University of Waterloo", ranking: "112" },
    { id: 8, institution: "Western University", ranking: "114" },
    { id: 9, institution: "University of Ottawa", ranking: "203" },
    { id: 10, institution: "University of Calgary", ranking: "182" }
  ]

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <DestinationTable
             title="Top universities in Canada for studying in Canada"
             subtitle="Here are the top universities for higher education in Canada:"
            countryName="Canada"
            tableData={canadaUniversities}></DestinationTable>
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default StudyInCanada;
