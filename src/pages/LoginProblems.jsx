import React from "react";
import IELTSBanner from "../component/IELTSBanner";

const LoginProblems = () => {
    const bannerProps = {
        title: "Login Problems – WWS Bangladesh",
        description:
            "Facing issues logging into your WWS account? Our Login Problems page provides guidance, troubleshooting steps, and support to help you regain access quickly.",
        bannerImage:
            "https://images.unsplash.com/photo-1601597110543-6c12291e2f9e?w=1200&h=600&fit=crop",
        paragraphText: `
            At WWS Bangladesh, we understand that encountering login issues can be frustrating. 
            Whether you forgot your password, are unable to access your account, or face technical difficulties, 
            our team is here to help you. 

            This page provides detailed instructions, tips, and contact information so you can resolve 
            login problems quickly and securely. We prioritize your account security while ensuring 
            that you regain access with minimum hassle. 
            
            Following the guidelines below will help you troubleshoot most login issues on your own. 
            For any persistent or complex problems, our support team is just a click away.
        `,
        buttonText: "Get Login Help",
        buttonAction: () => console.log("User clicked Get Login Help"),
        reasons: [
            {
                title: "1. Forgot Password",
                description:
                    "Use the 'Forgot Password' link on the login page to reset your password. Follow the instructions sent to your registered email."
            },
            {
                title: "2. Incorrect Username or Email",
                description:
                    "Ensure you are using the correct email or username associated with your WWS account. Double-check for typos and case sensitivity."
            },
            {
                title: "3. Account Locked",
                description:
                    "Multiple failed login attempts can temporarily lock your account. Wait for 15-30 minutes and try again or contact support for assistance."
            },
            {
                title: "4. Browser Issues",
                description:
                    "Clear your browser cache, cookies, and history. Ensure your browser is up-to-date and try logging in again."
            },
            {
                title: "5. Two-Factor Authentication Problems",
                description:
                    "If you have enabled 2FA and are unable to access your account, follow the recovery instructions provided during setup or contact support."
            },
            {
                title: "6. Account Not Verified",
                description:
                    "Make sure your email account is verified. Check your inbox (and spam folder) for the verification link sent during registration."
            },
            {
                title: "7. Technical Errors",
                description:
                    "For error messages such as 'Server not reachable' or 'Unexpected error', refresh the page, try a different device, or reach out to support."
            },
            {
                title: "8. Contact Support",
                description:
                    "If none of the above steps resolve your issue, contact our support team at support@wwsbd.com or call our helpline for immediate assistance."
            },
            {
                title: "9. Tips for Safe Login",
                description:
                    "Always log in from secure devices and networks. Avoid using public Wi-Fi for account access and never share your password."
            },
            {
                title: "10. Stay Updated",
                description:
                    "Check our Help Center or official communications for updates about system maintenance or known login issues."
            }
        ]
    };

    return <IELTSBanner {...bannerProps} />;
};

export default LoginProblems;
