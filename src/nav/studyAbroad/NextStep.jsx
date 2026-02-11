import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/nextStep.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/nextStep.jpg";
import counsellorImg from "../../assets/graduation.jpg";
import ContactHome from "../../component/ContactHome";

const NextStep = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Next Step"],
        title: "Take the Next Step in Your Study Abroad Journey",
        description:
            "From researching universities to submitting applications and preparing for life abroad, we guide you through every stage with actionable steps, personalised advice, and practical tools.",
        buttonText: "Start Planning",
        buttonAction: () => console.log("Planning started"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            `Studying abroad is a life-changing experience, but it requires careful planning and preparation. Each stage of the journey, from selecting the right university to arranging travel and accommodation, plays a crucial role in ensuring a smooth transition. Many students struggle because they underestimate the importance of organised planning. 
    
    By following a step-by-step roadmap, you can reduce stress, avoid mistakes, and focus on what matters most – your education, personal growth, and cultural experiences. Our guide includes real-life tips, checklists, and examples to help you confidently move forward.`,
        image1: guideImg,
        image2: stepImg,
        image1Alt: "Students preparing for abroad journey",
        image2Alt: "Step-by-step study plan",
        galleryTitle: "Your Roadmap to Success",
        gallerySubtitle: "Detailed guidance for every stage",
        cardTitle: "Create an account to track progress",
        cardDescription:
            "Monitor deadlines, checklists, scholarship updates, and application milestones all in one place. Personalised recommendations ensure you never miss an opportunity.",
        buttonText: "Get Free Counselling",
        buttonAction: () => console.log("Account creation clicked"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk to a Mentor for Free",
        description:
            "Book a free session with our experienced counsellors. Get personalised advice on university selection, application strategy, scholarships, visa guidance, and settling in your host country. Make informed decisions before you leave.",
        buttonText: "Book Free Session",
        buttonAction: () => console.log("Session booked"),
        image: counsellorImg,
        imageAlt: "Counsellor assisting student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Before you submit applications, it’s important to understand what each university expects. Missing documents or incomplete forms can delay admission or cause rejection.",
        introText2:
            "Preparation is the key. Collect academic records, test scores, recommendation letters, and personal statements ahead of time. Understand deadlines, scholarship criteria, and visa requirements.",
        mainHeading: "Explore your options",
        mainDescription:
            "Thinking about studying abroad? At World Wise Scholars, you’ll begin by discovering many destinations, universities and programmes that align with your aspirations. Whether you’re aiming for a vibrant city campus or a serene campus environment, we’re here to help you map out your path.",
        sectionHeading: "Assess eligibility & prerequisites",
        sectionText1:
            "Once the dream destination is clear, next you’ll check the critical entry requirements: academic transcripts, language tests, financial readiness and any programme-specific criteria. No worries at all. We’ll be guiding you through each checklist so that you’re fully prepared.",
        sectionText2:
            "Prepare strong statements of purpose and tailor your application essays to each university. Review eligibility requirements and ensure all forms are complete before submission.",
        buttonText: "Download Full Preparation Guide",
        buttonAction: () => console.log("Preparation guide downloaded"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Prepare key documents",
        globalPerspectiveText:
            "This stage is where the heavy lifting begins.For example: gathering transcripts, writing a strong personal statement, securing recommendation letters, and organising your finances and visa documents. We’ll support you every step of the way. Because we always believe that proper preparation builds confidence and success.",
        careerHeading: "Submit application",
        careerParagraphs: [
            "With your documents in place, it’s time to press submit. We’ll help ensure your application is complete, free of errors and aligned with deadlines. Then you wait for that exciting offer,",
            "Build a strong resume highlighting skills, certifications, and relevant experiences.",
        ],
        migrationHeading: "Visa, Immigration, and Legal Compliance",
        migrationParagraphs: [
            "Understand visa categories, requirements, and timelines. Submit applications on time and track their progress.",
            "Ensure you have all necessary documentation ready, including financial proofs, admission letters, and health insurance.",
            "Keep multiple copies of important documents both physically and digitally.",
        ],
        personalHeading: "Personal Development and Growth",
        personalParagraphs: [
            "Living abroad builds independence, self-reliance, and problem-solving skills.",
            "Learn to manage time, finances, and responsibilities while balancing academics.",
            "Engage in campus activities, societies, and networking events to broaden your horizons.",
        ],
        otherHeading: "Additional Tips for Success",
        otherIntroText:
            "Being well-prepared beyond academics is equally important. These tips will help you settle faster and enjoy your experience:",
        subSections: [
            {
                heading: "Attend Webinars and Workshops",
                paragraphs: [
                    "Join information sessions organised by universities, alumni, and educational platforms. Clarify doubts and learn insider tips.",
                ],
            },
            {
                heading: "Network with Alumni and Current Students",
                paragraphs: [
                    "Connect with students who have studied abroad. Their experience will help you avoid common pitfalls and discover opportunities you might not know about.",
                ],
            },
            {
                heading: "Cultural Preparation",
                paragraphs: [
                    "Read about the host country’s culture, etiquette, and lifestyle. Understanding cultural nuances reduces adjustment stress and fosters positive social interactions.",
                ],
            },
            {
                heading: "Health & Safety",
                paragraphs: [
                    "Schedule medical checkups and vaccinations as per destination requirements.",
                    "Prepare a first-aid kit, insurance, and emergency contacts for peace of mind.",
                ],
            },
        ],
        finalHeading: "Secure offer & plan logistics",
        finalText:
            "Congratulations! When your offer letter arrives, you’ll begin planning the final logistics: accepting the offer, arranging accommodation, planning travel, and preparing for your new academic journey abroad. Your adventure is about to begin!",
        buttonText: "Start Your Journey",
        buttonAction: () => console.log("Next step started"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Next Step FAQs",
        qaData: [
            {
                id: 1,
                question: "When should I start my applications?",
                answer:
                    "Ideally, 8–12 months before your intended intake. This gives ample time for exams, application review, scholarships, and visa processing.",
            },
            {
                id: 2,
                question: "Do I need a counsellor or agent?",
                answer:
                    "Not always, but a mentor can save time, prevent mistakes, and guide you through complex requirements.",
            },
            {
                id: 3,
                question: "How do I keep track of deadlines?",
                answer:
                    "Use a planner or our dashboard to mark application dates, scholarship deadlines, and visa submission timelines.",
            },
            {
                id: 4,
                question: "What if I miss a deadline?",
                answer:
                    "Missing deadlines can lead to deferrals or missed opportunities. Stay organised, start early, and set reminders.",
            },
            {
                id: 5,
                question: "How do I prepare for cultural differences?",
                answer:
                    "Read guides, watch videos, and talk to alumni about local customs, communication styles, and social etiquette.",
            },
        ],
    };

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <ContactHome></ContactHome>
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default NextStep;
