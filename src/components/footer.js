import { useLocation } from "react-router-dom";

const Footer = () => {
    const {pathname} = useLocation()
    return ( <div className={`flex md:flex-row flex-col py-4 text-muted  justify-between w-11/12 md:w-10/12 mx-auto text-sm ${pathname=="/"?"items-center":"md:block hidden"} `}>
        <div className="flex flex-wrap   space-x-2  ">
        {["Contacts","Terms and conditions","Privacy policy"].map((item)=>{
        return <p className="underline">{item}</p>
       })}
        </div>
        <div className="flex space-x-1">
            Dar es salaam, Tanzania
        </div>
       
    </div> );
}
 
export default Footer;