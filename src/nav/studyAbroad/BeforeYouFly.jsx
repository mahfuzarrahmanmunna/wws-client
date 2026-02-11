import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import flyImg from "../../assets/BBfly.jpg";
import luggageImg from "../../assets/BBfly.jpg";
import docImg from "../../assets/graduation.jpg";
import mentorImg from "../../assets/graduation.jpg";
import ContactHome from "../../component/ContactHome";

const BeforeYouFly = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Before You Fly"],
        title: "Before You Fly – Prepare for a Confident Start Abroad",
        description:
            "Your bags are packed, but there’s more to getting ready than just clothes. Master the final checklist before boarding your plane.",
        buttonText: "Get Pre-Departure Guide",
        buttonAction: () => console.log("Pre-departure clicked"),
        image: flyImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText: `Travelling abroad for studies is exciting, but careful planning ensures a smooth landing. Before leaving home you must prepare documents, arrange finances, understand health & travel rules, and set up essentials for your new life.
    
    Pre-departure preparation isn’t only about flights and luggage. It’s also about emotional readiness and cultural awareness. The first few weeks overseas decide how quickly you adapt. Knowing what to expect helps you enjoy opportunities rather than stress about paperwork.
    
    Whether it’s creating copies of your academic records, preparing an international bank account, or reading about social etiquette in your host country — each step counts toward a confident beginning.`,
        image1: luggageImg,
        image2: docImg,
        image1Alt: "Student packing suitcase",
        image2Alt: "Travel documents",
        galleryTitle: "Pre-Departure Essentials",
        gallerySubtitle: "Everything you need before take-off",
        cardTitle: "Plan your move like a pro",
        cardDescription:
            "Sign up for our pre-departure tracker to monitor packing, documents, health insurance, housing, and travel updates in one place.",
        buttonText: "Join Tracker",
        buttonAction: () => console.log("Tracker joined"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Get Expert Pre-Departure Support",
        description:
            "Our counsellors provide detailed sessions about airport formalities, accommodation check-in, local SIM cards, banking, part-time jobs, and cultural tips. Book a slot to get personalised help.",
        buttonText: "Book Guidance",
        buttonAction: () => console.log("Guidance booked"),
        image: mentorImg,
        imageAlt: "Mentor explaining checklist",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1: `Preparing well can save you from unexpected hurdles. From visas to health coverage, every item on your checklist gives peace of mind.`,
        introText2: `Use these insights to stay organised before you board:`,
        mainHeading: "Major Areas to Cover",
        mainDescription:
            "Below are the most important things international students should finalise before flying:",
        sectionHeading: "Documents & Legalities",
        sectionText1:
            "Keep your passport, visa letter, admission confirmation, and vaccination proofs in a waterproof folder. Scan and store them in cloud drives for backup.",
        sectionText2:
            "Carry extra passport photos, notarised academic transcripts, and proof of accommodation. They might be required at immigration or university offices.",
        buttonText: "Download Full Checklist",
        buttonAction: () => console.log("Checklist downloaded"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Extended Pre-Departure Tips",
        globalPerspectiveText:
            "Adapting to a new country is easier if you prepare emotionally and academically. Read about social norms, grading systems, and safety rules of your destination.",
        careerHeading: "Money & Banking",
        careerParagraphs: [
            "Open an international student account if possible. Carry some local currency for first-day expenses like taxis, meals, and SIM cards.",
            "Check card transaction charges. Inform your home bank you’ll be abroad to avoid blocks on your account.",
            "Research scholarships, assistantships, or campus jobs early so you don’t worry about finances after arrival.",
        ],
        migrationHeading: "Accommodation & Transportation",
        migrationParagraphs: [
            "Confirm your housing contract and know how to reach your room from the airport. Keep landlord or hostel numbers handy.",
            "Learn public transport routes, ticketing apps, or student travel cards before departure so you save time and money later.",
        ],
        personalHeading: "Health & Safety",
        personalParagraphs: [
            "Buy health insurance covering doctor visits, accidents, and emergency evacuation.",
            "Pack a mini first-aid kit with medicines for colds, allergies, or headaches.",
            "Save emergency contacts of local police, embassy, and nearby hospitals.",
        ],
        otherHeading: "Cultural & Lifestyle",
        otherIntroText:
            "Understanding your host culture keeps you open-minded and reduces shock:",
        subSections: [
            {
                heading: "Communication",
                paragraphs: [
                    "Learn polite greetings, local gestures, and key phrases in the regional language.",
                    "Install translation apps but try to practise daily conversations yourself.",
                ],
            },
            {
                heading: "Food & Shopping",
                paragraphs: [
                    "Explore your host country’s grocery chains and markets. Bring some snacks or spices from home for comfort meals.",
                ],
            },
            {
                heading: "Weather & Clothing",
                paragraphs: [
                    "Check the seasonal temperature and pack layers accordingly. Buy heavy jackets or boots only after reaching (they’re often cheaper locally).",
                ],
            },
        ],
        finalHeading: "Step on the Plane Ready",
        finalText:
            "Leaving your country to pursue education abroad is a bold step. Packing wisely, knowing your rights, and understanding the new environment will empower you to focus on learning and growth instead of last-minute hassles.",
        buttonText: "Access Pre-Departure Hub",
        buttonAction: () => console.log("Pre-departure hub clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Before You Fly – FAQs",
        qaData: [
            {
                id: 1,
                question: "How early should I arrive before classes?",
                answer:
                    "Reach at least 10-14 days before orientation. It gives time for jetlag recovery, accommodation setup, and city familiarisation.",
            },
            {
                id: 2,
                question: "What must I pack in hand luggage?",
                answer:
                    "Keep passport, visa, admission letter, insurance papers, wallet, a change of clothes, and small toiletries. Electronics and valuables should also stay in cabin baggage.",
            },
            {
                id: 3,
                question: "Do I need to declare cash at the airport?",
                answer:
                    "If carrying more than the limit (often USD 10,000 or equivalent), declare it to customs both at departure and arrival airports.",
            },
            {
                id: 4,
                question: "Can I carry food from home?",
                answer:
                    "Dry snacks are usually allowed in sealed packs, but avoid fresh fruits, seeds, or meat items – many countries restrict them.",
            },
            {
                id: 5,
                question: "Is travel insurance mandatory?",
                answer:
                    "Some universities require proof of insurance before enrolment. Even if optional, comprehensive coverage is strongly recommended for safety.",
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

export default BeforeYouFly;
