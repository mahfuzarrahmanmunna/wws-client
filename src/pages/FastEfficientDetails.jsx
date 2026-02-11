import React from "react";
// import IELTSBanner from "../components/IELTSBanner";
import bannerImg from "../assets/whyielts.jpg"
import IELTSBanner from "../component/IELTSBanner";

const FastEfficientDetails = () => {
    const bannerProps = {
        title: "Fast & Efficient",
        description:
            "Experience unparalleled speed in execution while maintaining meticulous attention to every detail. At WWS, efficiency isn't just a promise — it's a standard.",
        bannerImage: bannerImg,
        paragraphText:
            "In today’s fast-paced world, time is of the essence — and at WWS, we value yours. Our streamlined processes, expert team, and advanced tools empower us to deliver faster without ever compromising on quality. Whether you're launching a product, building a solution, or executing a strategy, we ensure every milestone is achieved with precision, speed, and purpose. From the very first interaction to the final delivery, we make the journey effortless for you.",
        buttonText: "Get Started",
        buttonAction: () => console.log("User clicked Get Started"),
        reasons: [
            {
                title: "1. Streamlined Process",
                description:
                    "Our operations are built around a clearly defined workflow that eliminates bottlenecks, anticipates challenges, and accelerates every phase of your project. We turn complexity into clarity, ensuring deliverables arrive faster than expected — without a dip in quality."
            },
            {
                title: "2. Experienced Professionals",
                description:
                    "Our team comprises industry veterans who understand what it takes to deliver top-tier results quickly. With deep domain expertise and years of hands-on experience, they navigate projects with agility and confidence, ensuring outcomes that exceed expectations."
            },
            {
                title: "3. Advanced Tools & Technology",
                description:
                    "We harness the power of the latest tools, platforms, and automation technologies to optimize efficiency at every level. From project management software to cutting-edge development frameworks, we stay ahead of the curve so your project does too."
            },
            {
                title: "4. Tailored Strategies for Every Client",
                description:
                    "Every client is different, and so is every solution we provide. We don’t believe in one-size-fits-all. Our team carefully analyzes your goals, industry, and timeline to craft a strategy that maximizes speed without sacrificing the depth or quality of the deliverable."
            },
            {
                title: "5. Transparent & Consistent Communication",
                description:
                    "You’ll never be left in the dark. We believe efficiency is also about keeping you informed. With frequent updates, milestone reports, and open lines of communication, we make sure you always know where your project stands."
            },
            {
                title: "6. Results That Matter",
                description:
                    "Fast delivery is only meaningful if the results make a real impact. That’s why our team is laser-focused on driving outcomes that align with your business objectives. We don’t just meet deadlines — we deliver value."
            }
        ]
    };



    return <IELTSBanner {...bannerProps} />;
};

export default FastEfficientDetails;
