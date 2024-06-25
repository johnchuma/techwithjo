import { useState } from "react";
import { Helmet } from "react-helmet";

const AboutMe = () => {
  const [selectedtab, setselectedtab] = useState(0);

  return (
    <div>
      <Helmet>
        <title>{"Who is John Vedastus Chuma ?"}</title>
        <meta
          name="description"
          content={`John Vedastus Chuma is a multifaceted professional with a
                  robust presence in the technology and digital content creation
                  fields. He works as a software developer at Smart Africa Group
                  in Tanzania, a leading company in the region. His journey into
                  coding started in 2021, and since then, he has accumulated
                  significant experience by working with various startups,
                  including Silabu and ShuleYetu. In addition to his
                  professional role, John is an active blogger and YouTuber,
                  utilizing his online platforms to inspire and educate others
                  about technology and software development. His passion for
                  tech extends beyond his career, making coding a hobby he
                  thoroughly enjoys.`}
        />
      </Helmet>
      <div className="w-11/12 md:w-8/12 2xl:w-7/12 mx-auto">
        <div className="flex space-x-1 justify-end  md:pt-12">
          {["General", "Skills", "Contacts"].map((item, index) => {
            return (
              <div
                onClick={() => {
                  setselectedtab(index);
                }}
                className={`${
                  selectedtab == index && "border border-dark "
                } bg-opacity-10 cursor-pointer rounded-full py-1 px-2 md:text-base text-sm md:px-6`}
              >
                {item}
              </div>
            );
          })}
        </div>
        {selectedtab == 0 && (
          <div>
            <h1 className="text-4xl md:text-7xl text-center py-6 md:py-12">Who is John Chuma ?</h1>
            <div className="grid grid-cols-12 gap-y-4">
              <div className=" col-span-12 md:col-span-12 space-y-4  md:pr-4">
                <div className=" w-6/12 md:w-full">
                  <img className="rounded-xl  " src="me.png" alt="John Vedastus Chuma" />
                </div>
                <p className="">
                  John Vedastus Chuma is a multifaceted professional with a
                  robust presence in the technology and digital content creation
                  fields. He works as a software developer at Smart Africa Group
                  in Tanzania, a leading company in the region. His journey into
                  coding started in 2021, and since then, he has accumulated
                  significant experience by working with various startups,
                  including Silabu and ShuleYetu. In addition to his
                  professional role, John is an active blogger and YouTuber,
                  utilizing his online platforms to inspire and educate others
                  about technology and software development. His passion for
                  tech extends beyond his career, making coding a hobby he
                  thoroughly enjoys.
                </p>
                <div className="space-y-2">
                  <h1 className="font-medium text-2xl text-dark ">Hobbies</h1>
                  <p className="">
                    Outside of his professional interests, John engages in
                    several hobbies that keep him balanced and motivated. He is
                    dedicated to fitness exercises for health and focus, finds
                    relaxation and inspiration in music, and has a deep interest
                    in business and innovative strategies. Reading is another
                    one of his favored activities, providing him with continuous
                    learning and new perspectives. John Vedastus Chuma
                    exemplifies a commitment to growth and knowledge, both in
                    his professional endeavors and personal interests, making a
                    significant impact in the tech community and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedtab == 1 && (
          <div>
            <h1 className="text-4xl md:text-7xl text-center py-6 md:py-12">Skills?</h1>
            <p className="">
              John Vedastus Chuma has developed a diverse skill set through
              years of programming and coding. His expertise includes:
            </p>
            <div className="flex flex-wrap pt-4">
              {[
                "React",
                "Tailwind CSS",
                "Solidity",
                " Node JS",
                "Express",
                "MySQL",
                "Mongo DB",
                "Flutter",
                "Kotlin",
                "Firebase",
                "Git",
                "AWS",
              ].map((item) => {
                return (
                  <div className=" py-1 px-4 border border-dark  rounded-full me-1 mb-1">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {selectedtab == 2 && (
          <div>
            <h1 className=" text-4xl md:text-7xl text-center py-6 md:py-12">Contacts?</h1>

            <div className="">
              <p>johnvchuma@gmail.com</p>
              <p>+255 627 707 434</p>
              <p>Dar es salaam, Tanzania</p>
            </div>
          </div>
        )}
      </div>
      {/* <div className=" col-span-12 md:col-span-3 border-l border-border pl-4">
          <div className="space-y-2">
            <h1 className="font-bold text-lg text-dark ">Skills</h1>
            <div className="flex flex-wrap">
                {["React","Tailwind CSS","Solidity"," Node JS", "Express", "MySQL","Mongo DB","Flutter","Kotlin","Firebase","Git","AWS"].map((item)=>{
                    return <div className=" py-1 px-1 bg-gray-100 rounded-full me-1 mb-1">{item}</div>
                })}
            </div>
            </div>
            <div className="space-y-2 mt-3">
            <h1 className="font-bold text-lg text-dark ">Contacts</h1>
            <div className="text-textColor">
                <p>johnvchuma@gmail.com</p>
                <p>+255 627 707 434</p>
                <p>Dar es salaam, Tanzania</p>
            </div>
            </div>
       


          </div> */}
    </div>
  );
};

export default AboutMe;
