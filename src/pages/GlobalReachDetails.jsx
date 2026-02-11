import React from "react";
import IELTSBanner from "../component/IELTSBanner";
import bannerImg from "../assets/LS_2.jpg";

const GlobalReachDetails = () => {
    const bannerProps = {
        title: "Global Reach, Local Care",
        description:
            "With offices and partners across multiple countries, you can access expert counsellors wherever you are.",
        bannerImage: bannerImg,
        paragraphText:
            "At WWS, we combine an extensive international presence with the warmth of personalized support. Whether you’re preparing for a new academic chapter, planning to migrate, or advancing your career, our network of offices and trusted partners ensures you receive guidance no matter your location. We understand that every region has its own unique needs, and our counsellors tailor their advice to suit your goals and cultural context.",
        buttonText: "Find Support Near You",
        buttonAction: () => console.log('User clicked "Find Support Near You"'),
        reasons: [
            {
                title: "1. Worldwide Presence",
                description:
                    "We’ve built a strong network of offices and partner organizations across continents, giving you access to quality services wherever you live."
            },
            {
                title: "2. Local Expertise",
                description:
                    "Each of our regional counsellors understands the local education systems, migration rules, and opportunities, helping you navigate them smoothly."
            },
            {
                title: "3. Personalized Guidance",
                description:
                    "We don’t offer one-size-fits-all advice — instead, we take the time to understand your ambitions and craft a clear plan for success."
            },
            {
                title: "4. Seamless Communication",
                description:
                    "Connect with us through your preferred channel: face-to-face meetings, online video calls, emails, or messaging platforms."
            },
            {
                title: "5. Cultural Sensitivity",
                description:
                    "Our counsellors respect and value cultural differences, ensuring your experience feels supportive and welcoming wherever you are."
            },
            {
                title: "6. Commitment to Your Journey",
                description:
                    "From your first consultation to reaching your destination, we remain by your side, offering encouragement and practical help at every stage."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default GlobalReachDetails;
