import React from "react";
import img2 from "../assets/LS_1.jpg"; // replace with your actual image path
import IELTSBanner from "../component/IELTSBanner";

const TenReasonsUSAStudyDetails = () => {
    const bannerProps = {
        title: "Ten Reasons To Study In The USA",
        description:
            "The USA is one of the most popular study destinations in the world, offering diverse academic programs and unmatched opportunities for international students.",
        bannerImage: img2,
        paragraphText:
            "Studying in the USA provides students with access to world-class universities, cutting-edge research facilities, and a multicultural environment. From undergraduate to postgraduate programs, the USA offers a wide range of courses tailored to global career goals. International students can immerse themselves in campus life, develop professional skills, and build networks that last a lifetime. The US education system emphasizes critical thinking, creativity, and practical experience, making it ideal for ambitious students looking to thrive academically and professionally.",
        buttonText: "Apply Now",
        buttonAction: () => console.log("User clicked Apply Now"),
        reasons: [
            {
                title: "1. World-Renowned Universities",
                description:
                    "The USA is home to many of the top-ranked universities globally, offering excellent faculty, research opportunities, and diverse academic programs."
            },
            {
                title: "2. Diverse Academic Programs",
                description:
                    "Students can choose from a wide variety of courses, from engineering and medicine to arts and social sciences, catering to different interests and career paths."
            },
            {
                title: "3. Research & Innovation Opportunities",
                description:
                    "American universities emphasize research and innovation, providing students access to labs, projects, and programs that foster practical learning and discovery."
            },
            {
                title: "4. Cultural Diversity",
                description:
                    "With students from all over the world, studying in the USA provides exposure to multiple cultures, traditions, and perspectives."
            },
            {
                title: "5. Networking & Career Opportunities",
                description:
                    "The USA offers excellent networking opportunities, internships, and job placements that help students secure global careers."
            },
            {
                title: "6. Flexible Curriculum",
                description:
                    "Many programs allow students to explore electives, minors, and interdisciplinary studies, creating a customized learning experience."
            },
            {
                title: "7. Vibrant Campus Life",
                description:
                    "Students can engage in clubs, societies, sports, and cultural events, balancing academics with personal growth and social activities."
            },
            {
                title: "8. English Language Skills",
                description:
                    "Immersion in an English-speaking environment improves language proficiency, communication skills, and academic performance."
            },
            {
                title: "9. Travel & Exploration",
                description:
                    "Students can explore the diverse landscapes, cities, and cultural landmarks across the USA, enriching their overall experience."
            },
            {
                title: "10. Personal Growth & Independence",
                description:
                    "Living and studying abroad develops independence, adaptability, and problem-solving skills that are valuable for personal and professional life."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default TenReasonsUSAStudyDetails;
