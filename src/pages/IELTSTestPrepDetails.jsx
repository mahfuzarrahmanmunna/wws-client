import React from "react";
// import IELTSBanner from "../../component/IELTSBanner";
import bannerImg from "../assets/LS_1.jpg"; // <-- replace with your banner image
import IELTSBanner from "../component/IELTSBanner";

const IELTSTestPrepSupport = () => {
    const bannerProps = {
        title: "IELTS and Test Prep Support",
        description:
            "Prepare with expert resources, test strategies, and access to official IELTS and English proficiency training.",
        bannerImage: bannerImg,
        paragraphText:
            "At WWS, we are dedicated to helping you achieve your goals in IELTS and other English proficiency tests. Our support includes expert-curated study guides, practice sessions, and strategies designed to boost your performance. Whether you are aiming for academic purposes or immigration, we provide you with everything you need to feel confident on test day.",
        buttonText: "Start Preparing",
        buttonAction: () => console.log("User clicked Start Preparing"),
        reasons: [
            {
                title: "1. Comprehensive Study Materials",
                description:
                    "Access a wide range of IELTS guides, sample papers, and interactive lessons to strengthen every skill."
            },
            {
                title: "2. Effective Test Strategies",
                description:
                    "Learn proven techniques and tips that improve accuracy, time management, and confidence during exams."
            },
            {
                title: "3. Expert Mentors",
                description:
                    "Work with experienced trainers who understand the exam format and can guide you step-by-step."
            },
            {
                title: "4. Realistic Practice Tests",
                description:
                    "Take full-length mock exams to simulate the real test environment and build familiarity."
            },
            {
                title: "5. Personalized Feedback",
                description:
                    "Get constructive feedback on your writing and speaking to help you focus on key areas for improvement."
            },
            {
                title: "6. Continuous Support",
                description:
                    "From registration to your final test, we’re here to ensure you have the resources and motivation to succeed."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default IELTSTestPrepSupport;
