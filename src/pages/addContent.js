import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addContent } from "../controllers/contentsController";
import { getLink } from "../utils/getLink";
import { categories } from "../utils/arrays";

const AddContent = () => {
  const [uploading, setUploading] = useState(false);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  return (
    <div>
      <div className="w-11/12 md:w-8/12 mx-auto ">
        <h1 className=" text-6xl  mb-4 text-center py-12">New Content</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUploading(true);
            getLink(image).then((link) => {
              const data = {
                image: link,
                title: e.target.title.value,
                category: e.target.category.value,
                seoTitle: e.target.seoTitle.value,
                type:e.target.type.value,
                seoDescription: e.target.seoDescription.value,
                description,
                video:"",
                readTime:6,
                views:0,
                comments:[],
                
              };
              addContent(data).then((response) => {
                e.target.title.value = "";
                e.target.category.value = "";
                e.target.type.value = "";
                e.target.seoTitle.value = "";
                e.target.seoDescription.value = "";
                setDescription(null)
                setImage(null)
                setUploading(false);
              });
            });
          }}
        >
          <div className="space-y-2">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            id="file"
            className="sr-only"
          />
          <label
            for="file"
            className="rounded w-full flex cursor-pointer flex-col border border-dark py-6 justify-center items-center"
          >
            {image == null ? (
              <div className=" flex flex-col justify-center items-center">
                <FaCloudUploadAlt className="size-12 text-primary" />
                <p className="">Upload story image</p>
              </div>
            ) : (
              <img className="h-48" src={URL.createObjectURL(image)} />
            )}
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="">Title</label>
              <input name="title" className="form-style" />
            </div>
            <div className="space-y-1">
              <label className="">Type</label>
              <select name="type" className="form-style">
                <option>Select category</option>
                {["Story", "How to ?","Event"].map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="space-y-1">
              <label className="">Category</label>
              <select name="category" className="form-style">
                <option>Select category</option>
                {categories.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="">SEO meta Title</label>
            <input name="seoTitle" className="form-style" />
          </div>
          <div className="space-y-1">
            <label className="">SEO meta Description</label>
            <textarea name="seoDescription" className="form-style" />
          </div>
          <div className="space-y-1">
            <label className="">Description</label>

            <ReactQuill
              style={{fontSize:20}}
              value={description}
              onChange={setDescription}
              className=" border border-dark rounded focus:border-primary focus:ring-primary text-lg"
            />
          </div>
          </div>
       
          <button
            type="submit"
            className="w-52 py-3 bg-primary border border-dark text-dark  justify-center flex rounded-full mt-6"
          >
            {uploading ? (
              <div className="size-4 border-2 border-t-transparent rounded-full animate-spin border-dark"></div>
            ) : (
              "Create story"
            )}
          </button>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default AddContent;
