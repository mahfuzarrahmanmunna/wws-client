import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import SearchResults from "../pages/SearchResults";
import WhyStudyAbroad from "../nav/studyAbroad/WhyStudyAbroad";
import StudyDestination from "../nav/studyAbroad/StudyDestination";
import ApplicationGuide from "../nav/studyAbroad/ApplicationGuide";
import ThriveAbroad from "../nav/studyAbroad/ThriveAbroad";
import NextStep from "../nav/studyAbroad/NextStep";
import BeforeYouFly from "../nav/studyAbroad/BeforeYouFly";
import StudyInAustralia from "../nav/studyAbroad/StudyInAustralia";
import StudyInCanada from "../nav/studyAbroad/StudyInCanada";
import StudyInIreland from "../nav/studyAbroad/StudyInIreland";
import StudyInNewZeland from "../nav/studyAbroad/StudyInNewZeland";
import StudyInUK from "../nav/studyAbroad/StudyInUK";
import StudyInUSA from "../nav/studyAbroad/StudyInUSA";
import WhatsIltes from "../nav/studyAbroad/WhatsIltes";
import WhyIelts from "../nav/studyAbroad/WhyIelts";
import IeltsPrep from "../nav/studyAbroad/IeltsPrep";

import FastEfficientDetails from "../pages/FastEfficientDetails";
import ClientFocusedDetails from "../pages/ClientFocusedDetails";
import IELTSTestPrepDetails from "../pages/IELTSTestPrepDetails";
import GlobalReachDetails from "../pages/GlobalReachDetails";
import CreativeSolutionsDetails from "../pages/CreativeSolutionsDetails";

import Collaborates from "../component/Collaborates";

import GlobalEventsDetails from "../pages/GlobalEventsDetails";
import FastLaneDetails from "../pages/FastLaneDetails";
import VisaApplicationDetails from "../pages/VisaApplicationDetails";
import TenReasonsUKDetails from "../pages/TenReasonsUKDetails";
import MastersUKWithPlacementDetails from "../pages/MastersUKWithPlacementDetails";
import TopFiveEnglishTestsDetails from "../pages/TopFiveEnglishTestsDetails";
import TenReasonsUSAStudyDetails from "../pages/TenReasonsUSAStudyDetails";
import BestBusinessSchoolsUSA from "../pages/BestBusinessSchoolsUSA";
import AffordableUniversitiesUSA from "../pages/AffordableUniversitiesUSA";

import CourseDetailsPages from "../pages/CourseDetailsPages";
import UniversityDetailsPages from "../pages/UniversityDetailsPages";
import EventsDetailsPages from "../pages/EventsDetailsPages";
import ScholarshipDetailsPages from "../pages/ScholarshipDetailsPages";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import About from "../pages/About";
import Leadership from "../pages/Leadership";
import Careers from "../pages/Careers";
import StaffDirectory from "../pages/StaffDirectory";
import Events from "../pages/Events";
import HelpCenter from "../pages/HelpCenter";
import LoginProblems from "../pages/LoginProblems";
import RegistrationIssues from "../pages/RegistrationIssues";
import WebsiteFeedback from "../pages/WebsiteFeedback";
import ReportAProblem from "../pages/ReportAProblem";
import Accessibility from "../pages/Accessibility";
import Pennsylvania4H from "../pages/Pennsylvania4H";
import BetterKidCare from "../pages/BetterKidCare";
import MasterGardeners from "../pages/MasterGardeners";
import FoodSafety from "../pages/FoodSafety";
import WaterResources from "../pages/WaterResources";
import NutritionLinks from "../pages/NutritionLinks";
import Agriculture from "../pages/Agriculture";
import Programs from "../pages/Programs";
import Results from "../pages/Results";
import Coaching from "../pages/Coaching";
import Events2023 from "../pages/Events2023";

import DashboardLayout from "../layout/DashboardLayout";
import MyApplication from "../component/MyApplication";
import DashboardHome from "../component/DashboardHome";
import PrivateRoute from "./PrivateRoutes";
import ManageApplication from "../component/ManageApplication";
import AddNewScholarship from "../pages/AddNewScholarship";
import AddNewUni from "../pages/AddNewUni";
import ManageUni from "../pages/ManageUni";
import ManageScholarship from "../pages/ManageScholarship";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import AddCourse from "../pages/Dashboard/AddCourse/AddCourse";
import AddEvents from "../pages/Dashboard/AddEvents/AddEvents";
import ManageEvents from "../pages/Dashboard/ManageEvents/ManageEvents";
import ManageCourses from "../pages/ManageCourses/ManageCourses";
import SearchLayout from "../layout/SearchLayout";
import CourseResults from "../pages/CourseResults";
import DefaultSearchResults from "../pages/DefaultSearchResults/DefaultSearchResults";
import UniversityResults from "../pages/UniversityResult/UniversityResult";
import EventsResults from "../pages/EventsResults/EventsResults";
import ScholarshipsResults from "../pages/ScholarshipsResults/ScholarshipsResults";
import ActivityLog from "../pages/ActivityLog";
import ManageAmbassador from "../pages/ManageAmbassador";
import AllApplication from "../pages/AllApplication";
import AmbassadorRoutes from "./AmbassadorRoutes";
import SideMap from "../pages/SideMap";
import TermsCondition from "../pages/TermsCondition";
import ResultsPage from "../pages/ResultsPage";
// import UniversityResults from "../layout/SearchLayout";
// import ManageCourses from "../pages/ManageCourses/ManageCourses";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/results",
        element:<ResultsPage></ResultsPage>
      },
      {
        path: "signin",
        element: <Login></Login>

      },
      {
        path: "signup",
        element: <SignUp></SignUp>

      },
      {
        path: "WhyStudyAbroad",
        element: <WhyStudyAbroad></WhyStudyAbroad>

      },
      {
        path: "studyDestination",
        element: <StudyDestination></StudyDestination>

      },
      {
        path: "applicationGuide",
        element: <ApplicationGuide></ApplicationGuide>
      },
      {
        path: "thriveAbroad",
        element: <ThriveAbroad></ThriveAbroad>
      },
      {
        path: "next-step",
        element: <NextStep />
      },
      {
        path: "before-you-fly",
        element: <BeforeYouFly />
      },
      {
        path: "study-in-australia",
        element: <StudyInAustralia />
      },
      {
        path: "study-in-canada",
        element: <StudyInCanada />
      },
      {
        path: "study-in-ireland",
        element: <StudyInIreland />
      },
      {
        path: "study-in-NewZeland",
        element: <StudyInNewZeland></StudyInNewZeland>
      },
      {
        path: "study-in-Uk",
        element: <StudyInUK />
      },
      {
        path: "study-in-Usa",
        element: <StudyInUSA></StudyInUSA>
      },
      {
        path: "what-is-ielts",
        element: <WhatsIltes></WhatsIltes>
      },
      {
        path: "why-ielts",
        element: <WhyIelts></WhyIelts>
      },
      {

        path: "ielts-preparation",
        element: <IeltsPrep></IeltsPrep>
      },
      {
        path: "fast-efficient-details",
        element: <FastEfficientDetails />
      },
      {
        path: "creative-solutions",
        element: <CreativeSolutionsDetails />
      },
      {
        path: "client-focused",
        element: <ClientFocusedDetails />
      },
      {
        path: "ielts-and-test",
        element: <IELTSTestPrepDetails />
      },
      {
        path: "global-reach",
        element: <GlobalReachDetails />
      },
      {
        path: "ielts-preparation",
        element: <IeltsPrep></IeltsPrep>
      },
      {
        path: "contact",
        element: <Collaborates></Collaborates>
      },
      {

        path: "global-events",
        element: <GlobalEventsDetails />
      },
      {
        path: "live-life-in-the-fast-line",
        element: <FastLaneDetails />
      },
      {
        path: "visa-application-assistance",
        element: <VisaApplicationDetails />
      },
      {
        path: "ten-reasons-why-you-should-study-in-the-uk",
        element: <TenReasonsUKDetails />
      },
      {
        path: "masters-in-the-uk-with-placement",
        element: <MastersUKWithPlacementDetails />
      },
      {
        path: "top-five-english-language-tests-accepted-by-universities-worldwide",
        element: <TopFiveEnglishTestsDetails />
      },
      {
        path: "ten-reasons-to-study-in-the-usa",
        element: <TenReasonsUSAStudyDetails />
      },
      {
        path: "best-business-schools-in-the-usa",
        element: <BestBusinessSchoolsUSA />
      },
      {
        path: "guide-to-affordable-universities",
        element: <AffordableUniversitiesUSA />
      },
      {

        path: "/search-results/courses/courses-details/:id",
        element: <CourseDetailsPages></CourseDetailsPages>
      },
      {
        path: "/search-results/courses-details/:id",
        element: <CourseDetailsPages></CourseDetailsPages>

      },
      {
        path: "/search-results/university-details/:id",
        element: <UniversityDetailsPages></UniversityDetailsPages>
      },
      {
        path: "/search-results/events/event-details/:id",
        element: <EventsDetailsPages></EventsDetailsPages>
      },
      {
        path: "/search-results/scholarships/scholarship-details/:id",
        element: <ScholarshipDetailsPages></ScholarshipDetailsPages>
      },
      {
        path: "/private-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/leader-ship",
        element: <Leadership />
      },
      {
        path: "/career",
        element: <Careers />
      },
      {
        path: "/staff-directory",
        element: <StaffDirectory />
      },
      {
        path: "/our-events",
        element: <Events />
      },
      {
        path: "/help-centers",
        element: <HelpCenter />
      },
      {
        path: "/login-problems",
        element: <LoginProblems />
      },
      {
        path: "/register-issue",
        element: <RegistrationIssues />
      },
      {
        path: "/website-feedback",
        element: <WebsiteFeedback />
      },
      {
        path: "/report-a-problem",
        element: <ReportAProblem />
      },
      {
        path: "/accessability",
        element: <Accessibility />
      },
      {
        path: "/pennslvania-4-h",
        element: <Pennsylvania4H />
      },
      {
        path: "/better-kid-care",
        element: <BetterKidCare />
      },
      {
        path: "/master-gardeners",
        element: <MasterGardeners />
      },
      {
        path: "/food-safety",
        element: <FoodSafety />
      },
      {
        path: "/water-resources",
        element: <WaterResources />
      },
      {
        path: "/nutrition-links",
        element: <NutritionLinks />
      },
      {
        path: "/agricultures",
        element: <Agriculture />
      },
      {
         path: "/side-map",
        element: <SideMap></SideMap>
      },
      {
         path: "/terms",
        element: <TermsCondition></TermsCondition>
      },
      {
        path: "/programs-overview-2023",
        element: <Programs />
      },
      {
        path: "/results-achievements-2023",
        element: <Results />
      },
      {
        path: "/coaching-services-2023",
        element: <Coaching />
      },
      {
        path: "/upcoming-events-2023",
        element: <Events2023 />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [

      {
        path: "/dashboard/dashboard-home",
        element: <DashboardHome></DashboardHome>

      },

      {
        path: "/dashboard/my-application",
        element: <UserRoutes><MyApplication></MyApplication></UserRoutes>
      },
      {
        path: "/dashboard/manage-application",
        element: <AdminRoutes><ManageApplication></ManageApplication></AdminRoutes>
      },
      {
        path: "/dashboard/manage-ambassador",
        element: <AdminRoutes><ManageAmbassador></ManageAmbassador></AdminRoutes>
      },
      {
        path: "/dashboard/add-new-scholarship",
        element: <AdminRoutes requiredAccess="scholarships"><AddNewScholarship></AddNewScholarship></AdminRoutes>
      },
      {
        path: "/dashboard/add-new-university",
        element: <AdminRoutes requiredAccess="universities"><AddNewUni></AddNewUni></AdminRoutes>
      },
      {
        path: "/dashboard/manage-universities",
        element: <AdminRoutes requiredAccess="universities"><ManageUni></ManageUni></AdminRoutes>
      },
      {
        path: "/dashboard/manage-scholarships",
        element: <AdminRoutes requiredAccess="scholarships"><ManageScholarship></ManageScholarship></AdminRoutes>
      },
      {
        path: "/dashboard/add-course",
        element: <AdminRoutes requiredAccess="courses">
          <AddCourse />
        </AdminRoutes>
      },
      {
        path: "/dashboard/add-events",
        element: <AdminRoutes requiredAccess="events">
          <AddEvents />
        </AdminRoutes>
      },
      {
        path: "/dashboard/manage-events",
        element: <AdminRoutes requiredAccess="events">
          <ManageEvents />
        </AdminRoutes>


      },
      {
        path: "/dashboard/manage-courses",
        element: <AdminRoutes requiredAccess="courses">
          <ManageCourses />
        </AdminRoutes>

      },
      {
        path: "/dashboard/activity-log",
        element: 
        // <AdminRoutes>
          <ActivityLog></ActivityLog>
        // </AdminRoutes>

      },
      {
        path: "/dashboard/allApplication",
        element: <AmbassadorRoutes>
          <AllApplication></AllApplication>

        </AmbassadorRoutes>
          
         
        
      }
    ]
  },
  {
    path: "search-results",
    element: <SearchLayout />,
    children: [
      { path: "courses", element: <CourseResults /> },
      { path: "universities", element: <UniversityResults /> },
      { path: "events", element: <EventsResults /> },
      { path: "scholarships", element: <ScholarshipsResults /> },
    ]
  },

]);



