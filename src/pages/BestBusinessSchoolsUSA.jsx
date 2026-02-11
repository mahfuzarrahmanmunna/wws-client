import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const BestBusinessSchoolsUSA = () => {
    const bannerProps = {
        title: "Best Business Schools In The USA",
        description:
            "Explore the top business schools in the USA that offer world-class education, networking opportunities, and a pathway to global careers.",
        bannerImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop",
        paragraphText:
            "The United States is home to some of the most prestigious business schools in the world. These institutions provide cutting-edge business education, experiential learning, and unparalleled networking opportunities. From MBA programs to specialized master's degrees, students can gain skills in management, finance, entrepreneurship, and leadership. Graduates from top US business schools often secure high-profile positions in multinational companies or launch successful startups, making the USA an ideal destination for aspiring business professionals.",
        buttonText: "Apply Now",
        buttonAction: () => console.log("User clicked Apply Now"),
        reasons: [
            {
                title: "1. Harvard Business School",
                description:
                    "Known globally for its MBA program, Harvard emphasizes case-study learning, leadership development, and extensive networking opportunities."
            },
            {
                title: "2. Stanford Graduate School of Business",
                description:
                    "Stanford focuses on innovation, entrepreneurship, and technology-driven business solutions, attracting students from diverse backgrounds."
            },
            {
                title: "3. Wharton School, University of Pennsylvania",
                description:
                    "Wharton offers comprehensive programs in finance, analytics, and management, producing globally recognized business leaders."
            },
            {
                title: "4. MIT Sloan School of Management",
                description:
                    "MIT Sloan is renowned for its analytical approach, innovation, and strong focus on entrepreneurship and global business solutions."
            },
            {
                title: "5. Kellogg School of Management, Northwestern University",
                description:
                    "Kellogg emphasizes collaborative leadership, marketing, and strategic management with hands-on learning experiences."
            },
            {
                title: "6. Columbia Business School",
                description:
                    "Located in New York City, Columbia offers strong connections to finance, consulting, and international business opportunities."
            },
            {
                title: "7. Chicago Booth School of Business",
                description:
                    "Known for its rigorous analytical curriculum, Booth produces highly skilled leaders in finance, economics, and management."
            },
            {
                title: "8. Haas School of Business, UC Berkeley",
                description:
                    "Haas combines innovation, social responsibility, and entrepreneurship in its programs, fostering diverse and creative leaders."
            },
            {
                title: "9. Tuck School of Business, Dartmouth",
                description:
                    "Tuck emphasizes small class sizes, close faculty interaction, and leadership development to prepare students for global business challenges."
            },
            {
                title: "10. Yale School of Management",
                description:
                    "Yale integrates business with societal impact, focusing on responsible leadership, ethics, and cross-disciplinary learning."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default BestBusinessSchoolsUSA;
