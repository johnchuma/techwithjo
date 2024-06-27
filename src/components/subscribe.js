import { useEffect, useState } from "react";
import { BsMailbox, BsSend } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { addSubscriber } from "../controllers/subscribersController";
import toast from "react-hot-toast";
import { sendWelcomeEmail } from "../controllers/emailController";

const Subscribe = ({ className }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {show && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true)
            addSubscriber({
              name: e.target.name.value,
              email: e.target.email.value,
            }).then((response)=>{
              setLoading(false)
              toast.success("Subscribed successfully")
              sendWelcomeEmail(e.target.email.value)
              setShow(false)
            });
          }}
          className="fixed z-30 inset-0 bg-black bg-opacity-50 text-dark"
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-10/12  md:w-4/12 2xl:w-3/12 bg-background rounded-2xl mx-auto p-6 md:p-16 flex flex-col shadow-xl justify-center items-center">
              <div className="flex justify-end w-full cursor-pointer">
                <IoIosClose
                  onClick={() => {
                    setShow(false);
                  }}
                  className="size-8"
                />
              </div>
              <HiOutlineMailOpen className="size-12 text-primary" />
              <h1 className=" text-3xl md:text-4xl text-center mt-4">
                Subscribe to receive daily updates
              </h1>
              <input
                placeholder="Enter your username"
                name="name"
                className="form-style mt-3"
              />
              <input
                placeholder="Enter your email address"
                name="email"
                className="form-style mt-3"
              />
              <button className=" py-3 rounded-full   text-dark w-full mt-6 bg-primary px-6 border border-dark flex justify-center items-center">
                {loading ? (
                  <div className="size-4 border-2 border-t-transparent rounded-full animate-spin border-dark"></div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </div>
        </form>
      )}

      <button
      type="submit"
        onClick={() => {
          setShow(true);
        }}
        className={
          className ??
          " py-3 rounded-full flex space-x-2 items-center border-black border cursor-pointer  text-black bg-primary px-8"
        }
      >
        <div>Subscribe</div>
        <BsSend className="size-3" />
      </button>
    </div>
  );
};

export default Subscribe;
