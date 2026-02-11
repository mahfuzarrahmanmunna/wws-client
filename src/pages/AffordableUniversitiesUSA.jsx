import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const AffordableUniversitiesUSA = () => {
    const bannerProps = {
        title: "Guide To Affordable Universities In The USA For International Students",
        description:
            "Discover budget-friendly universities in the USA that offer quality education without breaking the bank for international students.",
        bannerImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
        paragraphText:
            "Studying in the USA can be expensive, but there are many universities that provide high-quality education at affordable costs for international students. These institutions offer scholarships, assistantships, and flexible tuition options to help manage expenses. This guide highlights the top affordable universities, admission tips, and strategies to maximize your budget while enjoying the rich academic and cultural experiences that the USA offers. By carefully selecting universities and programs, students can pursue their education without compromising on quality.",
        buttonText: "Explore Universities",
        buttonAction: () => console.log("User clicked Explore Universities"),
        reasons: [
            {
                title: "1. University of North Carolina at Chapel Hill",
                description:
                    "Offers excellent academic programs and research opportunities at a reasonable tuition rate, with scholarships available for international students."
            },
            {
                title: "2. University of Florida",
                description:
                    "Provides strong programs in engineering, business, and sciences with affordable tuition and multiple scholarship options."
            },
            {
                title: "3. University of Texas at Austin",
                description:
                    "Recognized for quality education in business, technology, and arts, with financial aid opportunities for international students."
            },
            {
                title: "4. Iowa State University",
                description:
                    "Known for agricultural, engineering, and science programs, Iowa State offers competitive tuition rates and work-study options."
            },
            {
                title: "5. University of Georgia",
                description:
                    "Offers diverse programs and affordable tuition, with support services to help international students integrate and succeed."
            },
            {
                title: "6. Arizona State University",
                description:
                    "Flexible learning options and reasonably priced programs with numerous scholarships for international students."
            },
            {
                title: "7. University of Wisconsin-Madison",
                description:
                    "High-quality education in STEM, business, and arts at a cost-effective rate, with assistantships available for graduate students."
            },
            {
                title: "8. University of Minnesota",
                description:
                    "Provides affordable tuition with strong programs in engineering, business, and public health, including opportunities for research."
            },
            {
                title: "9. University of Illinois at Urbana-Champaign",
                description:
                    "Affordable education with strong engineering, business, and computer science programs, plus scholarship options for international students."
            },
            {
                title: "10. San Diego State University",
                description:
                    "Offers quality education in diverse fields at lower tuition compared to many US universities, with financial aid options for global students."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default AffordableUniversitiesUSA;
