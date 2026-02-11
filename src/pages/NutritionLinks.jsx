import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const NutritionLinks = () => {
    const bannerProps = {
        title: "Penn State Extension Nutrition Links Program",
        description:
            "Nutrition Links helps limited-resource families and individuals make healthier food choices, stretch their food budgets, and live healthier lives through hands-on education.",
        bannerImage:
            "https://images.unsplash.com/photo-1506808547685-e2ba962ded58?w=1200&h=600&fit=crop",
        paragraphText: `
            Nutrition Links is an outreach program designed to improve the health and well-being 
            of individuals and families with limited resources. By offering free, research-based 
            nutrition education, the program empowers participants to make healthier food choices, 
            manage food budgets, and reduce food insecurity.  

            Classes cover topics like healthy meal planning, food safety, smart shopping, and 
            increasing fruit and vegetable intake. Lessons are interactive, practical, and 
            culturally relevant, ensuring that families can apply what they learn in their daily lives.  

            With the support of Penn State Extension educators and community partners, Nutrition Links 
            helps thousands of Pennsylvanians develop lifelong skills for healthier living, while also 
            addressing broader issues of food security and public health.
        `,
        buttonText: "Discover Nutrition Links",
        buttonAction: () => console.log("User clicked Discover Nutrition Links"),
        reasons: [
            {
                title: "1. Healthy Eating Education",
                description:
                    "Hands-on lessons teach families how to plan and prepare nutritious meals on a budget."
            },
            {
                title: "2. Budget-Friendly Cooking",
                description:
                    "Participants learn how to shop smart, reduce food waste, and stretch grocery dollars."
            },
            {
                title: "3. Food Safety Skills",
                description:
                    "Training on proper food storage, preparation, and hygiene reduces the risk of illness."
            },
            {
                title: "4. Child and Family Health",
                description:
                    "Programs encourage healthy habits for children, improving growth and development."
            },
            {
                title: "5. Reducing Food Insecurity",
                description:
                    "Nutrition Links supports families in making the most of available food resources."
            },
            {
                title: "6. Interactive Learning",
                description:
                    "Cooking demonstrations, grocery store tours, and practical activities make learning engaging."
            },
            {
                title: "7. Community Partnerships",
                description:
                    "Collaboration with schools, food banks, and health agencies expands program reach."
            },
            {
                title: "8. Research-Based Guidance",
                description:
                    "Lessons are grounded in Penn State Extension’s nutrition science expertise."
            },
            {
                title: "9. Culturally Relevant Programs",
                description:
                    "Content is tailored to meet the needs of diverse families and communities."
            },
            {
                title: "10. Lifelong Healthy Habits",
                description:
                    "Participants gain skills that support long-term health and wellness."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default NutritionLinks;
