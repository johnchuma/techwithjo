import { useNavigate } from "react-router-dom";
import Subscribe from "../components/subscribe";
import { SiBlockchaindotcom } from "react-icons/si";
const HomePage = () => {
    const navigate = useNavigate()
    return ( <div className="flex flex-col justify-center items-center w-10/12 md:w-6/12 mx-auto text-center py-20 md:py-28 space-y-6">
         <div className="block md:hidden"> <SiBlockchaindotcom className="size-24 text-primary animate-spin duration-75" /></div>
        <h1 className="  text-3xl md:text-5xl text-dark font-semibold md:font-bold  ">Learn a thing or Two about Technology</h1>
        <p className="text-textColor px-12 md:px-0">Broaden your tech perspective, knowledge and skills</p>
        <div className="flex space-x-2">
            <Subscribe className="py-3 border border-textColor px-6 rounded-full text-sm"/>
            <button onClick={()=>{
                navigate('/stories')
            }} className="bg-primary py-3 px-6 rounded-full text-sm text-white">Start Reading</button>

        </div>
    </div> );
}
 
export default HomePage;