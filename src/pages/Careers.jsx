import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const Careers = () => {
    const bannerProps = {
        title: "Careers at WWS Bangladesh",
        description:
            "Join a purpose-driven organization that empowers Bangladeshi students to achieve their global ambitions. At WWS Bangladesh, we don’t just offer jobs — we build careers, nurture growth, and create opportunities for you to make a lasting impact.",
        bannerImage:
            "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, our mission is to empower students with the knowledge, skills, 
            and guidance they need to succeed in global education and career opportunities. 
            To achieve this, we rely on passionate, talented, and dedicated professionals 
            who share our vision of making international education accessible, transparent, 
            and impactful for students across Bangladesh. 

            Working with us means more than just having a job — it means becoming part of a 
            dynamic team that values integrity, innovation, and student success. 
            Whether you are an experienced professional or just starting your career, 
            WWS offers an environment where you can grow, contribute, and thrive.
        `,
        buttonText: "View Open Positions",
        buttonAction: () => console.log("User clicked View Open Positions"),
        reasons: [
            {
                title: "1. A Mission with Meaning",
                description:
                    "At WWS, you’ll be part of a mission-driven team helping students achieve life-changing opportunities abroad. Every day, your work directly contributes to shaping brighter futures."
            },
            {
                title: "2. Career Growth and Learning",
                description:
                    "We invest in our people through training, mentorship, and international exposure. From professional certifications to leadership development, we ensure you grow with us."
            },
            {
                title: "3. Diverse Career Paths",
                description:
                    "Our roles span counseling, admissions, marketing, IT, operations, and more. Whether you’re passionate about education, technology, or management, there’s a place for you at WWS."
            },
            {
                title: "4. Work-Life Balance",
                description:
                    "We believe productivity comes from balance. Flexible schedules, supportive teams, and a positive environment ensure you thrive both at work and in life."
            },
            {
                title: "5. Recognition and Rewards",
                description:
                    "We celebrate achievements, big or small. From performance bonuses to appreciation programs, your contributions are always recognized and rewarded."
            },
            {
                title: "6. Inclusive Culture",
                description:
                    "At WWS, diversity is strength. We welcome voices from all backgrounds and encourage collaboration across cultures, ensuring everyone feels valued."
            },
            {
                title: "7. Open Positions – Join Our Team",
                description:
                    "We are hiring passionate professionals for various roles including Student Counselors, Visa Specialists, Digital Marketing Executives, and IT Developers. Explore our openings and take your career global with WWS."
            },
            {
                title: "8. Future Opportunities",
                description:
                    "As WWS grows, so do opportunities. We provide clear career pathways and leadership development programs to help you achieve long-term success."
            },
            {
                title: "9. Our Promise",
                description:
                    "When you join WWS, you join a family. We promise transparency, respect, and an empowering environment where your ideas matter and your career flourishes."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Careers;
