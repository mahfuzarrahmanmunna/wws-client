import React from "react";
// import IELTSBanner from "../components/IELTSBanner";
import bannerImg from "../assets/Whatisieltss.jpg"; // Replace with your actual image path
import IELTSBanner from "../component/IELTSBanner";

const CreativeSolutionsDetails = () => {
    const bannerProps = {
        title: "Creative Solutions",
        description:
            "Elevate your brand with powerful, forward-thinking creative strategies that go beyond aesthetics. We deliver bold design, compelling messaging, and innovative ideas that make a lasting impact.",
        bannerImage: bannerImg,
        paragraphText:
            "At WWS, we specialize in crafting creative solutions that fuse imagination with precision. Whether you're building a brand, launching a campaign, or reimagining your digital presence, we bring together visionary design, strategic thinking, and emerging technologies to help you connect, communicate, and convert. We believe creativity is the engine of innovation — and we're here to help you use it to your advantage.",
        buttonText: "Explore Ideas",
        buttonAction: () => {
            console.log("User clicked Explore Ideas");
            // You can integrate routing or modal functionality here if needed
        },
        reasons: [
            {
                title: "1. Design that Inspires",
                description:
                    "We don’t just make things look good — we tell stories that matter. Our design philosophy is grounded in emotional connection and user experience. Each project is meticulously crafted to evoke feelings, spark action, and represent your brand's core identity."
            },
            {
                title: "2. Custom-Tailored Concepts",
                description:
                    "No templates. No shortcuts. We believe in originality. Every concept we develop is shaped by your brand’s vision, values, and goals. From initial sketches to final execution, your voice remains at the heart of the creative process."
            },
            {
                title: "3. Collaboration at Every Step",
                description:
                    "We see our clients as creative partners. Our collaborative workflow keeps you involved and informed — from discovery and concept development to production and deployment. Your input, feedback, and ideas are key ingredients in every solution we deliver."
            },
            {
                title: "4. Innovation-Driven Process",
                description:
                    "We thrive at the intersection of design and technology. Our team constantly explores new tools, platforms, and creative methods to ensure your brand stays ahead of the curve. Whether it's motion graphics, interactive UI/UX, or AI-powered personalization — we’re always evolving."
            },
            {
                title: "5. Precision and Attention to Detail",
                description:
                    "We believe perfection is found in the details. Every font, icon, color, and transition is carefully chosen and refined. This commitment to detail ensures a seamless and professional user experience across every touchpoint."
            },
            {
                title: "6. Results that Matter",
                description:
                    "Creative work should do more than look good — it should drive outcomes. Whether you’re looking to boost brand awareness, generate leads, or increase engagement, our solutions are designed to achieve measurable, meaningful results."
            },
            {
                title: "7. Multi-Platform Excellence",
                description:
                    "Your audience lives across platforms — and your brand should too. We design with adaptability in mind, ensuring consistent and optimized experiences across web, mobile, social media, print, and beyond."
            },
            {
                title: "8. Scalable Creative Systems",
                description:
                    "Our creative systems aren’t just built for now — they’re built for growth. We design visual languages, component libraries, and content frameworks that scale with your brand, allowing for easy updates and future expansion."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default CreativeSolutionsDetails;
