import React from "react";
// import IELTSBanner from "../components/IELTSBanner";
import bannerImg from "../assets/whyielts.jpg"; // Replace with your actual image path
import IELTSBanner from "../component/IELTSBanner";

const ClientFocusedDetails = () => {
    const bannerProps = {
        title: "Client Focused",
        description:
            "Your vision, our mission. We work hand-in-hand with you, delivering tailored solutions and dedicated support at every step to help you succeed.",
        bannerImage: bannerImg,
        paragraphText:
            "At WWS, being client-focused isn’t just a strategy — it’s our core philosophy. We believe that the foundation of great work lies in strong relationships, active listening, and a deep understanding of our clients' needs. Every interaction is an opportunity to understand your vision more clearly, align with your goals, and exceed your expectations. From the first conversation to long after project completion, we remain committed to your success. Our team becomes an extension of yours — working with transparency, agility, and passion to deliver meaningful outcomes. With WWS, you're not just hiring a service provider; you're gaining a creative and strategic partner invested in your long-term growth.",
        buttonText: "Work With Us",
        buttonAction: () => console.log("User clicked Work With Us"),
        reasons: [
            {
                title: "1. Personalized Service, Always",
                description:
                    "We understand that no two clients are the same. That’s why we invest time in getting to know your brand, your audience, and your goals. This enables us to design solutions that are not only functional but deeply aligned with your identity and vision."
            },
            {
                title: "2. Transparent Communication",
                description:
                    "You’ll never be left in the dark. We prioritize clear, consistent, and honest communication throughout every phase of the project. Whether it's progress updates, feedback sessions, or troubleshooting — we keep the conversation open and ongoing."
            },
            {
                title: "3. Collaborative Approach",
                description:
                    "We see you as an essential part of the creative process. Our collaboration model encourages shared ownership of outcomes, where your insights and feedback are integrated at every major milestone to ensure the final product meets and exceeds expectations."
            },
            {
                title: "4. End-to-End Support",
                description:
                    "From the first meeting to the launch and beyond, we stand by your side. Our team provides proactive guidance, fast responses, and flexible support, ensuring you feel confident and empowered throughout the entire journey."
            },
            {
                title: "5. Quality Without Compromise",
                description:
                    "We hold ourselves to the highest standards. Our work goes through rigorous testing and quality assurance to ensure everything we deliver is not only visually appealing but also technically sound, accessible, and user-friendly."
            },
            {
                title: "6. Long-Term Commitment",
                description:
                    "We’re in it for the long haul. Our goal isn’t just to complete a project — it’s to build lasting relationships based on trust, performance, and shared success. Many of our clients continue to partner with us for years, and we take pride in being their go-to creative team."
            },
            {
                title: "7. Adaptability & Flexibility",
                description:
                    "Your needs can evolve — and we evolve with you. Whether there’s a sudden pivot in project scope, timeline, or market demand, we adapt quickly and efficiently, ensuring minimal disruption and maximum alignment with your new direction."
            },
            {
                title: "8. Results That Reflect Your Goals",
                description:
                    "Our success is measured by your results. We focus on creating work that drives your KPIs — be it increased engagement, lead generation, stronger brand identity, or improved customer satisfaction. We don’t just deliver work; we deliver impact."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default ClientFocusedDetails;
