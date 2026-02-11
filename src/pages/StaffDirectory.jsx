import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const StaffDirectory = () => {
    const bannerProps = {
        title: "Staff Directory – WWS Bangladesh",
        description:
            "Meet the passionate professionals behind WWS Bangladesh. Our team is dedicated to guiding students, supporting families, and creating opportunities for global success.",
        bannerImage:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, our strength lies in our people. 
            From student counselors and visa experts to marketing strategists and IT specialists, 
            every member of our team plays a crucial role in helping students achieve their dreams abroad. 
            
            The Staff Directory highlights the individuals who make our mission possible. 
            Each staff member brings unique expertise, dedication, and a passion for education, 
            ensuring that every student receives personalized support and guidance. 
            
            We believe transparency and accessibility are important — that’s why we make it easy 
            for students and families to know the people who guide them through this journey. 
            When you work with WWS, you’re not just a student, you’re part of a community supported 
            by professionals who genuinely care.
        `,
        buttonText: "Meet the Team",
        buttonAction: () => console.log("User clicked Meet the Team"),
        reasons: [
            {
                title: "1. Leadership Team",
                description:
                    "Our directors and senior leaders bring decades of experience in international education, ensuring WWS stays ahead with strategic vision and global partnerships."
            },
            {
                title: "2. Student Counselors",
                description:
                    "Dedicated counselors guide students at every step — from choosing the right university to preparing for visa interviews. They ensure every student gets personalized attention."
            },
            {
                title: "3. Admissions Experts",
                description:
                    "Our admissions team handles applications with precision and care, ensuring documents are complete, deadlines are met, and students have the best chance of acceptance."
            },
            {
                title: "4. Visa Specialists",
                description:
                    "Navigating visas can be complex, but our experts simplify the process. With up-to-date knowledge of immigration rules, they provide accurate and reliable guidance."
            },
            {
                title: "5. Academic Trainers",
                description:
                    "From IELTS preparation to academic counseling, our trainers equip students with the skills they need to succeed in international education."
            },
            {
                title: "6. Marketing & Outreach",
                description:
                    "Our marketing team ensures that students across Bangladesh know about WWS opportunities, scholarships, and success stories through creative campaigns and events."
            },
            {
                title: "7. IT & Digital Team",
                description:
                    "Behind the scenes, our tech team builds digital solutions that make counseling, applications, and communication seamless for students and staff."
            },
            {
                title: "8. Support & Operations",
                description:
                    "Our operations and support staff keep everything running smoothly, from managing appointments to assisting families with inquiries."
            },
            {
                title: "9. Alumni Network",
                description:
                    "Our staff directory also celebrates WWS alumni who now mentor students, share experiences, and support the next generation of achievers."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default StaffDirectory;
