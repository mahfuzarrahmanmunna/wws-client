import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const Agriculture = () => {
    const bannerProps = {
        title: "Penn State Extension Agriculture Program",
        description:
            "The Agriculture Program provides research-based education, technical support, and resources to farmers, agribusinesses, and communities to enhance sustainable and profitable agricultural practices.",
        bannerImage:
            "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&h=600&fit=crop",
        paragraphText: `
            Penn State Extension’s Agriculture Program empowers farmers and communities by providing 
            up-to-date research, practical guidance, and innovative solutions for modern agriculture.  

            The program covers crop and livestock management, soil and water conservation, pest and 
            disease control, and sustainable farming practices. Farmers gain tools to increase productivity, 
            reduce environmental impact, and adapt to changing markets and climates.  

            Extension educators work directly with farms, agribusinesses, and local organizations to 
            ensure that knowledge is applied effectively. By connecting research with practice, 
            the Agriculture Program helps maintain a strong agricultural economy while promoting 
            environmental stewardship and community resilience.
        `,
        buttonText: "Explore Agriculture Programs",
        buttonAction: () => console.log("User clicked Explore Agriculture Programs"),
        reasons: [
            {
                title: "1. Crop Management",
                description:
                    "Guidance on planting, harvesting, soil fertility, pest control, and crop rotation to maximize yield."
            },
            {
                title: "2. Livestock Production",
                description:
                    "Resources for animal health, nutrition, breeding, and welfare to ensure sustainable production."
            },
            {
                title: "3. Soil and Water Conservation",
                description:
                    "Techniques to protect soil health, manage irrigation, and prevent erosion and runoff."
            },
            {
                title: "4. Sustainable Farming Practices",
                description:
                    "Education on organic farming, reduced chemical use, cover crops, and biodiversity enhancement."
            },
            {
                title: "5. Pest and Disease Management",
                description:
                    "Integrated strategies for controlling crop and livestock pests and diseases safely and effectively."
            },
            {
                title: "6. Market and Business Support",
                description:
                    "Tools and advice for financial planning, marketing, and farm business management."
            },
            {
                title: "7. Climate Adaptation",
                description:
                    "Strategies to help farms adapt to changing climate patterns and extreme weather events."
            },
            {
                title: "8. Community and Extension Partnerships",
                description:
                    "Collaborative programs with local organizations, government agencies, and universities to strengthen agriculture."
            },
            {
                title: "9. Research-Based Recommendations",
                description:
                    "All guidance is grounded in the latest agricultural research and field-tested solutions."
            },
            {
                title: "10. Workforce Development",
                description:
                    "Training opportunities for new and existing farmers to develop skills for long-term success."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Agriculture;
