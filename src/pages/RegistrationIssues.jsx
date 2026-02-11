import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const RegistrationIssues = () => {
    const bannerProps = {
        title: "Registration Issues – WWS Bangladesh",
        description:
            "Having trouble registering for WWS services? This page guides you through common registration problems, solutions, and support options.",
        bannerImage:
            "https://images.unsplash.com/photo-1581091012184-1d9f65f6a21e?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, we aim to make the registration process as smooth as possible. 
            However, sometimes students or parents may encounter issues during registration. 

            This page provides step-by-step guidance to resolve common registration problems, 
            from filling out forms correctly to verifying your account. Our goal is to ensure 
            you can complete your registration quickly, securely, and without frustration. 

            Follow the instructions below for troubleshooting, and if needed, our support team 
            is always ready to assist you personally.
        `,
        buttonText: "Get Registration Help",
        buttonAction: () => console.log("User clicked Get Registration Help"),
        reasons: [
            {
                title: "1. Form Submission Errors",
                description:
                    "Ensure all required fields are filled out correctly. Double-check for typos, special characters, and valid email addresses."
            },
            {
                title: "2. Email Already Registered",
                description:
                    "If you see an 'Email already in use' message, you may have an existing account. Try logging in or using the 'Forgot Password' option."
            },
            {
                title: "3. Invalid Contact Number",
                description:
                    "Make sure your phone number is entered correctly with the correct country code. Avoid spaces or special characters unless specified."
            },
            {
                title: "4. Verification Email Not Received",
                description:
                    "Check your spam/junk folder. If the email is not received, use the 'Resend Verification' option or contact support."
            },
            {
                title: "5. Browser Compatibility Issues",
                description:
                    "Some older browsers may not display registration forms correctly. Use a modern browser like Chrome, Firefox, or Edge."
            },
            {
                title: "6. Technical or Server Errors",
                description:
                    "Refresh the page, clear your browser cache, or try again after a few minutes if you encounter unexpected errors during registration."
            },
            {
                title: "7. Incomplete Profile",
                description:
                    "Make sure you complete all required sections of the registration form. Incomplete profiles may prevent submission."
            },
            {
                title: "8. Password Requirements",
                description:
                    "Passwords must meet our security standards (minimum length, uppercase/lowercase letters, numbers, special characters). Follow the on-screen instructions."
            },
            {
                title: "9. Contact Support",
                description:
                    "If none of the above solutions work, contact our support team at support@wwsbd.com or call our helpline for immediate assistance."
            },
            {
                title: "10. Stay Updated",
                description:
                    "Check our Help Center for updates on registration system maintenance or known technical issues."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default RegistrationIssues;
