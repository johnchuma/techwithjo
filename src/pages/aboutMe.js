const AboutMe = () => {
  return (
    <div>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="grid grid-cols-12 gap-y-4">
          <div className=" col-span-12 md:col-span-9 space-y-4  md:pr-4">
            <h1 className=" text-2xl md:text-3xl  font-bold text-dark ">Who is John Chuma ?</h1>
            <div className="md:pr-0 pr-28">
            <img className="rounded-lg  " src="me.png" />

            </div>
            <p className="text-textColor">
              My name is John Vedastus Chuma. I am a software developer,
              blogger, YouTuber, and influencer. Currently, I work as a software
              developer at Smart Africa Group in Tanzania. My coding journey
              began in 2021, and since then, I have gained experience working
              with various startups, including Silabu and ShuleYetu. Now, I am
              proud to be part of the team at Smart Africa Group, one of the
              leading companies in the region. Through my work and online
              presence, I aim to inspire and educate others about the world of
              technology and software development.
            </p>
            <div className="space-y-2">
              <h1 className="font-bold text-lg text-dark ">Hobbies</h1>
              <p className="text-textColor">
                In my free time, I have a variety of hobbies that keep me
                engaged and balanced. I enjoy fitness exercises, which help me
                stay healthy and focused. Music is another passion of mine; I
                find it both relaxing and inspiring. Coding is not just my
                profession but also a hobby that I deeply enjoy, allowing me to
                continuously learn and create. I have a keen interest in
                business, exploring new ideas and strategies that can drive
                success. Lastly, reading is one of my favorite pastimes,
                providing me with knowledge and new perspectives.
              </p>
            </div>
          </div>
          <div className=" col-span-12 md:col-span-3 border-l border-border pl-4">
          <div className="space-y-2">
            <h1 className="font-bold text-lg text-dark ">Skills</h1>
            <div className="flex flex-wrap">
                {["React","Tailwind CSS","Solidity"," Node JS", "Express", "MySQL","Mongo DB","Flutter","Kotlin","Firebase","Git","AWS"].map((item)=>{
                    return <div className="text-sm py-1 px-1 bg-gray-100 rounded-full me-1 mb-1">{item}</div>
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
       


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
