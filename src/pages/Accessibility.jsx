import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const Accessibility = () => {
    const bannerProps = {
        title: "Accessibility – WWS Bangladesh",
        description:
            "WWS Bangladesh is committed to providing a website and services that are accessible to everyone, including individuals with disabilities.",
        bannerImage:
            "https://images.unsplash.com/photo-1612832021084-c5a1d9e4e4b1?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, accessibility is a core principle in delivering services and information to all students, parents, and partners. 
            We aim to ensure that our website is usable by people of all abilities, including those with visual, auditory, motor, or cognitive impairments. 

            This page provides guidance on how we implement accessibility standards, what tools and features are available for users, 
            and how to request additional support if needed. Our commitment is to make WWS a platform where every user can fully participate 
            and benefit from our services.
        `,
        buttonText: "Request Accessibility Support",
        buttonAction: () => console.log("User clicked Request Accessibility Support"),
        reasons: [
            {
                title: "1. Keyboard Navigation",
                description:
                    "Our website supports full keyboard navigation, allowing users to access menus, forms, and interactive elements without a mouse."
            },
            {
                title: "2. Screen Reader Compatibility",
                description:
                    "All content is designed to be compatible with screen readers, ensuring visually impaired users can navigate and understand information."
            },
            {
                title: "3. Text Alternatives",
                description:
                    "Images, graphics, and non-text content include descriptive alt text so that all users can comprehend the visual information."
            },
            {
                title: "4. Color Contrast",
                description:
                    "We use high contrast colors and adjustable text sizes to make content readable for users with visual impairments."
            },
            {
                title: "5. Accessible Forms",
                description:
                    "Forms include labels, instructions, and error messages that are accessible and easy to understand for all users."
            },
            {
                title: "6. Video and Multimedia Accessibility",
                description:
                    "All videos provide captions or transcripts, and multimedia content includes accessible controls for playback."
            },
            {
                title: "7. Assistive Technology Support",
                description:
                    "Our platform is tested with common assistive technologies to ensure seamless interaction for users with disabilities."
            },
            {
                title: "8. Feedback Mechanism",
                description:
                    "Users can provide feedback on accessibility issues directly through our support channels to help us improve continuously."
            },
            {
                title: "9. Continuous Improvement",
                description:
                    "Accessibility is an ongoing effort. We regularly review, test, and enhance our platform to meet evolving standards and user needs."
            },
            {
                title: "10. Compliance and Guidelines",
                description:
                    "Our accessibility practices follow WCAG 2.1 standards and other recognized guidelines to ensure inclusivity and legal compliance."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Accessibility;
