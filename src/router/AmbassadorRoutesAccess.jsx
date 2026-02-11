import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../Hooks/useAuth/useAuth";
import useAmbassador from "../Hooks/role/useAmbassador";


const AmbassadorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [ambassadorData, ambassadorLoading, error] = useAmbassador();
  const location = useLocation();

  // 🔄 Loading state handle
  if (loading || ambassadorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  // ❌ Error or No data handle
  if (error || !ambassadorData) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // ✅ Check role and access
  const isAmbassador = ambassadorData?.role === "ambassador";

  // উদাহরণ: নির্দিষ্ট access check করতে চাও (যেমন শুধুমাত্র scholarship true হলে)
  // const hasScholarshipAccess = ambassadorData?.access?.scholarships;

  if (user && isAmbassador) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default AmbassadorRoutes;
