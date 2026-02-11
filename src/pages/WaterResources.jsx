import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const WaterResources = () => {
    const bannerProps = {
        title: "Penn State Extension Water Resources Program",
        description:
            "The Water Resources Program provides education, tools, and research-based solutions to ensure clean, sustainable water for communities, farms, and the environment.",
        bannerImage:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1200&h=600&fit=crop",
        paragraphText: `
            Clean and accessible water is essential for life, agriculture, and sustainable communities.  
            Penn State Extension’s Water Resources Program empowers individuals, farmers, and local 
            governments to manage water responsibly through science-based education and hands-on training.  

            From private well care and stormwater management to watershed protection and agricultural 
            best practices, this program helps reduce pollution, protect ecosystems, and ensure safe 
            drinking water.  

            By working with communities and policymakers, the program advances sustainable water 
            solutions that balance human needs with environmental protection, helping ensure a safe 
            and reliable water future for Pennsylvania and beyond.
        `,
        buttonText: "Explore Water Resources",
        buttonAction: () => console.log("User clicked Explore Water Resources"),
        reasons: [
            {
                title: "1. Private Well Education",
                description:
                    "Training and resources for homeowners to test, treat, and maintain private water systems."
            },
            {
                title: "2. Watershed Protection",
                description:
                    "Strategies to safeguard streams, rivers, and lakes from pollution and overuse."
            },
            {
                title: "3. Stormwater Management",
                description:
                    "Guidance for communities to reduce flooding, erosion, and water contamination."
            },
            {
                title: "4. Agricultural Best Practices",
                description:
                    "Support for farmers to manage manure, fertilizer, and chemicals while protecting water quality."
            },
            {
                title: "5. Drinking Water Safety",
                description:
                    "Programs to ensure families have access to clean and safe drinking water."
            },
            {
                title: "6. Water Conservation",
                description:
                    "Practical solutions for reducing water use in homes, farms, and businesses."
            },
            {
                title: "7. Climate and Water",
                description:
                    "Education on how climate change impacts water availability and quality."
            },
            {
                title: "8. Research-Based Solutions",
                description:
                    "Programs developed with Penn State’s expertise in hydrology and environmental science."
            },
            {
                title: "9. Community Engagement",
                description:
                    "Partnerships with local governments and organizations to protect shared water resources."
            },
            {
                title: "10. Long-Term Sustainability",
                description:
                    "Helping ensure future generations have access to clean, abundant, and healthy water."
            }
        ]
    };
    return <IELTSBanner {...bannerProps} />;
};

export default WaterResources;
