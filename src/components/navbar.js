import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Subscribe from "./subscribe";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [showLine,setShowLine] = useState(false)
  useEffect(()=>{
    if(pathname != "/"){
        setShowLine(true)
    }else{
      setShowLine(false)
    }
      window.addEventListener("scroll",()=>{
        if(pathname == "/"){
          if(window.scrollY.valueOf()>50){
            setShowLine(true)
        }
        else{
          setShowLine(false)
        }
        }else{
          setShowLine(true)
        }
      
      })    
  },[pathname])

  return (
    <div className={`bg-background fixed w-full z-10  ${showLine&&"border-border border-b"}`}>
      
      {/* <div className="block md:hidden">
        <button
          onClick={() => {
            window.location.href = "https://wa.me/+255627707434";
          }}
          className="text-center text-sm py-2  cursor-pointer w-full flex justify-center items-center space-x-1"
        >
          <div className="">Order a Website or an App</div>{" "}
          <CiLocationArrow1 className="size-4 " />
        </button>
      </div> */}
      <div className="w-11/12  md:w-11/12 mx-auto flex justify-between py-3 md:py-3 items-center ">
        <div
          className="cursor-pointer flex space-x-2 items-center "
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/me.png" className="size-9 rounded-full"/>
          <h1 className="text-lg md:text-xl  font-medium text-dark">
            Techwithjo
          </h1>
        </div>
        <div className="md:hidden block relative">
          <div
            onClick={() => {
              console.log(true)
              setShowMenu(!showMenu);
            }}
            className="bg-primary text-dark size-7 border border-dark flex justify-center items-center rounded-md w-10"
          >
            <IoIosMenu className=" size-5" />
          </div>
          {showMenu && (
            <div className="bg-background rounded-2xl mt-1 absolute right-0 px-5 py-4 space-y-2 text-sm shadow-lg">
              <p
              onClick={() => {
                navigate("/aboutMe");
                setShowMenu(false)
              }}
              className=" cursor-pointer "
            >
              About Me
            </p>
            <p
              onClick={() => {
                navigate("/stories");
                setShowMenu(false)

              }}
              className=" cursor-pointer "
            >
              Stories
            </p>
            <p
              onClick={() => {
                navigate("/howTo");
                setShowMenu(false)

              }}
              className=" cursor-pointer "
            >
              How to do ?
            </p>
            <p
              onClick={() => {
                navigate("/events");
                setShowMenu(false)

              }}
              className=" cursor-pointer "
            >
              Events
            </p>
            <p
              onClick={() => {
                window.location.href = "https://wa.me/+255627707434";
                setShowMenu(false)

              }}
              className=" cursor-pointer "
            >
              Hire Me
            </p>
              
              <Subscribe />
             
            </div>
          )}
        </div>
        <div className="md:block hidden">
          <div className="flex items-center space-x-8 font-normal">
            <p
              onClick={() => {
                navigate("/aboutMe");
              }}
              className=" cursor-pointer "
            >
              About Me
            </p>
            <p
              onClick={() => {
                navigate("/stories");
              }}
              className=" cursor-pointer "
            >
              Stories
            </p>
            <p
              onClick={() => {
                navigate("/howTo");
              }}
              className=" cursor-pointer "
            >
              How to do ?
            </p>
            <p
              onClick={() => {
                navigate("/events");
              }}
              className=" cursor-pointer "
            >
              Events
            </p>
            <p
              onClick={() => {
                window.location.href = "https://wa.me/+255627707434";
              }}
              className=" cursor-pointer "
            >
              Hire Me
            </p>
            <p
              onClick={() => {
                window.location.href = "https://wa.me/+255627707434";
              }}
              className=" cursor-pointer "
            >
              Colaboration
            </p>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center ">
           
          <Subscribe/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
