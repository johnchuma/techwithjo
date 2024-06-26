import { useNavigate } from "react-router-dom";
import Subscribe from "../components/subscribe";
import { SiBlockchaindotcom } from "react-icons/si";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col justify-center relative items-center w-11/12 md:w-11/12 mx-auto md:pt-0 2xl:pt-5  py-0 md:py-0 ">
        <img className="rounded-2xl 2xl:rounded-3xl object-cover h-[70vh] md:h-auto 2xl:h-[80vh] w-full" src="/background.png" />
        <div className="absolute w-full md:w-11/12 2xl:w-10/12 bg-dark bg-opacity-50 md:bg-transparent rounded-2xl bg h-full flex flex-col justify-center">
          <div className=" px-6 md:px-12">
            <div className=" w-11/12 md:w-5/12 2xl:w-4/12 ">
              <h1 className=" text-4xl md:text-6xl text-white font-regular">
                Learn a Thing or Two about Technology
              </h1>
              <p className="text-white mt-3">
                Broaden your tech perspective, knowledge and skills
              </p>
              <div className="mt-10">
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-10/12 md:w-8/12 2xl:w-7/12   items-center mx-auto   md:mt-12 py-24">
        <div className="grid grid-cols-12 items-center gap-y-6">
          <div className="col-span-12 md:col-span-5 space-y-6">
            <h1 className=" text-4xl md:text-6xl">Read Amaizing Tech Stories</h1>
            <p>
              Discover amazing tech stories that inspire and inform. Dive into
              the latest innovations, breakthrough technologies, and compelling
              narratives from the tech world. Stay updated and entertained with
              captivating tales of tech advancements and the people behind them
            </p>
            <button onClick={()=>{
                navigate('/stories')
              }} className=" font-medium flex space-x-2 items-center">
              <div className="border-b-2 border-primary">Start Reading</div>
              <AiOutlineArrowRight className="size-4 font-bold" />
            </button>
          </div>
          <div className=" col-span-1 md:col-span-2"></div>
          <div className=" col-span-11  md:col-span-5 ">
            <img className="" src="/stories.png" />
          </div>
        </div>
      </div>
      <div className=" bg-dark">
        <div className=" w-10/12 md:w-8/12 2xl:w-7/12  items-center mx-auto py-24">
          <div className="grid grid-cols-12 items-center gap-y-6">
            <div className=" col-span-11 md:col-span-5 order-last md:order-first ">
              <img src="/todo.png" />
            </div>
            <div className=" col-span-1 md:col-span-2"></div>
            <div className=" col-span-12 md:col-span-5 space-y-6 text-white ">
              <h1 className=" text-4xl md:text-6xl">
                Learn how to Do <span className="text-white">Tech</span> stuffs
              </h1>
              <p>
                Learn how to master various tech skills with our easy-to-follow
                guides. From coding and software implementation to the latest
                tech trends,
              </p>
              <button onClick={()=>{
                navigate('/howTo')
              }} className=" font-medium flex space-x-2 items-center">
                <div className="border-b-2 border-primary">Start Learning</div>
                <AiOutlineArrowRight className="size-4 font-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-10/12 md:w-8/12 2xl:w-7/12  items-center mx-auto  mt-12 py-24">
        <div className="grid grid-cols-12 items-center gap-y-6 ">
          <div className=" col-span-12 md:col-span-5 space-y-6">
            <h1 className=" text-4xl md:text-6xl">
              Get Tech events updates
            </h1>
            <p>
              Discover workshops, conferences, and meetups that will help you
              expand your knowledge and network with industry professionals.
            </p>
            <button onClick={()=>{
                navigate('/events')
              }} className=" font-medium flex space-x-2 items-center">
              <div className="border-b-2 border-primary">View Events</div>
              <AiOutlineArrowRight className="size-4 font-bold" />
            </button>
          </div>
          <div className=" col-span-1 md:col-span-2"></div>
          <div className=" col-span-11  md:col-span-5 ">
            <img src="/events.png" />
          </div>
        </div>
      </div>
      <div className=" w-10/12 md:w-8/12 2xl:w-7/12  items-center mx-auto  pt-0 py-24">
        <div className="grid grid-cols-12 items-center gap-y-6 ">
          <div className=" col-span-11 md:col-span-5 order-last md:order-first ">
            <img src="/website.png" />
          </div>
        <div className=" col-span-1 md:col-span-2"></div>
          <div className=" col-span-12 md:col-span-5 space-y-6">
            <h1 className=" text-4xl md:text-6xl">
            Order a website or an App
            </h1>
            <p>
            Get professional, high-quality design and development tailored to your needs.
            </p>
            <button onClick={()=>{
                  window.location.href = "https://wa.me/+255627707434";
              }} className=" font-medium flex space-x-2 items-center">
              <div className="border-b-2 border-primary">Order Now</div>
              <AiOutlineArrowRight className="size-4 font-bold" />
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HomePage;
