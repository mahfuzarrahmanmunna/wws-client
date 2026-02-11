import React from "react";
import f1 from "../assets/LS_1.jpg";
import IELTSBanner from "../component/IELTSBanner";
// import IELTSBanner from "../component/IELTSBanner";

const TenReasonsUKDetails = () => {
    const bannerProps = {
        title: "Ten Reasons Why You Should Study In The UK",
        description:
            "Studying in the UK offers world-class education, cultural experiences, and career opportunities. Discover why students from all over the world choose the UK as their study destination.",
        bannerImage: f1,
        paragraphText:
            "The United Kingdom has been a global leader in education for centuries. From prestigious universities to innovative research programs, studying in the UK can transform your academic and professional future. Students gain exposure to diverse cultures, international networks, and a learning environment that fosters critical thinking, creativity, and independence. Whether you're aiming for undergraduate or postgraduate studies, the UK provides an immersive experience with opportunities that extend beyond the classroom.",
        buttonText: "Apply Now",
        buttonAction: () => console.log("User clicked Apply Now"),
        reasons: [
            {
                title: "1. World-Class Education",
                description:
                    "UK universities consistently rank among the top in the world. With innovative teaching methods, cutting-edge research facilities, and distinguished faculty, students receive a high-quality education recognized globally."
            },
            {
                title: "2. Diverse Course Options",
                description:
                    "From arts to engineering, sciences to business, the UK offers a vast array of programs tailored to your interests and career goals. Many courses also provide practical experience through placements and internships."
            },
            {
                title: "3. Shorter Study Duration",
                description:
                    "Undergraduate programs typically last three years, and many master's programs are just one year. This allows students to achieve their academic goals faster and enter the workforce sooner."
            },
            {
                title: "4. Cultural Diversity & Networking",
                description:
                    "Studying in the UK exposes students to a multicultural environment. You'll meet peers from all over the world, exchange ideas, and build lifelong friendships and professional networks."
            },
            {
                title: "5. Scholarship & Funding Opportunities",
                description:
                    "Many UK universities offer scholarships, grants, and financial support to international students. These opportunities make studying in the UK more accessible and affordable."
            },
            {
                title: "6. Strong Career Prospects",
                description:
                    "A degree from the UK is highly respected by employers worldwide. Students gain practical experience, internships, and career guidance, giving them an edge in the global job market."
            },
            {
                title: "7. Vibrant Campus Life",
                description:
                    "UK universities provide a rich campus experience with clubs, societies, sports, and cultural events. Students enjoy a balanced lifestyle, blending academics with recreation."
            },
            {
                title: "8. English Language Skills",
                description:
                    "Immersing yourself in an English-speaking environment enhances your language skills, boosting confidence in both personal and professional communication."
            },
            {
                title: "9. Travel & Exploration",
                description:
                    "The UK’s central location in Europe allows students to explore neighboring countries easily. Experience historic cities, scenic landscapes, and cultural landmarks during your stay."
            },
            {
                title: "10. Personal Growth & Independence",
                description:
                    "Living abroad encourages independence, adaptability, and resilience. Students learn to manage finances, navigate new environments, and develop life skills that last a lifetime."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default TenReasonsUKDetails;
