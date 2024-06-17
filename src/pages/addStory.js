import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addStory } from "../controllers/storiesController";
import { getLink } from "../utils/getLink";

const AddStory = () => {
  const [uploading, setUploading] = useState(false);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  return (
    <div>
      <div className="w-11/12 md:w-10/12 mx-auto ">
        <h1 className=" text-2xl font-bold mb-4">New Story</h1>
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
                seoDescription: e.target.seoDescription.value,
                description
              };
              addStory(data).then((response) => {
                e.target.title.value = "";
                e.target.category.value = "";
                e.target.seoTitle.value = "";
                e.target.seoDescription.value = "";
                setDescription(null)
                setImage(null)
                setUploading(false);
              });
            });
          }}
          className="space-y-2"
        >
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
            className="rounded bg-gray-50 w-full flex cursor-pointer flex-col border border-border py-6 justify-center items-center"
          >
            {image == null ? (
              <div className=" flex flex-col justify-center items-center">
                <FaCloudUploadAlt className="size-12 text-primary" />
                <p className="text-sm">Upload story image</p>
              </div>
            ) : (
              <img className="h-48" src={URL.createObjectURL(image)} />
            )}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm">Story title</label>
              <input name="title" className="form-style" />
            </div>
            <div className="space-y-1">
              <label className="text-sm">Story Category</label>
              <select name="category" className="form-style">
                <option>Select category</option>
                {["General", "How to ?"].map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm">SEO meta Title</label>
            <input name="seoTitle" className="form-style" />
          </div>
          <div className="space-y-1">
            <label className="text-sm">SEO meta Description</label>
            <textarea name="seoDescription" className="form-style" />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Story description</label>

            <ReactQuill
              
              value={description}
              onChange={setDescription}
              className="form-style text-base"
            />
          </div>
          <button
            type="submit"
            className="w-48 py-2 bg-primary text-white text-sm justify-center flex rounded-full"
          >
            {uploading ? (
              <div className="size-4 border-2 border-t-transparent rounded-full animate-spin border-white"></div>
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

export default AddStory;
