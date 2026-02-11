import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const HelpCenter = () => {
    const bannerProps = {
        title: "Help Center – WWS Bangladesh",
        description:
            "Find answers, guidance, and support for all your queries about study abroad, admissions, visa processes, and more. Our Help Center is here to assist you every step of the way.",
        bannerImage:
            "https://images.unsplash.com/photo-1581091215363-11b7b6e2a0f5?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, we understand that navigating international education can be complex. 
            That’s why our Help Center is designed to provide comprehensive support to students, 
            parents, and partners. 

            From frequently asked questions to one-on-one guidance, we ensure that you receive 
            timely and accurate assistance. Our team of experts is dedicated to resolving your queries, 
            whether they relate to university selection, application procedures, visa documentation, 
            scholarships, or test preparation. 

            We aim to make your study abroad journey as smooth and stress-free as possible, 
            providing resources and guidance every step of the way.
        `,
        buttonText: "Visit Help Center",
        buttonAction: () => console.log("User clicked Visit Help Center"),
        reasons: [
            {
                title: "1. FAQs and Quick Guides",
                description:
                    "Access detailed answers to the most common questions about studying abroad, admissions, and visas."
            },
            {
                title: "2. Application Support",
                description:
                    "Get step-by-step guidance for university applications, document submission, and deadlines."
            },
            {
                title: "3. Visa Assistance",
                description:
                    "Our experts provide detailed advice on visa requirements, interview preparation, and application tracking."
            },
            {
                title: "4. Scholarship and Financial Guidance",
                description:
                    "Learn about available scholarships, grants, and funding options to make your study abroad journey affordable."
            },
            {
                title: "5. Test Preparation Resources",
                description:
                    "Find materials, tips, and guidance for IELTS, TOEFL, GRE, GMAT, and other international tests."
            },
            {
                title: "6. Personalized Counseling",
                description:
                    "Schedule one-on-one sessions with our counselors to get tailored advice on universities, courses, and career pathways."
            },
            {
                title: "7. Technical Support",
                description:
                    "If you face issues with online forms, portals, or document uploads, our technical team is ready to help."
            },
            {
                title: "8. Community and Peer Support",
                description:
                    "Join our student community for guidance, tips, and experiences shared by peers who have successfully studied abroad."
            },
            {
                title: "9. Feedback and Suggestions",
                description:
                    "We value your input. Share feedback or suggestions so we can improve our services and resources."
            },
            {
                title: "10. Continuous Updates",
                description:
                    "Stay informed with the latest updates on admission deadlines, visa regulations, test schedules, and new resources."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default HelpCenter;
