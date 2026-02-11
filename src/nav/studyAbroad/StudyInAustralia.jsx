import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/WhyhooseAustralia.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";
import DestinationTable from "../../component/DestinationTable";
import ContactHome from "../../component/ContactHome";

const StudyInAustralia = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Destinations", "Australia"],
        title: "Study in Australia – Explore World-Class Education",
        description:
            "Australia is one of the most popular destinations for international students. With top-ranked universities, a vibrant culture, and globally recognised qualifications, Australia offers an unmatched blend of academic excellence and lifestyle.",
        buttonText: "Start Your Australian Journey",
        buttonAction: () => console.log("Start Australian Journey"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "Australian universities consistently rank among the world’s best, offering hundreds of programs across engineering, business, IT, health sciences, creative arts, and more. Beyond academics, Australia welcomes students with its breathtaking beaches, thriving cities, and supportive student communities. You’ll gain not only a prestigious degree but also hands-on industry exposure through internships, research opportunities, and part-time work options.",
        image1: stepImg,
        image2: guideImg,
        image1Alt: "Australian lifestyle",
        image2Alt: "Campus life in Australia",
        galleryTitle: "Why Choose Australia?",
        gallerySubtitle: "A perfect mix of academics and adventure",
        cardTitle: "Build your future in a global hub",
        cardDescription:
            "From Sydney’s tech start-ups to Melbourne’s arts scene and Brisbane’s research labs, Australia’s diverse cities help you combine education with career growth. Our experts will help you shortlist universities, estimate costs, and guide you through every form and deadline.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Counselling clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Meet an Australian Education Mentor",
        description:
            "Australia is a popular destination for international students including those from Bangladesh. It offers a strong education system, good work-while-studying rights, and a multicultural environmentHave questions about tuition fees, scholarships, visas, or lifestyle? Book a free one-on-one session with our certified Australian education mentors.",
        buttonText: "Book Your Session",
        buttonAction: () => console.log("Mentor session booked"),
        image: counsellorImg,
        imageAlt: "Mentor guiding student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Studying in Australia isn’t just about lectures and exams. It’s about becoming part of a global network of thinkers, creators, and leaders. From group projects to real-world internships, you’ll gather skills employers truly value.",
        introText2:
            "Australia also gives you access to generous post-study work visas, letting you gain experience in sectors like IT, engineering, hospitality, healthcare, and finance.",
        mainHeading: "Key Highlights of Studying in Australia",
        mainDescription:
            "When you choose Australia, you open doors to innovation, diversity, and personal growth. Here’s what makes the country unique:",
        sectionHeading: "Quality Education",
        sectionText1:
            "Universities such as the University of Melbourne, Australian National University, and University of Sydney are globally respected for research and teaching excellence.",
        sectionText2:
            "Australian qualifications are recognised worldwide, meaning your degree can take you to opportunities in Asia, Europe, North America, and beyond.",
        buttonText: "Explore Universities",
        buttonAction: () => console.log("Explore universities"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Discover Life & Opportunities",
        globalPerspectiveText:
            "Australia’s classrooms focus on creativity, collaboration, and critical thinking, preparing you for leadership in a fast-changing world.",
        careerHeading: "Career Growth",
        careerParagraphs: [
            "Take advantage of internship programs and part-time jobs to build an international resume while you study.",
            "Graduates may qualify for a Temporary Graduate visa, allowing them to work in Australia for up to 4 years depending on their qualification.",
        ],
        migrationHeading: "Visa & Immigration Support",
        migrationParagraphs: [
            "The student visa (subclass 500) lets you study full-time while enjoying part-time work rights.",
            "We’ll help you gather financial statements, OSHC (Overseas Student Health Cover), and required forms for a smooth visa application.",
        ],
        personalHeading: "Lifestyle & Culture",
        personalParagraphs: [
            "From the Great Barrier Reef to Uluru, weekend getaways offer unforgettable memories.",
            "Australians are warm, inclusive, and love outdoor fun, making it easy to settle and thrive.",
        ],
        otherHeading: "Additional Tips",
        otherIntroText: "Before you pack, remember:",
        subSections: [
            {
                heading: "Budget Smartly",
                paragraphs: [
                    "Living costs vary by city. Plan for accommodation, groceries, transport, and entertainment.",
                ],
            },
            {
                heading: "Stay Connected",
                paragraphs: [
                    "Join university clubs, sports teams, or volunteering groups to meet new friends and grow your network.",
                ],
            },
        ],
        finalHeading: "Take the Leap",
        finalText:
            "Whether you want to study marine biology in Queensland or data science in Sydney, Australia gives you a platform to grow academically and personally. Start your preparations now so you can arrive confident and ready.",
        buttonText: "Apply for 2025 Intake",
        buttonAction: () => console.log("Apply clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Study in Australia – FAQs",
        qaData: [
            {
                id: 1,
                question: "What are the popular courses in Australia?",
                answer:
                    "Business, IT, Engineering, Nursing, Environmental Science, and Hospitality are among the top choices. Many students also pursue creative arts, sports management, and agricultural studies.",
            },
            {
                id: 2,
                question: "How much does it cost to study in Australia?",
                answer:
                    "Tuition fees range from AUD 20,000 to AUD 45,000 per year depending on your course and university. You should also budget AUD 21,000–25,000 annually for living costs.",
            },
            {
                id: 3,
                question: "Are scholarships available?",
                answer:
                    "Yes! Universities and the Australian government offer scholarships like Australia Awards, Destination Australia, and Research Training Program. Early applications improve your chances.",
            },
            {
                id: 4,
                question: "Can I work while studying?",
                answer:
                    "International students can work up to 48 hours per fortnight during study sessions and unlimited hours during holidays, giving you valuable work experience and income.",
            },
        ],
    };

     // Sample data for Australia universities
  const australiaUniversities = [
    { id: 1, institution: "University of Melbourne", ranking: "14" },
    { id: 2, institution: "University of Sydney", ranking: "19" },
    { id: 3, institution: "Australian National University", ranking: "34" },
    { id: 4, institution: "University of New South Wales", ranking: "19" },
    { id: 5, institution: "University of Queensland", ranking: "50" },
    { id: 6, institution: "Monash University", ranking: "42" },
    { id: 7, institution: "University of Western Australia", ranking: "72" },
    { id: 8, institution: "University of Adelaide", ranking: "89" },
    { id: 9, institution: "University of Technology Sydney", ranking: "90" },
    { id: 10, institution: "Macquarie University", ranking: "130" }
  ]


    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <DestinationTable 
                title="Top universities in Australia for studying in Australia"
                subtitle="Here are the top universities for higher education in Australia:"
                countryName="Australia"
                tableData={australiaUniversities}
            />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default StudyInAustralia;
