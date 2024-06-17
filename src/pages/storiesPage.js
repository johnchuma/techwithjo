import { useEffect, useState } from "react";
import { getStories } from "../controllers/storiesController";
import { timeAgo } from "../utils/timeAgo";
import { useNavigate } from "react-router-dom";

const StoriesPage = () => {
    const [stories,setStories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getStories().then((data)=>{
            setStories(data)
        })
    }, []);
    const [selectedtab, setselectedtab] = useState(0);
    return ( stories.length>1&&<div>
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="flex space-x-1">
                {["Recent","General","How to ?"].map((item,index)=>{
                    return <div className={`${selectedtab==index&&"bg-primary"} bg-opacity-10 cursor-pointer rounded-full text-sm py-1 px-3`}>{item}</div>
                })}
            </div>
            {}
            <div className="grid grid-cols-12 mt-4">
                <div className=" col-span-12 md:col-span-9 space-y-5">
                    
                     {stories.map((item)=>{
                        return <div onClick={()=>{
                            navigate(`/story/${item.title.replace(" ","-")}-${item.id}`)
                        }} className="grid grid-cols-12 items-start md:items-center gap-4 cursor-pointer md:pr-8">
                              <div className=" col-span-4">
                                <img className="md:h-48 h-24 rounded-lg object-cover w-full" src={item.image}/>
                              </div>
                              <div className=" col-span-8  md:space-y-2">
                                <h1 className=" text-base md:text-lg line-clamp-2 font-bold text-dark">{item.title}</h1>
                                <p className=" line-clamp-1 md:line-clamp-2 text-sm" dangerouslySetInnerHTML={{ __html:item.description }}></p>
                                <p className="text-muted text-sm">{timeAgo(item.createdAt.toDate())}</p>
                              </div>

                        </div>
                     })}
                </div>
                <div className="hidden md:block md:col-span-3 border-s border-border pl-8 space-y-5">
                {stories.map((item)=>{
                        return <div className="space-y-2 cursor-pointer">
                              
                                <img className="h-40 object-cover w-full" src={item.image}/>
                        
                              
                              <div className=" col-span-8 space-y-2">
                                <h1 className="  text-base line-clamp-2 font-bold text-dark ">{item.title}</h1>
                                <p className=" line-clamp-2 text-xs" dangerouslySetInnerHTML={{ __html:item.description }}></p>
                                <p className="text-muted text-xs">{timeAgo(item.createdAt.toDate())}</p>
                              </div>

                        </div>
                     })}
                </div>
            </div>
        </div>
    </div> );
}
 
export default StoriesPage;