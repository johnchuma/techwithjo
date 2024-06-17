import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
    return ( <div className=" font-aktiv bg-background min-h-screen text-textColor">
        <Navbar/>
        <div className=" py-12 pt-28 md:pt-20">
        <Outlet/>
        </div>
        <Footer/>
    </div> );
}
 
export default Layout;