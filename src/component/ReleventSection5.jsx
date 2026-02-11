import { motion } from 'framer-motion';
import { useState } from 'react';

const ReleventSection5 = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  // টুলসের তালিকা
  const tools = [
    { name: "Woo", id: "woo" },
    { name: "LifterLMS", id: "lifterlms" },
    { name: "AffiliateWP", id: "affiliatewp" },
    { name: "Elementor", id: "elementor" },
    { name: "wpfusion", id: "wpfusion" },
    { name: "FLUENT FORMS", id: "fluentforms" },
    { name: "Paid Memberships Pro", id: "paidmemberships" },
    { name: "iLearnDash", id: "ilearndash" },
    { name: "Restrict Content Pro", id: "restrictcontent" },
    { name: "mailoptin", id: "mailoptin" },
    { name: "WishList", id: "wishlist" },
    { name: "memberpress", id: "memberpress" },
    { name: "TutorLMS", id: "tutorlms" },
    { name: "Uncanny Automator", id: "uncanny" },
    { name: "Tool 15", id: "tool15" },
    { name: "Tool 16", id: "tool16" },
    { name: "Tool 17", id: "tool17" },
    { name: "Tool 18", id: "tool18" },
    { name: "Tool 19", id: "tool19" },
    { name: "Tool 20", id: "tool20" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* হেডার সেকশন */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FluentCRM Integrations
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Connect your 3rd-party tools with FluentCRM and automate everything!
          </p>
        </motion.div>

        {/* টুলস গ্রিড */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.1 * index, 
                duration: 0.4,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onHoverStart={() => setHoveredTool(tool.id)}
              onHoverEnd={() => setHoveredTool(null)}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            >
              {/* টুল লোগো - ফেক ইমেজ */}
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={`https://via.placeholder.com/150?text=${tool.name.charAt(0)}`} 
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* টুলের নাম */}
              <span className="text-center text-sm font-medium text-gray-800">
                {tool.name}
              </span>
              
              {/* হোভার ইফেক্ট */}
              {hoveredTool === tool.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl bg-indigo-500 bg-opacity-10 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
                    Connect
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ফুটার নোট */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            And many more integrations available...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ReleventSection5