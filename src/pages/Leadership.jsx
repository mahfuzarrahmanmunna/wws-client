import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const Leadership = () => {
    const bannerProps = {
        title: "Leadership at WWS Bangladesh",
        description:
            "Discover how leadership shapes our culture, drives innovation, and empowers students to achieve their global ambitions.",
        bannerImage:
            "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, leadership is more than a position — it’s a responsibility. 
            We believe true leadership is defined by vision, integrity, service, and the ability to inspire others. 
            Our leadership philosophy is built on the idea that every student, team member, and partner has the 
            potential to become a leader in their own right. We nurture this potential by providing guidance, 
            resources, and opportunities to create impact at both personal and global levels.
            
            The WWS leadership culture emphasizes inclusivity, collaboration, and continuous learning. 
            Our leaders are not only experienced professionals but also lifelong learners who adapt to 
            changing global trends in education, technology, and international student mobility. 
            With a deep commitment to transparency, accountability, and ethical practices, 
            our leadership team ensures that students trust us with one of the most important decisions of their lives: 
            their education and career abroad.
        `,
        buttonText: "Meet Our Leaders",
        buttonAction: () => console.log("User clicked Meet Our Leaders"),
        reasons: [
            {
                title: "1. Vision-Driven Leadership",
                description:
                    "We lead with a clear vision: to empower Bangladeshi students with global opportunities. Our leaders set ambitious goals and work tirelessly to achieve them, ensuring WWS stays ahead in the field of international education."
            },
            {
                title: "2. Student-Centered Approach",
                description:
                    "Every decision at WWS is guided by the needs and aspirations of students. We lead by listening, adapting, and creating pathways that put students first, making their dreams our mission."
            },
            {
                title: "3. Ethical and Transparent Practices",
                description:
                    "Integrity is at the heart of our leadership. From admissions guidance to visa support, we maintain full transparency, ensuring students and families make informed decisions without hidden agendas."
            },
            {
                title: "4. Empowering Our Team",
                description:
                    "Strong leadership is about empowering others. At WWS, we cultivate an environment where every team member is encouraged to take initiative, contribute ideas, and grow professionally."
            },
            {
                title: "5. Inspiring the Next Generation",
                description:
                    "We believe leadership is not limited to our organization. By mentoring students, alumni, and young professionals, we create future leaders who will drive positive change in their communities and careers."
            },
            {
                title: "6. Global Perspective",
                description:
                    "Our leadership team stays connected with global education trends and opportunities. This ensures students receive updated advice and guidance aligned with international standards."
            },
            {
                title: "7. Innovation in Action",
                description:
                    "From using cutting-edge technology for counseling to designing creative learning solutions, we lead with innovation. Our forward-thinking approach ensures that students are prepared for the challenges of tomorrow."
            },
            {
                title: "8. Collaborative Partnerships",
                description:
                    "Leadership at WWS extends beyond our office. We actively build partnerships with universities, institutions, and organizations worldwide to create more opportunities for our students."
            },
            {
                title: "9. Social Responsibility",
                description:
                    "We lead with purpose, giving back to society through scholarships, awareness programs, and mentorship initiatives. Leadership, for us, means uplifting communities alongside individual success."
            },
            {
                title: "10. Resilience and Adaptability",
                description:
                    "The global education landscape changes constantly. Our leaders embrace change, adapt strategies, and remain resilient, ensuring that students always receive the best guidance in uncertain times."
            },
            {
                title: "11. Mentorship Culture",
                description:
                    "Our leadership is rooted in mentorship. Senior consultants guide new counselors, alumni mentor current students, and everyone benefits from a culture of shared knowledge."
            },
            {
                title: "12. Lifelong Learning",
                description:
                    "Leadership at WWS is not static. Our leaders continuously update their skills, attend international conferences, and learn from global best practices to stay ahead of the curve."
            },
            {
                title: "13. Building Trust",
                description:
                    "Trust is earned, not demanded. Our leadership ensures that every interaction with students and parents is authentic, honest, and reliable, creating long-lasting relationships."
            },
            {
                title: "14. Celebrating Diversity",
                description:
                    "We embrace diversity within our team and student body. Different perspectives enrich our leadership style and strengthen our ability to serve students from varied backgrounds."
            },
            {
                title: "15. Future-Oriented Mindset",
                description:
                    "Great leadership prepares for the future. At WWS, we constantly innovate our strategies to align with emerging career fields, global education systems, and evolving student needs."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default Leadership;
