import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const BetterKidCare = () => {
    const bannerProps = {
        title: "Better Kid Care – Professional Development for Child Care Providers",
        description:
            "Better Kid Care provides high-quality professional development and resources for child care providers to support children’s healthy growth, learning, and development.",
        bannerImage:
            "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&h=600&fit=crop",
        paragraphText: `
            Better Kid Care, offered through Penn State Extension, is a leader in providing 
            professional development for early childhood and school-age care providers. 
            Through online modules and resources, caregivers gain valuable knowledge to 
            create safe, engaging, and nurturing environments for children.  

            The program covers essential topics like child development, health and safety, 
            family engagement, inclusion, and program quality. These resources are designed 
            to meet professional growth needs while supporting compliance with state and 
            national standards.  

            With a commitment to accessible, affordable, and practical training, Better Kid Care 
            helps child care providers strengthen their skills, build confidence, and make 
            a lasting impact on the lives of children and families.
        `,
        buttonText: "Explore Better Kid Care",
        buttonAction: () => console.log("User clicked Explore Better Kid Care"),
        reasons: [
            {
                title: "1. Professional Development",
                description:
                    "Access high-quality training modules designed for child care professionals at all levels."
            },
            {
                title: "2. Online Learning",
                description:
                    "Flexible, self-paced modules available anytime to fit providers’ busy schedules."
            },
            {
                title: "3. Child Development Focus",
                description:
                    "Gain knowledge to support children’s cognitive, emotional, and physical growth."
            },
            {
                title: "4. Health & Safety Training",
                description:
                    "Ensure safe environments by learning about nutrition, wellness, and emergency preparedness."
            },
            {
                title: "5. Inclusion & Diversity",
                description:
                    "Resources emphasize welcoming and supporting children of all backgrounds and abilities."
            },
            {
                title: "6. Family Engagement",
                description:
                    "Learn strategies to strengthen relationships with families and communities."
            },
            {
                title: "7. Accreditation Support",
                description:
                    "Modules align with professional standards, helping providers meet certification and licensing requirements."
            },
            {
                title: "8. Affordable Access",
                description:
                    "Training is low-cost or free, making it accessible to providers everywhere."
            },
            {
                title: "9. Research-Based",
                description:
                    "Developed with Penn State expertise, ensuring accuracy, relevance, and effectiveness."
            },
            {
                title: "10. Lifelong Impact",
                description:
                    "Providers leave with knowledge and tools that directly improve children’s learning and well-being."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default BetterKidCare;
