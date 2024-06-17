import { useEffect, useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Subscribe = ({className}) => {
    const [show, setShow] = useState(false);
    
    return ( <div>
        {show&&<div className="fixed z-30 inset-0 bg-black bg-opacity-50">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="w-10/12 md:w-4/12 bg-white rounded-lg mx-auto p-6 md:p-12 flex flex-col shadow-xl justify-center items-center space-y-3">
          <div className="flex justify-end w-full text-muted">
          <IoIosClose onClick={()=>{
                 setShow(false)
          }} className="size-8" />
          </div>
          <HiOutlineMailOpen className="size-12 text-primary" />
            <h1 className="text-2xl text-center">Subscribe to receive daily updates via Email</h1>
            <input placeholder="Enter your username" className="form-style"/>
            <input placeholder="Enter your email address" className="form-style"/>
            <button className="text-sm py-3 rounded-full w-full  text-white bg-primary px-6 ">
                Subscribe
              </button>
          </div>
        </div>
      </div>}
        
      <button onClick={()=>{
        setShow(true)
      }} className={className??"text-sm py-2 rounded-full  text-white bg-primary px-6"}>
              Subscribe
            </button>
    </div> );
}
 
export default Subscribe;