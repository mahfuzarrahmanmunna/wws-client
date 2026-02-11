// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth/useAuth';
// import useAdmin from '../Hooks/role/useAdmin';
// import useAmbassador from '../Hooks/role/useAmbassador';

// const AdminRoutes = ({ children }) => {
//   const { user, loading } = useAuth();
//   const [isAdmin, adminLoading] = useAdmin();
//   const [ambassadorData, ambassadorLoading] = useAmbassador();
//   const location = useLocation();

//   if (loading || adminLoading || ambassadorLoading) {
//     return <progress className="progress w-56"></progress>;
//   }

//   const isAmbassador = ambassadorData?.role === "ambassador";
//   console.log(isAmbassador)

//   // ✅ Both admin and ambassador can access
//   if (user && (isAdmin || isAmbassador)) {
//     return children;
//   }

//   return <Navigate to="/signin" state={{ from: location }} replace />;
// };

// export default AdminRoutes;




// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth/useAuth';
// import useAdmin from '../Hooks/role/useAdmin';
// import useAmbassadorAccess from '../Hooks/role/useAmbassadorAccess';

// const AdminRoutes = ({ children }) => {
//   const { user, loading } = useAuth();
//   const [isAdmin, adminLoading] = useAdmin();
//   const [ambassadorData, ambassadorDataLoading] = useAmbassadorAccess();
//   const location = useLocation();

//   if (loading || adminLoading || ambassadorDataLoading) {
//     return <progress className="progress w-56"></progress>;
//   }

//   // Check if ambassador has any access flag true
//   const hasAmbassadorAccess =
//     ambassadorData &&
//     ambassadorData.role === "ambassador" &&
//     (
//       ambassadorData.access?.scholarships ||
//       ambassadorData.access?.courses ||
//       ambassadorData.access?.events ||
//       ambassadorData.access?.universities
//     );

//   // ✅ Grant access if admin OR ambassador with access
//   if (user && (isAdmin || hasAmbassadorAccess)) {
//     return children;
//   }

//   // ❌ Otherwise redirect to signin
//   return <Navigate to="/signin" state={{ from: location }} replace />;
// };

// export default AdminRoutes;




import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';
import useAdmin from '../Hooks/role/useAdmin';
import useAmbassadorAccess from '../Hooks/role/useAmbassadorAccess';

const AdminRoutes = ({ children, requiredAccess }) => {
  const { user, loading } = useAuth();
  const [isAdmin, adminLoading] = useAdmin();
  const [ambassadorData, ambassadorDataLoading] = useAmbassadorAccess();
  const location = useLocation();

  if (loading || adminLoading || ambassadorDataLoading) {
    return null;
  }

  // Admin has full access
  if (isAdmin) return children;

  // Ambassador fine-grained check
  if (
    ambassadorData?.role === "ambassador" &&
    requiredAccess && // requiredAccess prop passed
    ambassadorData.access?.[requiredAccess]
  ) {
    return children;
  }

  // Otherwise redirect
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default AdminRoutes;


