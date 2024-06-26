import { useEffect, useState } from "react";
import { getStories } from "../controllers/contentsController";
import { timeAgo } from "../utils/timeAgo";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { categories } from "../utils/arrays";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const ContentsPage = () => {
  const [contents, setContents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getStories().then((data) => {
      setContents(data);
    });
  }, []);
  const [selectedtab, setselectedtab] = useState(0);
  const filteredData = contents.filter((item)=>selectedtab!=0?categories[selectedtab]==item.category:true)
  return (
    (
      <div>

        <div className="w-11/12 md:w-8/12 2xl:w-7/12 mx-auto">
        <div className="md:block hidden">
        <div className="flex space-x-1 justify-end pt-12  ">
            {categories.map((item, index) => {
              return (
                <div
                onClick={()=>{
                    setselectedtab(index)
                }}
                  className={`${
                    selectedtab == index && "border border-dark "
                  } bg-opacity-10 cursor-pointer rounded-full py-1 px-4`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" text-3xl md:text-7xl text-center md:py-12 hidden md:block">
          Tech Stories
        </div>
        <div className=" md:hidden block">
        <div className="flex justify-between pb-6 text-sm">
        <button
              
              className="  flex space-x-2 items-center "
            >
              <div className="border-b-2 border-primary">Tech Stories</div>
            </button>
         <BsThreeDotsVertical/>
        </div>
        </div>
       

          {filteredData.length > 0 && (
            <div className=" cursor-pointer" onClick={()=>{
                navigate(
                   `/read/${filteredData[0].title.replace(/ /g, "-")}-${contents[0].id}`
                  );
            }}>
              <h1 className=" text-3xl md:text-3xl md:line-clamp-2 font-medium text-dark">
                {filteredData[0].title}
              </h1>

              <img
                className=" md:h-[60vh] rounded-2xl object-cover w-full mt-3"
                src={filteredData[0].image}
              />
              <p
                className=" line-clamp-1 md:line-clamp-2 md:text-lg mt-3"
                dangerouslySetInnerHTML={{ __html: filteredData[0].description }}
              ></p>
              <button className="  md:text-base text-sm flex space-x-2 items-center mt-3">
                <div className="border-b-2 border-primary">Read more</div>
                <AiOutlineArrowRight className="size-4 font-bold" />
              </button>
            </div>
          )}
          <div className="grid grid-cols-12 mt-12">
            <div className=" col-span-12  space-y-5">
              {filteredData.map((item,index) => {
                return index!=0&& (
                  <div
                    onClick={() => {
                      navigate(
                        `/read/${item.title.replace(/ /g, "-")}-${item.id}`
                      );
                    }}
                    className="grid grid-cols-12 items-start md:items-center gap-3 md:gap-6 cursor-pointer md:pr-8"
                  >
                    <div className=" col-span-4">
                      <img
                        className="md:h-48 h-24 rounded-xl object-cover w-full"
                        src={item.image}
                      />
                    </div>
                    <div className=" col-span-8  md:space-y-2">
                        <div className="flex justify-between md:items-start ">
                        <h1 className=" text-base md:text-xl line-clamp-2 w-8/12 font-medium text-dark">
                        {item.title}
                      </h1> 
                      <p className=" w-4/12 text-sm md:text-base text-end">{timeAgo(item.createdAt.toDate())}</p>

                        </div>
                     
                      <p
                        className=" md:text-base text-sm line-clamp-1 md:line-clamp-2 "
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                      <button className="  flex space-x-2 items-center mt-1 md:mt-3">
                        <div className="border-b-2 md:text-base text-sm border-primary">
                          Read More
                        </div>
                        <AiOutlineArrowRight className="size-4 font-bold" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ContentsPage;
