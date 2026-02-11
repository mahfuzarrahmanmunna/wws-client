import { motion } from 'framer-motion';
import img from "../assets/wws1.png"
import { Link } from 'react-router-dom';

const Footer = () => {


  // Footer data
  const footerData = {
    organization: {
      // name: "Penn State Extension",
      // college: "College of Agricultural Sciences",
      // university: "The Pennsylvania State University",
      // address: "323 Agricultural Administration Building University Park, PA 16802",
      copyWrite:`© ${new Date().getFullYear()} World Wise Scholars. All rights reserved.`
    },
    aboutExtension: [
      { name: "About", url: "/about-us" },
      { name: "Leadership", url: "/leader-ship" },
      { name: "Careers", url: "/career" },
      { name: "Staff Directory", url: "staff-directory" },
      // { name: "Privacy Policy", url: "/private-policy" },
      { name: "Events", url: "our-events" },
      { name: "Contact Us", url: "#" }
    ],
    customerService: [
      { name: "Help Center", url: "/help-centers" },
      { name: "Login Problems", url: "/login-problems" },
      { name: "Registration Issues", url: "/register-issue" },
      { name: "Website Feedback", url: "/website-feedback" },
      { name: "Report a Problem", url: "/report-a-problem" },
      // { name: "Accessibility", url: "/accessability" }
    ],
    otherPrograms: [
      // { name: "Pennsylvania 4-H", url: "/pennslvania-4-h" },
      // { name: "Better Kid Care", url: "/better-kid-care" },
      // { name: "Master Gardeners", url: "/master-gardeners" },
      // { name: "Food Safety", url: "/food-safety" },
      // { name: "Water Resources", url: "/water-resources" },
      // { name: "Nutrition Links", url: "/nutrition-links" },
      // { name: "Agriculture", url: "/agricultures" }
      { name: "Accessibility", url: "/accessability" },
      { name: "Side-Map", url: "/side-map" },
      { name: "Privacy Policy", url: "/private-policy" },
      { name: "Terms & Condition", url: "/terms" },

    ]
  };

  return (
    // bg-gray-900
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
         {/* <span><img src={img} className='w-40 h-25' alt="" /></span> */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           {/* <span><img src={img} className='w-40 h-25' alt="" /></span> */}

          {/* Left Column - Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-4 space-y-1"
          >
            <span><img src={img} className='w-50 md:w-70 h-70' alt="" /></span>
            <h3 className="text-xl font-bold text-gray-900">
              {footerData.organization.name}</h3>
            <p className="text-gray-600">{footerData.organization.college}</p>
            <p className="text-gray-600">{footerData.organization.university}</p>
            <p className="text-gray-500 text-sm mt-4">{footerData.organization.address}</p>
          </motion.div>

          {/* Middle Column - About & Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* About Extension */}
            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-500 text-blue-600">ABOUT EXTENSION</h4>
              <ul className="space-y-3">
                {footerData.aboutExtension.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item.url}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-green-500 text-green-600">CUSTOMER SERVICE</h4>
              <ul className="space-y-3">
                {footerData.customerService.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item.url}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Other Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:col-span-3"
          >
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-purple-500 text-purple-600">POLICIES</h4>
            <ul className="space-y-3">
              {footerData.otherPrograms.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.url}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">{footerData.organization.copyWrite}</p>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;