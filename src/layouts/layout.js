import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return ( <div className=" font-helvetica bg-background min-h-screen font-regular ">
        <Toaster position="top-right"/>
        <Navbar/>
        <div className=" py-12 pt-20 md:pt-20">
        <Outlet/>
        </div>
        <Footer/>
    </div> );
}
 
export default Layout;