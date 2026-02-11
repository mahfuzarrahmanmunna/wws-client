import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const Pennsylvania4H = () => {
    const bannerProps = {
        title: "Pennsylvania 4-H – Youth Development Program",
        description:
            "Pennsylvania 4-H empowers youth to develop leadership, life skills, and career readiness through hands-on learning and community engagement.",
        bannerImage:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop",
        paragraphText: `
            Pennsylvania 4-H is part of the nationwide Cooperative Extension System that provides 
            youth with opportunities to learn by doing. With a focus on agriculture, science, 
            citizenship, and healthy living, 4-H programs help young people develop essential 
            life skills while making a positive impact in their communities. 

            From animal care and robotics to public speaking and environmental stewardship, 
            Pennsylvania 4-H offers a wide range of projects and activities. 
            Each program is designed to build confidence, responsibility, and leadership among 
            participants, preparing them for successful futures. 

            Supported by Penn State Extension, volunteers, and community partners, 
            Pennsylvania 4-H continues to inspire thousands of youth every year to explore their 
            passions, strengthen their skills, and become leaders of tomorrow.
        `,
        buttonText: "Learn More About 4-H",
        buttonAction: () => console.log("User clicked Learn More About 4-H"),
        reasons: [
            {
                title: "1. Hands-On Learning",
                description:
                    "Youth gain practical experience through projects in agriculture, science, arts, and technology."
            },
            {
                title: "2. Leadership Development",
                description:
                    "Programs focus on building confidence, communication skills, and the ability to lead teams effectively."
            },
            {
                title: "3. Community Engagement",
                description:
                    "Participants contribute to community service projects, promoting citizenship and responsibility."
            },
            {
                title: "4. Diverse Project Areas",
                description:
                    "From livestock and gardening to coding, photography, and STEM, Pennsylvania 4-H offers something for everyone."
            },
            {
                title: "5. Healthy Living Initiatives",
                description:
                    "Programs encourage physical fitness, mental health awareness, and overall well-being for youth."
            },
            {
                title: "6. Career Readiness",
                description:
                    "4-H equips participants with essential skills like teamwork, problem-solving, and public speaking that prepare them for future careers."
            },
            {
                title: "7. Mentorship Opportunities",
                description:
                    "Youth work alongside dedicated mentors and volunteers who provide guidance and support."
            },
            {
                title: "8. Inclusivity",
                description:
                    "Pennsylvania 4-H welcomes all youth, regardless of background, offering equal opportunities to learn and grow."
            },
            {
                title: "9. Partnership with Penn State Extension",
                description:
                    "The program is backed by Penn State’s research-based resources, ensuring high-quality education and training."
            },
            {
                title: "10. Lifelong Impact",
                description:
                    "Many alumni credit 4-H with shaping their personal growth, academic success, and professional journeys."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Pennsylvania4H;
