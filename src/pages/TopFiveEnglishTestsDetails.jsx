import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const TopFiveEnglishTestsDetails = () => {
    const bannerProps = {
        title: "Top Five English Language Tests Accepted By Universities Worldwide",
        description:
            "English language proficiency is a requirement for international study. Here are the top tests recognized by universities globally.",
        bannerImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop",
        paragraphText:
            "For students aiming to study abroad, demonstrating English language proficiency is essential. Most universities require one of several standardized tests to assess your ability to study in English. Choosing the right test depends on your study destination, university requirements, and your personal strengths. Here, we explore the top five English language tests widely accepted by universities worldwide, helping you make an informed decision.",
        buttonText: "Learn More",
        buttonAction: () => console.log("User clicked Learn More"),
        reasons: [
            {
                title: "1. IELTS (International English Language Testing System)",
                description:
                    "One of the most popular tests worldwide, IELTS is recognized by universities in the UK, Australia, Canada, and beyond. It evaluates listening, reading, writing, and speaking skills and is offered in both Academic and General Training formats."
            },
            {
                title: "2. TOEFL (Test of English as a Foreign Language)",
                description:
                    "TOEFL is accepted primarily by universities in the USA and Canada. The iBT (internet-based test) measures reading, listening, speaking, and writing skills and is widely used for undergraduate and postgraduate admissions."
            },
            {
                title: "3. PTE Academic (Pearson Test of English)",
                description:
                    "PTE Academic is recognized by thousands of institutions globally, including in Australia, New Zealand, and the UK. It is computer-based and evaluates speaking, writing, reading, and listening skills."
            },
            {
                title: "4. Cambridge English Qualifications",
                description:
                    "Cambridge exams such as C1 Advanced (CAE) and C2 Proficiency (CPE) are widely accepted by universities. These tests focus on practical language skills and assess your ability to communicate effectively in academic settings."
            },
            {
                title: "5. Duolingo English Test",
                description:
                    "An increasingly popular online test, the Duolingo English Test is accepted by hundreds of universities worldwide. It is convenient, quick, and can be taken from home, making it a flexible option for international students."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default TopFiveEnglishTestsDetails;
