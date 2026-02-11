import React from "react";
import IELTSBanner from "../component/IELTSBanner";
import icon1 from "../assets/LS_1.jpg"; // replace with actual icon path

const Programs = () => {
    const bannerProps = {
        title: "PROGRAMS",
        description:
            "Comprehensive study abroad programs tailored to your academic goals and career aspirations.",
        bannerImage: icon1, // You can also use a full banner image if needed
        paragraphText: `
            Our programs are designed to provide students with international exposure, 
            academic excellence, and career opportunities. Each program is structured to 
            help you gain practical skills, global perspectives, and personal growth.  

            From undergraduate pathways to specialized master’s programs, we collaborate 
            with top universities worldwide to ensure students receive the best guidance, 
            mentorship, and support throughout their educational journey.  

            With carefully curated curricula, hands-on experiences, and dedicated counseling, 
            our programs aim to prepare students for a successful academic and professional future.
        `,
        buttonText: "Explore Programs",
        buttonAction: () => console.log("User clicked Explore Programs"),
        reasons: [
            {
                title: "1. Undergraduate Programs",
                description:
                    "Tailored for high school graduates seeking international undergraduate education with scholarships and guidance."
            },
            {
                title: "2. Graduate & Masters Programs",
                description:
                    "Advanced programs for career-oriented students seeking specialized degrees and research opportunities."
            },
            {
                title: "3. Exchange Programs",
                description:
                    "Short-term exchange programs that provide cultural immersion and international exposure."
            },
            {
                title: "4. Summer & Winter Schools",
                description:
                    "Seasonal programs designed to enhance skills, knowledge, and experience in global contexts."
            },
            {
                title: "5. Professional Development Programs",
                description:
                    "Courses and certifications to boost career readiness and employability in global markets."
            },
            {
                title: "6. Customized Study Plans",
                description:
                    "Individualized academic plans aligned with students’ career goals and personal growth objectives."
            },
            {
                title: "7. Internship Opportunities",
                description:
                    "Hands-on industry experience integrated into selected programs for practical learning."
            },
            {
                title: "8. Language Preparation Courses",
                description:
                    "Intensive language programs to prepare students for academic success abroad."
            },
            {
                title: "9. Scholarship Guidance",
                description:
                    "Expert advice and assistance in applying for scholarships to reduce financial barriers."
            },
            {
                title: "10. Global Network Access",
                description:
                    "Students gain access to international networks, alumni communities, and academic partnerships."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Programs;
