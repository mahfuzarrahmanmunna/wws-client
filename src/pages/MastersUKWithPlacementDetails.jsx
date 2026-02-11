import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const MastersUKWithPlacementDetails = () => {
    const bannerProps = {
        title: "Master's In The UK With Placement",
        description:
            "A master’s program with placement in the UK combines advanced education with practical industry experience, giving you an edge in your career.",
        bannerImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
        paragraphText:
            "Master's programs in the UK with placement opportunities provide students with the perfect balance between academic learning and professional experience. These programs are designed to give you exposure to real-world work environments, helping you apply theoretical knowledge in practical situations. A placement can last from a few months to a year, depending on the program, and often leads to valuable networking opportunities and potential job offers after graduation.",
        buttonText: "Apply Now",
        buttonAction: () => console.log("User clicked Apply Now"),
        reasons: [
            {
                title: "1. Gain Real-World Experience",
                description:
                    "Placements allow students to work in reputable companies, gaining hands-on experience relevant to their field of study. This bridges the gap between theory and practice."
            },
            {
                title: "2. Improve Employability",
                description:
                    "UK master’s programs with placements make you more attractive to employers globally. Graduates have practical experience on their CVs, giving them a competitive advantage."
            },
            {
                title: "3. Networking Opportunities",
                description:
                    "During placements, students meet industry professionals, mentors, and peers, building networks that can lead to future career opportunities."
            },
            {
                title: "4. Develop Soft Skills",
                description:
                    "Working in a professional environment helps you develop communication, teamwork, problem-solving, and leadership skills essential for career growth."
            },
            {
                title: "5. Explore Career Paths",
                description:
                    "Placements give insight into different roles and industries, helping students decide on the career path that best fits their interests and strengths."
            },
            {
                title: "6. Potential Job Offers",
                description:
                    "Many students receive job offers from the companies where they complete their placements, providing a smooth transition from education to employment."
            },
            {
                title: "7. Financial Benefits",
                description:
                    "Some placements are paid, providing financial support while gaining valuable work experience."
            },
            {
                title: "8. Exposure to UK Work Culture",
                description:
                    "Students learn how businesses operate in the UK, understand professional expectations, and adapt to a multicultural work environment."
            },
            {
                title: "9. Academic Integration",
                description:
                    "Placements are structured to complement your academic curriculum, allowing you to integrate practical insights into your research and projects."
            },
            {
                title: "10. Personal Growth",
                description:
                    "Living and working abroad helps you become more independent, confident, and adaptable, enhancing both your personal and professional development."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default MastersUKWithPlacementDetails;
