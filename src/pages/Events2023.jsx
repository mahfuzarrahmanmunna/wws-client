import React from "react";
import IELTSBanner from "../component/IELTSBanner";
import icon4 from "../assets/LS_1.jpg"; 

const Events2023 = () => {
    const bannerProps = {
        title: "EVENTS",
        description:
            "Join our educational events, webinars, and university fairs to explore opportunities.",
        bannerImage: icon4, // Replace with a proper banner image if needed
        paragraphText: `
            At WWS Bangladesh, we organize a variety of educational events to help students explore 
            global opportunities and make informed decisions about their higher education journey.  

            Our events include webinars, workshops, university fairs, and career counseling sessions. 
            Students gain insights directly from university representatives, industry experts, and alumni. 
            These gatherings provide an interactive platform to ask questions, network, and discover pathways 
            that align with their academic and professional goals.  

            By participating in WWS events, students can explore scholarship opportunities, understand admission 
            requirements, and stay updated with the latest trends in global education. Our events are designed 
            to equip students with the knowledge, skills, and connections needed to succeed internationally.
        `,
        buttonText: "Explore Upcoming Events",
        buttonAction: () => console.log("User clicked Explore Upcoming Events"),
        reasons: [
            {
                title: "1. University Fairs",
                description:
                    "Meet representatives from top universities to learn about programs, admissions, and campus life."
            },
            {
                title: "2. Webinars",
                description:
                    "Attend online sessions covering study abroad topics, test preparation, and career guidance."
            },
            {
                title: "3. Workshops",
                description:
                    "Participate in interactive workshops on essay writing, application strategy, and interview skills."
            },
            {
                title: "4. Networking Opportunities",
                description:
                    "Connect with peers, alumni, and experts to build valuable relationships for future endeavors."
            },
            {
                title: "5. Scholarship Guidance",
                description:
                    "Get insights into available scholarships, application tips, and eligibility criteria."
            },
            {
                title: "6. Expert Panels",
                description:
                    "Hear directly from industry professionals and educational experts about trends and best practices."
            },
            {
                title: "7. Career Insights",
                description:
                    "Understand potential career paths and global opportunities in your field of interest."
            },
            {
                title: "8. Resource Materials",
                description:
                    "Receive study guides, event recordings, and informative materials to support your preparation."
            },
            {
                title: "9. Personalized Q&A",
                description:
                    "Ask specific questions and get one-on-one guidance from experienced counselors during events."
            },
            {
                title: "10. Continuous Updates",
                description:
                    "Stay informed about upcoming events and sessions to make timely decisions for your education abroad."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Events2023;
