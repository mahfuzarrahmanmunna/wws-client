import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const WebsiteFeedback = () => {
    const bannerProps = {
        title: "Website Feedback – WWS Bangladesh",
        description:
            "We value your feedback! Help us improve our website, services, and content by sharing your thoughts, suggestions, or concerns.",
        bannerImage:
            "https://images.unsplash.com/photo-1581091012184-1d9f65f6a21e?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, we continuously strive to enhance your online experience. 
            Your feedback helps us identify areas for improvement, optimize our services, 
            and provide the best possible user experience for students, parents, and partners. 

            Whether it’s about navigation, content clarity, page load speed, or accessibility, 
            we want to hear from you. Our dedicated team carefully reviews every suggestion 
            and implements changes to ensure the website meets your needs efficiently.
        `,
        buttonText: "Submit Feedback",
        buttonAction: () => console.log("User clicked Submit Feedback"),
        reasons: [
            {
                title: "1. Website Navigation",
                description:
                    "Tell us if you find it easy to navigate the website and locate the information you need."
            },
            {
                title: "2. Content Clarity",
                description:
                    "Share your thoughts on whether the content is clear, informative, and helpful."
            },
            {
                title: "3. Page Load Speed",
                description:
                    "Provide feedback if pages are slow to load or if certain sections take time to appear."
            },
            {
                title: "4. Visual Design",
                description:
                    "Comment on the website’s look and feel, including layout, colors, fonts, and responsiveness."
            },
            {
                title: "5. Accessibility",
                description:
                    "Let us know if the website is accessible for all users, including those with disabilities."
            },
            {
                title: "6. Functional Features",
                description:
                    "Report any broken links, buttons, forms, or other technical issues you encounter."
            },
            {
                title: "7. Suggest New Features",
                description:
                    "Have ideas to make the website better? Share suggestions for new tools, pages, or resources."
            },
            {
                title: "8. User Experience",
                description:
                    "Tell us how intuitive and user-friendly the website feels during your visit."
            },
            {
                title: "9. Support and Help Resources",
                description:
                    "Provide feedback on the effectiveness and availability of support materials and help pages."
            },
            {
                title: "10. Overall Satisfaction",
                description:
                    "Rate your overall experience on the website and any recommendations to enhance it."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default WebsiteFeedback;
