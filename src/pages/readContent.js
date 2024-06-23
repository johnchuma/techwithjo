import { useEffect, useState } from "react";
import { getContent,  updateContent } from "../controllers/contentsController";
import { timeAgo } from "../utils/timeAgo";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Helmet } from "react-helmet";

const ReadContent = () => {
  const [content, setContent] = useState(null);
  const { uuid } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const splits = uuid.split("-");
    const id = splits[splits.length - 1]
    getContent(id).then((data) => {
      setContent(data);
      updateContent(id,{views:data.views+1})
    });
    
  }, []);
  return (
    content && (
      <div>
        <Helmet>
          <title>{content.seoTitle}</title>
          <meta name="description" content={content.seoDescription}/>
        </Helmet>
        <div className="w-11/12 md:w-7/12 mx-auto">
        <div className="flex justify-between items-center mt-3">
        <button onClick={()=>{
          navigate(-1)
        }} className="  flex space-x-2 items-center  py-12">
        <AiOutlineArrowLeft className="size-4 font-bold" />
                <div className="border-b-2 border-primary">Go Back</div>
              </button>
              <div>{content.views} Views</div>
        </div>
       
          <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-12 space-y-2 md:space-y-3 ">
              <h1 className=" text-3xl md:text-4xl font-medium text-dark">{content.title}</h1>
              <p className="text-dark md:text-base ">
                {timeAgo(content.createdAt.toDate())}
              </p>
              <img className=" object-cover rounded-2xl w-full" src={content.image} />
              <p
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: content.description }}
              ></p>
            </div>
            
          </div>
        </div>
      </div>
    )
  );
};

export default ReadContent;
