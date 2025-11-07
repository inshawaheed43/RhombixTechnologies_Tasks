import React, { useEffect } from "react";
import Footer from "./Footer";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
    gsap.from(".left-sec", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power1.out",
      stagger: 0.6, // 🔥 shows one after another
      scrollTrigger: {
        trigger: ".left-sec",
        start: "top 80%",
      }
    }),
     gsap.from(".right-sec", {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power1.out",
      stagger: 0.6, // 🔥 shows one after another
      scrollTrigger: {
        trigger: ".right-sec",
        start: "top 80%",
      }
    })
  }, [])


  return (
    <div className="w-full min-h-screen pt-32 px-10">
    

      {/* Title Section */}
      <div className="max-w-[70vw] mx-auto flex flex-col lg:flex-row gap-3">

        {/* LEFT SIDE */}
        <div className=" left-sec flex-1 mx-8 my-7 p-6">
          <h1 className="text-5xl font-bold my-5">Get in Touch</h1>

          <p className="text-xl font-semibold mb-6">
            I'd like to hear from you!
          </p>

          <p className="text-lg w-[30vw] font-extralight ">
            If you have any inquiries or just want to say hi,
            please use the contact form!
          </p>

          {/* Email Section */}
          <div className="mt-10 flex items-center gap-2">
            <i className="fa-regular fa-envelope text-xl"></i>
            <a
              href="mailto:waheedinsa02@gmail.com"
              className="underline text-lg hover:text-blue-900 duration-200 self-end"
            >
              waheedinsha02@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-2  flex gap-5 text-3xl">

                        <div className='border rounded-full w-[3vw] h-[6vh] flex items-center justify-center'>
                            <a href="https://github.com/inshawaheed43">

                                <i className="fa-brands fa-github cursor-pointer hover:text-blue-900 text-3xl rounded-full duration-200 self-end"></i>
                            </a>

                        </div>

                        <div className='border rounded-full w-[3vw] h-[6vh] flex items-center justify-center'>


                            <a href="https://www.linkedin.com/in/insha-w-6a382530b/">

                                <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-900 text-3xl duration-200 self-end"></i>
                            </a>
                        </div>
                    </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="flex-1 mt-10 right-sec">
          <form className="flex flex-col gap-6">

            {/* Name Inputs */}
            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-1/2">
                <label className="mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  className="border bdr-grad border-blue-950 p-3 rounded-md bg-transparent focus:outline-none"
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  className="border bdr-grad p-3 rounded-md bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Email *</label>
              <input
                type="email"
                className="border bdr-grad p-3 rounded-md bg-transparent focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Message</label>
              <textarea
                className="border bdr-grad p-3 h-40 rounded-md bg-transparent focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Send Button */}
            <button className=" cursor-pointer px-4 w-[9vw] py-2 items-center  bg-blue-950 text-white rounded-full font-semibold flex-row gap-3 flex hover:bg-blue-900 duration-200 self-end">
            
            <span className="bg-white rounded-full p-2 "><i class="fa-solid fa-arrow-right text-black "></i>
              </span>  
              Send
            </button>

          </form>
        </div>

      </div>

      <Footer/>
    </div>
  );
}
