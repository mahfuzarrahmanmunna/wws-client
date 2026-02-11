import React from "react";
import f1 from "../assets/LS_2.jpg"; // <-- replace with your real image
import IELTSBanner from "../component/IELTSBanner";
// import IELTSBanner from "../components/IELTSBanner";

const GlobalEventsDetails = () => {
    const bannerProps = {
        title: "Global Events",
        description:
            "At our Global events, you can meet university representatives and discuss your study prospects, and more in person.",
        bannerImage: f1,
        paragraphText:
            "Join our exclusive Global Events to connect face-to-face with leading universities and institutions from around the world. These sessions provide you with invaluable insights about courses, admissions, scholarships, and life on campus — all in one place. Whether you’re just starting to explore your study options or finalizing your application, our events give you direct access to experts who can guide you toward the right path.",
        buttonText: "Register Today",
        buttonAction: () => console.log("User clicked Register Today"),
        reasons: [
            {
                title: "1. Meet University Representatives",
                description:
                    "Talk directly with admission officers and faculty members to get detailed information about programs, requirements, and opportunities."
            },
            {
                title: "2. Get Personalized Guidance",
                description:
                    "Receive tailored advice based on your goals, academic background, and preferred destination to help you make informed decisions."
            },
            {
                title: "3. Explore Scholarships & Funding",
                description:
                    "Learn about a wide range of scholarships, grants, and financial aid options to make your education more affordable."
            },
            {
                title: "4. Attend Expert Seminars",
                description:
                    "Participate in workshops and info sessions on application tips, visa procedures, and studying abroad essentials."
            },
            {
                title: "5. Network with Like-minded Students",
                description:
                    "Meet other aspirants who share your ambition — exchange ideas, build friendships, and create support networks for your journey."
            },
            {
                title: "6. Take the First Step Toward Your Future",
                description:
                    "Leave the event with clarity, confidence, and an actionable plan for the next phase of your academic adventure."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default GlobalEventsDetails;
