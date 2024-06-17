import { useEffect, useState } from "react";
import { getStories, getStory } from "../controllers/storiesController";
import { timeAgo } from "../utils/timeAgo";
import { useNavigate, useParams } from "react-router-dom";

const ReadStory = () => {
  const [story, setStory] = useState(null);
  const { uuid } = useParams();
  const [stories,setStories] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
      getStories().then((data)=>{
          setStories(data)
      })
  }, []);
  useEffect(() => {
    const splits = uuid.split("-");

    getStory(splits[splits.length - 1]).then((data) => {
      setStory(data);
    });
  }, []);
  const [selectedtab, setselectedtab] = useState(0);
  return (
    story && (
      <div>
        <div className="w-11/12 md:w-10/12 mx-auto">
          
          <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-9 space-y-2 md:space-y-3 md:pr-8">
              <h1 className=" text-3xl md:text-3xl font-bold text-dark">{story.title}</h1>
              <p className="text-muted text-sm md:text-base ">
                {timeAgo(story.createdAt.toDate())}
              </p>
              <img className=" object-cover rounded-lg w-full" src={story.image} />
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: story.description }}
              ></p>
            </div>
            <div className="hidden md:block col-span-3 border-s border-border pl-8 space-y-5">
              {stories.map((item)=>{
                        return <div className="space-y-2 cursor-pointer">
                              
                                <img className=" h-40 rounded-lg object-cover w-full" src={item.image}/>
                        
                              
                              <div className=" col-span-8">
                                <h1 className="  text-base line-clamp-2 font-bold text-dark ">{item.title}</h1>
                                <p className=" line-clamp-2" dangerouslySetInnerHTML={{ __html:item.description }}></p>
                                <p className="text-muted text-xs">{timeAgo(item.createdAt.toDate())}</p>
                              </div>

                        </div>
                     })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ReadStory;
