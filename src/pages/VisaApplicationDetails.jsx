import React from "react";
import f3 from "../assets/LS_2.jpg"; // make sure your image path is correct
import IELTSBanner from "../component/IELTSBanner";
// import IELTSBanner from "../components/IELTSBanner";

const VisaApplicationDetails = () => {
    const bannerProps = {
        title: "Visa Application Assistance",
        description:
            "Applying for visas can be challenging, but our team ensures you have access to accurate information for a smoother process.",
        bannerImage: f3,
        paragraphText:
            "Obtaining a student visa is often one of the most stressful parts of preparing for your study-abroad journey — but it doesn’t have to be. At WWS, our dedicated visa assistance team walks you through every single step with clarity and care. We take time to understand your study goals, personal background, and destination requirements so that the advice we provide is 100% tailored to you. From choosing the correct visa category to compiling error-free documentation and preparing you for interviews, our approach ensures your application meets embassy standards from day one. With our guidance, you can approach your visa process with confidence, knowing that every detail is handled by professionals who understand global student immigration requirements inside and out.",
        buttonText: "Learn More",
        buttonAction: () => console.log("User clicked Learn More"),
        reasons: [
            {
                title: "1. Comprehensive Expert Guidance",
                description:
                    "Our consultants analyze your academic history, destination country, and study plans to recommend the best visa options. We provide clear step-by-step instructions, so you always know exactly what to do next. By explaining embassy procedures in simple language, we help you avoid confusion and delays."
            },
            {
                title: "2. End-to-End Document Support",
                description:
                    "Visa success depends heavily on presenting a complete, accurate, and well-organized file. We assist you in collecting all required documents — from admission letters and financial proofs to medical certificates and travel insurance. Every file is reviewed carefully to ensure there are no missing pages, incorrect formats, or inconsistencies that might raise concerns with visa officers."
            },
            {
                title: "3. Latest Policy & Requirement Updates",
                description:
                    "Embassy rules can change frequently, and relying on outdated information can cost you valuable time. Our team continuously tracks policy changes, new forms, and updated processing times to keep you informed. We share practical tips and alerts so you never miss an important update."
            },
            {
                title: "4. Personalized Interview Coaching",
                description:
                    "For countries that require interviews, we provide one-on-one coaching to help you feel confident and prepared. We discuss common interview questions, rehearse clear answers, and teach you how to present supporting evidence effectively. Mock interviews simulate real scenarios, so you can walk in with ease and assurance."
            },
            {
                title: "5. Problem-Solving & Special Cases",
                description:
                    "Every student’s circumstances are unique, and sometimes applications include special considerations such as sponsorship, gap years, or part-time work history. Our advisors have extensive experience handling complex cases. They can prepare appropriate explanations and ensure all supporting documents are presented in a way that satisfies embassy expectations."
            },
            {
                title: "6. Stress-Free Experience",
                description:
                    "Managing deadlines, forms, fees, and appointments can quickly become overwhelming. Our service is designed to remove this pressure. We track timelines, send reminders, and handle the details so you can focus on preparing for your academic adventure abroad instead of worrying about paperwork."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default VisaApplicationDetails;
