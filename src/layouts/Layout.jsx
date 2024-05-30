import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../hooks/scrollTop";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <NavBar />
      
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
