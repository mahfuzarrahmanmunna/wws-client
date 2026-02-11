import React from "react";
import IELTSBanner from "../component/IELTSBanner";
import icon2 from "../assets/LS_2.jpg"; // replace with actual icon path

const Results = () => {
    const bannerProps = {
        title: "RESULTS",
        description:
            "Proven track record of successful student placements and high acceptance rates.",
        bannerImage: icon2, // Can replace with a proper banner image if desired
        paragraphText: `
            At WWS Bangladesh, our results speak for themselves. We take pride in guiding students 
            toward acceptance at top universities worldwide, ensuring that their academic ambitions 
            become reality.  

            Over the years, our dedicated counselors and advisors have helped thousands of students 
            navigate complex application processes, secure scholarships, and gain admission to prestigious 
            institutions across the globe.  

            By combining personalized guidance, strategic planning, and meticulous preparation, 
            WWS has built a reputation for consistently delivering successful outcomes. Students 
            leave our programs not just with acceptance letters, but with confidence, readiness, 
            and a roadmap for academic and career success.
        `,
        buttonText: "See Our Achievements",
        buttonAction: () => console.log("User clicked See Our Achievements"),
        reasons: [
            {
                title: "1. High Acceptance Rates",
                description:
                    "Our students consistently gain admission to top-ranked universities around the world."
            },
            {
                title: "2. Scholarship Success",
                description:
                    "Many students receive merit-based scholarships, reducing financial barriers to education."
            },
            {
                title: "3. Comprehensive Counseling",
                description:
                    "Individualized guidance ensures students submit strong applications tailored to each university."
            },
            {
                title: "4. Strong Academic Preparation",
                description:
                    "We provide support for test preparation, essay writing, and application strategy to maximize success."
            },
            {
                title: "5. International Placement",
                description:
                    "Students are placed in a wide range of countries, gaining global experience and perspectives."
            },
            {
                title: "6. Alumni Success Stories",
                description:
                    "Our alumni have gone on to excel in academics, research, and professional careers worldwide."
            },
            {
                title: "7. Personalized Roadmaps",
                description:
                    "Every student receives a tailored plan, ensuring clarity and direction throughout the application journey."
            },
            {
                title: "8. Expert Review & Feedback",
                description:
                    "Applications are meticulously reviewed by experienced counselors to improve acceptance chances."
            },
            {
                title: "9. Continuous Monitoring",
                description:
                    "We track progress, provide updates, and adapt strategies to ensure successful outcomes."
            },
            {
                title: "10. Proven Track Record",
                description:
                    "Years of experience and hundreds of success stories demonstrate our commitment to student success."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Results;
