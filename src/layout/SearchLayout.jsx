import Result1 from "../component/Result1";
import { Outlet, useNavigate } from "react-router-dom";
import Result2 from "../component/Result2";
import ContactHome from "../component/ContactHome";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

const SearchLayout = () => {
    // const location = useLocation()
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (!location.state) navigate('/')
    // }, [location.state, navigate])

    const handleBackToSearch = () => navigate('/')

    return (
        <div className="min-h-screen bg-gray-50">
            <Nav></Nav> 
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Breadcrumb */}
                <nav className="mb-4 sm:mb-6">
                    <button onClick={handleBackToSearch} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                        <span className="text-lg">←</span> Back to Search
                    </button>
                </nav>

                {/* Common Top Banner */}
                <div className="mb-8">
                    <Result1 />
                </div>

                {/*  Dynamic Middle Section */}
                <Outlet />

                {/* Common Bottom Sections */}
                <div className="mt-20 space-y-6">
                    <Result2 />
                    <ContactHome />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchLayout;
