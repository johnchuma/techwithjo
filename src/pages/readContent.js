import { useEffect, useState } from "react";
import { getContent, updateContent } from "../controllers/contentsController";
import { timeAgo } from "../utils/timeAgo";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Helmet } from "react-helmet";
import moment from "moment";

const ReadContent = () => {
  const [content, setContent] = useState(null);
  const { uuid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const splits = uuid.split("-");
    const id = splits[splits.length - 1];
    getContent(id).then((data) => {
      setContent(data);
      updateContent(id, { views: data.views + 1 });
    });
  }, []);
  return (
    content && (
      <div>
        <Helmet>
          <title>{content.seoTitle}</title>
          <meta name="description" content={content.seoDescription} />
          <meta name="image" content={content.image} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={content.seoTitle} />
          <meta name="twitter:description" content={content.seoDescription} />
          <meta name="twitter:site" content="@johnvchuma" />
          <meta name="twitter:creator" content="@johnvchuma" />
          <meta name="twitter:image" content={content.image} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={content.seoTitle} />
          <meta property="og:description" content={content.seoDescription} />
          <meta property="og:image" content={content.image} />
          <meta property="og:url" content={content.url} />
          <meta property="og:site_name" content="@johnvchuma" />

          <meta name="author" content="John Vedastus Chuma" />
          <meta name="keywords" content={content.description.replace(/ /g,", ")} />
          <meta
            property="article:published_time"
            content={moment(content.createdAt.toDate()).format('yyy, MMM DD')}
          />
          <meta property="article:author" content="John Vedastus Chuma" />
          <meta property="article:section" content={content.description} />
          <link rel="canonical" href={`https://www.techwithjo/${uuid}`} />
        </Helmet>
        <div className="w-11/12 md:w-7/12 2xl:w-7/12 mx-auto">
          <div className="flex justify-between items-center md:mt-3">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="  flex space-x-2 items-center pb-6 md:py-12"
            >
              <AiOutlineArrowLeft className="size-4 font-bold" />
              <div className="border-b-2 border-primary">Go Back</div>
            </button>
            <div>{content.views} Views</div>
          </div>

          <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-12 space-y-2 md:space-y-3 ">
              <h1 className=" text-3xl md:text-4xl font-medium text-dark">
                {content.title}
              </h1>
              <p className="text-dark md:text-base ">
                {timeAgo(content.createdAt.toDate())}
              </p>
              <img
                className=" object-cover rounded-2xl w-full"
                alt={content.title}
                src={content.image}
              />
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
