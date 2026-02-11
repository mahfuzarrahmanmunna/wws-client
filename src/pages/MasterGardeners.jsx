import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const MasterGardeners = () => {
    const bannerProps = {
        title: "Penn State Extension Master Gardeners Program",
        description:
            "The Penn State Master Gardeners Program trains volunteers to share their knowledge of horticulture, environmental stewardship, and sustainable gardening with communities across Pennsylvania.",
        bannerImage:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&h=600&fit=crop",
        paragraphText: `
            The Penn State Master Gardeners Program equips volunteers with the knowledge and 
            skills needed to promote best practices in gardening, landscaping, and 
            environmental stewardship.  

            Participants receive in-depth training in horticulture, botany, pest management, 
            pollinator health, soil science, and more. Once certified, Master Gardeners 
            extend research-based education to the public by leading workshops, answering 
            gardening questions, and supporting community projects.  

            From creating pollinator-friendly habitats to advising on sustainable lawn care, 
            Master Gardeners make a meaningful difference by helping individuals and 
            communities thrive in harmony with nature.
        `,
        buttonText: "Learn More About Master Gardeners",
        buttonAction: () => console.log("User clicked Learn More About Master Gardeners"),
        reasons: [
            {
                title: "1. Volunteer Training",
                description:
                    "Receive expert-led education in horticulture and environmental science."
            },
            {
                title: "2. Community Outreach",
                description:
                    "Share knowledge through workshops, plant clinics, and local events."
            },
            {
                title: "3. Sustainable Practices",
                description:
                    "Learn and promote eco-friendly gardening and landscaping methods."
            },
            {
                title: "4. Pollinator Support",
                description:
                    "Help protect bees, butterflies, and other pollinators through habitat creation."
            },
            {
                title: "5. Soil & Plant Health",
                description:
                    "Gain expertise in soil science, composting, and plant disease prevention."
            },
            {
                title: "6. Environmental Stewardship",
                description:
                    "Encourage practices that conserve water, protect wildlife, and reduce pollution."
            },
            {
                title: "7. Networking & Learning",
                description:
                    "Join a statewide network of volunteers with shared passion for gardening."
            },
            {
                title: "8. Research-Based Knowledge",
                description:
                    "Benefit from Penn State Extension’s science-backed horticultural expertise."
            },
            {
                title: "9. Youth Education",
                description:
                    "Inspire the next generation through school and youth gardening programs."
            },
            {
                title: "10. Lifelong Impact",
                description:
                    "Master Gardeners help cultivate healthier, greener, and more connected communities."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default MasterGardeners;
