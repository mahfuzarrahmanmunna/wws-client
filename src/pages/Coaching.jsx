import React from "react";
import IELTSBanner from "../component/IELTSBanner";
import icon3 from "../assets/LS_2.jpg"; 

const Coaching = () => {
    const bannerProps = {
        title: "COACHING",
        description:
            "Expert guidance and personalized coaching to help you achieve your study abroad dreams.",
        bannerImage: icon3, 
        paragraphText: `
            At WWS Bangladesh, our coaching services are designed to give students the confidence 
            and skills needed to excel in their study abroad journey. Our experienced counselors 
            provide personalized guidance in test preparation, application strategy, and career planning.  

            We focus on holistic development, helping students not only achieve high scores but also 
            develop leadership, communication, and problem-solving skills. Each student receives 
            tailored coaching plans based on their strengths, goals, and desired universities.  

            With one-on-one mentorship, workshops, and access to a wealth of resources, our coaching 
            ensures that students are fully prepared to face challenges and seize opportunities abroad. 
            Our mission is to transform aspirations into tangible success, providing guidance at every step.
        `,
        buttonText: "Start Your Coaching",
        buttonAction: () => console.log("User clicked Start Your Coaching"),
        reasons: [
            {
                title: "1. Personalized Mentorship",
                description:
                    "Each student receives one-on-one guidance tailored to their academic goals and target universities."
            },
            {
                title: "2. Test Preparation Support",
                description:
                    "Expert coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests to ensure top performance."
            },
            {
                title: "3. Application Strategy",
                description:
                    "Counselors help craft strong applications, essays, and recommendation letters to maximize acceptance chances."
            },
            {
                title: "4. Career Guidance",
                description:
                    "Advising students on long-term career paths and aligning academic choices with professional aspirations."
            },
            {
                title: "5. Workshops & Seminars",
                description:
                    "Regular sessions on study skills, interview techniques, and global education trends."
            },
            {
                title: "6. Holistic Development",
                description:
                    "Focus on leadership, communication, and critical thinking to prepare students for life abroad."
            },
            {
                title: "7. Scholarship & Funding Advice",
                description:
                    "Guidance on finding and applying for scholarships to reduce financial barriers."
            },
            {
                title: "8. Progress Monitoring",
                description:
                    "Regular assessment and feedback to track improvement and adjust coaching plans accordingly."
            },
            {
                title: "9. Alumni Insights",
                description:
                    "Access to experiences and advice from successful students who have studied abroad."
            },
            {
                title: "10. Success-Driven Approach",
                description:
                    "Our coaching is outcome-focused, ensuring students achieve their study abroad goals efficiently."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Coaching;
