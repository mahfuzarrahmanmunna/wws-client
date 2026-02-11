import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const About = () => {
    const bannerProps = {
        title: "About WWS Bangladesh",
        description:
            "Learn more about who we are, what we stand for, and how we help students achieve their dreams of studying abroad with confidence.",
        bannerImage:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
        paragraphText: `
            WWS Bangladesh is more than just an education consultancy – we are a trusted partner in your academic and professional journey. 
            With years of experience, our mission is to guide Bangladeshi students towards achieving global opportunities. 
            We believe education opens doors to limitless possibilities, and we work tirelessly to ensure our students succeed in their chosen paths.
            
            Our organization collaborates with leading universities, language institutes, and scholarship providers to give students a 
            competitive advantage in the international education market. From IELTS preparation to visa guidance, we cover every step of the process. 
            Transparency, trust, and excellence are the core values that drive us forward.
        `,
        buttonText: "Contact Us",
        buttonAction: () => console.log("User clicked Contact Us"),
        reasons: [
            {
                title: "1. Our Mission",
                description:
                    "To empower Bangladeshi students with the knowledge, skills, and confidence needed to excel in higher education abroad. We are committed to offering ethical, transparent, and professional guidance at every stage."
            },
            {
                title: "2. Our Vision",
                description:
                    "We envision a future where every talented student from Bangladesh has access to world-class education, irrespective of financial or social barriers."
            },
            {
                title: "3. Why Choose WWS?",
                description:
                    "We combine deep expertise with a student-first approach. Our team of experienced consultants, language trainers, and counselors ensure that you receive personalized advice tailored to your goals."
            },
            {
                title: "4. IELTS & Language Training",
                description:
                    "Our IELTS training program is one of the most comprehensive in Bangladesh. With expert trainers, updated study materials, mock tests, and one-on-one mentoring, we help students achieve their target band scores."
            },
            {
                title: "5. Study Abroad Programs",
                description:
                    "We work with universities across the USA, UK, Canada, Australia, Japan, and other countries. From affordable universities to top-ranked institutions, we help students find the right fit for their career goals."
            },
            {
                title: "6. Scholarship Guidance",
                description:
                    "Many students face financial challenges, and we actively help them identify scholarships, grants, and funding opportunities to make studying abroad more affordable."
            },
            {
                title: "7. Visa & Application Support",
                description:
                    "The visa process can be stressful, but with WWS, students receive complete support – from application form filling to interview preparation. Our high visa success rate reflects our dedication."
            },
            {
                title: "8. Alumni Network",
                description:
                    "Our proud alumni are now studying and working across the world. They act as mentors and guides for new students, creating a strong community of support."
            },
            {
                title: "9. Career & Beyond",
                description:
                    "Studying abroad is just the beginning. We prepare students not only for academic success but also for global careers by offering counseling, workshops, and career development resources."
            },
            {
                title: "10. Commitment to Excellence",
                description:
                    "At WWS Bangladesh, excellence is not just a goal, it’s a culture. Every service we offer, every consultation we provide, and every success story we help create reflects our passion for quality and results."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default About;
