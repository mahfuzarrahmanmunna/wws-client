import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const Events = () => {
    const bannerProps = {
        title: "Events – WWS Bangladesh",
        description:
            "Stay updated with WWS Bangladesh’s upcoming events, workshops, seminars, and global education fairs designed to guide and inspire students.",
        bannerImage:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, we believe that learning goes beyond the classroom. 
            That’s why we regularly host events that connect students, parents, and 
            professionals with global education opportunities. 

            Our events range from international education fairs and university roadshows 
            to skill development workshops and alumni networking sessions. 
            Each event is designed to provide practical insights, 
            answer important questions, and create valuable connections. 

            Whether you’re exploring study abroad options, preparing for IELTS, 
            or looking to meet representatives from top universities, 
            our events give you the chance to take the next step in your journey.
        `,
        buttonText: "View Upcoming Events",
        buttonAction: () => console.log("User clicked View Upcoming Events"),
        reasons: [
            {
                title: "1. Global Education Fairs",
                description:
                    "Meet representatives from top universities worldwide, explore study options, and get direct answers about admissions and scholarships."
            },
            {
                title: "2. IELTS & Test Preparation Workshops",
                description:
                    "Interactive sessions to help students improve their English skills and achieve their desired test scores."
            },
            {
                title: "3. Career Guidance Seminars",
                description:
                    "Our expert counselors and industry professionals share insights on career trends, international job markets, and skill requirements."
            },
            {
                title: "4. Alumni Networking Events",
                description:
                    "Hear success stories from WWS alumni who are studying or working abroad, and learn directly from their experiences."
            },
            {
                title: "5. Visa Guidance Sessions",
                description:
                    "Step-by-step sessions where our visa experts explain application processes, requirements, and interview preparation."
            },
            {
                title: "6. Scholarship Awareness Programs",
                description:
                    "Get updates on available scholarships and funding opportunities, along with tips for strong applications."
            },
            {
                title: "7. University Roadshows",
                description:
                    "Exclusive events where multiple universities visit Bangladesh to interact directly with prospective students."
            },
            {
                title: "8. Digital Webinars & Online Events",
                description:
                    "For students who cannot attend in person, we host webinars with global experts and university representatives."
            },
            {
                title: "9. Parent Information Sessions",
                description:
                    "Special events designed for parents to understand the study abroad journey, financial planning, and student safety."
            },
            {
                title: "10. Community Engagement Programs",
                description:
                    "Beyond academics, we organize events that promote cultural exchange, leadership, and social responsibility among students."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Events;
