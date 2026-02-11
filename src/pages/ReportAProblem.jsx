import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const ReportAProblem = () => {
    const bannerProps = {
        title: "Report a Problem – WWS Bangladesh",
        description:
            "Encountered an issue with our website, services, or processes? Report it here, and our team will investigate and resolve it promptly.",
        bannerImage:
            "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, we take your concerns seriously. Reporting a problem helps us identify technical issues, 
            service gaps, or any other challenges that might hinder your experience. 

            Our dedicated team reviews every report carefully and works to resolve issues as quickly as possible. 
            By providing detailed information about the problem, you enable us to act efficiently and improve our services. 

            This page guides you on how to report a problem, what information to include, and how we follow up on your submissions. 
            Your input is vital to maintaining the high quality and reliability of WWS services.
        `,
        buttonText: "Report Now",
        buttonAction: () => console.log("User clicked Report Now"),
        reasons: [
            {
                title: "1. Technical Issues",
                description:
                    "Report bugs, broken links, form submission errors, or any malfunctioning features on the website."
            },
            {
                title: "2. Service-Related Problems",
                description:
                    "Notify us if you face issues with student support, counseling sessions, or other WWS services."
            },
            {
                title: "3. Account or Registration Problems",
                description:
                    "If you experience difficulties during account creation, login, or profile management, report them here."
            },
            {
                title: "4. Payment or Transaction Issues",
                description:
                    "Report any payment errors, failed transactions, or discrepancies in fees and invoices."
            },
            {
                title: "5. Content Errors",
                description:
                    "Notify us if you find inaccurate, outdated, or unclear information on any page or resource."
            },
            {
                title: "6. Accessibility Problems",
                description:
                    "Report challenges in using the website due to accessibility barriers, including issues for differently-abled users."
            },
            {
                title: "7. Security Concerns",
                description:
                    "If you notice suspicious activity, potential vulnerabilities, or data-related concerns, report immediately."
            },
            {
                title: "8. Suggest Improvements",
                description:
                    "Provide feedback for new features, usability enhancements, or other improvements to make WWS better."
            },
            {
                title: "9. Contact and Follow-up",
                description:
                    "Include your contact details so our team can follow up with updates or solutions regarding your report."
            },
            {
                title: "10. Continuous Monitoring",
                description:
                    "All reports are logged and monitored to ensure timely resolution, quality improvement, and accountability."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default ReportAProblem;
