import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const FoodSafety = () => {
    const bannerProps = {
        title: "Penn State Extension Food Safety Program",
        description:
            "The Food Safety Program provides education and resources to ensure safe food handling, preparation, and preservation for individuals, families, and food industry professionals.",
        bannerImage:
            "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200&h=600&fit=crop",
        paragraphText: `
            Food safety is critical to protecting health and preventing foodborne illnesses.  
            Penn State Extension’s Food Safety Program offers training and resources 
            for both consumers and food industry workers to ensure the highest standards 
            of hygiene, storage, and preparation.  

            Programs include ServSafe® certification, home food preservation workshops, 
            safe cooking demonstrations, and resources for farms and businesses.  
            Whether you are a restaurant worker, farmer, or home cook, 
            these educational tools provide practical strategies to reduce risks 
            and ensure that food remains safe from farm to table.  

            With science-based training and outreach, Penn State Extension helps 
            communities maintain trust in food systems while promoting health and well-being.
        `,
        buttonText: "Explore Food Safety Resources",
        buttonAction: () => console.log("User clicked Explore Food Safety Resources"),
        reasons: [
            {
                title: "1. Preventing Foodborne Illness",
                description:
                    "Learn proper food handling techniques to reduce the risk of contamination."
            },
            {
                title: "2. ServSafe® Training",
                description:
                    "Earn industry-recognized certification for food service professionals."
            },
            {
                title: "3. Home Food Preservation",
                description:
                    "Gain skills in canning, freezing, and drying foods safely at home."
            },
            {
                title: "4. Farm Food Safety",
                description:
                    "Resources for growers and producers to meet safety standards and regulations."
            },
            {
                title: "5. Food Business Compliance",
                description:
                    "Support for small food businesses in meeting state and federal safety requirements."
            },
            {
                title: "6. Safe Cooking Practices",
                description:
                    "Discover techniques to keep meals healthy and safe for families."
            },
            {
                title: "7. Allergen Awareness",
                description:
                    "Training to reduce risks for individuals with food allergies."
            },
            {
                title: "8. Emergency Preparedness",
                description:
                    "Guidance for handling food safely during power outages or disasters."
            },
            {
                title: "9. Research-Based Education",
                description:
                    "Programs developed using the latest food science and safety standards."
            },
            {
                title: "10. Community Health Impact",
                description:
                    "Food safety education improves public health and strengthens consumer confidence."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default FoodSafety;
