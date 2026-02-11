import React from "react";
import f2 from "../assets/LS_1.jpg"; // update the path to your real image
import IELTSBanner from "../component/IELTSBanner";
// import IELTSBanner from "../components/IELTSBanner";

const FastLaneDetails = () => {
    const bannerProps = {
        title: "Live life in the FastLane",
        description:
            "You can get an express response from your dream university in seconds!",
        bannerImage: f2,
        paragraphText:
            "FastLane is a unique service that connects you directly with universities, allowing you to receive instant feedback on your eligibility and prospects. Instead of waiting weeks for responses, FastLane provides a quick and transparent way to evaluate your chances and take the next step toward studying abroad. With just a few clicks, you can fast-track your journey to higher education success.",
        buttonText: "Learn More",
        buttonAction: () => console.log("User clicked Learn More"),
        reasons: [
            {
                title: "1. Instant Eligibility Check",
                description:
                    "FastLane evaluates your profile against university requirements in real-time, helping you see where you stand in seconds."
            },
            {
                title: "2. Save Time & Effort",
                description:
                    "Skip lengthy application processes. With FastLane, you receive instant responses and focus only on universities that match your profile."
            },
            {
                title: "3. Direct Connection to Universities",
                description:
                    "Engage directly with universities and receive immediate guidance about your next steps."
            },
            {
                title: "4. Transparent & Reliable",
                description:
                    "Get clear, data-driven insights into your acceptance possibilities — no guesswork involved."
            },
            {
                title: "5. Boost Confidence",
                description:
                    "Knowing where you stand empowers you to apply with confidence and clarity."
            },
            {
                title: "6. Start Your Journey Faster",
                description:
                    "With instant feedback, you can move ahead with your academic plans without unnecessary delays."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default FastLaneDetails;
