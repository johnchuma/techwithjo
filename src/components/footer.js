import { useLocation, useNavigate } from "react-router-dom";
import Subscribe from "./subscribe";
import moment from "moment";

const Footer = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    return ( <div className="bg-dark text-white py-24 ">
        <div className=" w-10/12 md:w-8/12 2xl:w-7/12 mx-auto grid grid-cols-10 items-start  gap-y-8 md:gap-y-0">
        <div
          className="cursor-pointe flex space-x-2 items-center col-span-12 md:col-span-4"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/me.png" className="size-9 rounded-full"/>
          <h1 className="text-lg md:text-xl  font-medium text-white">
            Techwithjo
          </h1>
        </div>
        <div className=" col-span-7 md:col-span-2">
            <p className="text-xs">Services</p>
            <div className=" space-y-1 mt-3">
        {["Stories","How to ?","Events","Development"].map((item)=>{
        return <p>{item}</p>
       })}
        </div>
        </div>
        <div className=" col-span-3 md:col-span-2">
            <p className="text-xs">Need Help ?</p>
            <div className="space-y-1 mt-3 ">
        {["Contacts","Dar es salam, ","Tanzania"].map((item)=>{
        return <p >{item}</p>
       })}
        </div>
        </div>
        <div className=" col-span-5 md:col-span-2">
            <p className="text-xs">Get to know</p>
            <div className=" space-y-1 mt-3 ">
        {["About Me","Terms and conditions","Privacy policy"].map((item)=>{
        return <p >{item}</p>
       })}
        </div>
        </div>
        
        </div>
        <div className=" w-10/12 md:w-8/12 2xl:w-7/12 mx-auto items-center mt-8 flex justify-between py-2 border-t-2 border-white border-opacity-20">
            <p className="text-sm">©️{moment(Date.now()).format("yyy")}. Techwithjo</p>
            <Subscribe/>
        </div>
       
      
       
    </div> );
}
 
export default Footer;