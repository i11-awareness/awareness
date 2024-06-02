import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
