import React, { useEffect } from 'react'
import project1 from "../assets/Project1.png"
import project4 from "../assets/Project4.png"
import project3 from "../assets/Project3.png"
import Footer from './Footer'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
    gsap.registerPlugin(ScrollTrigger);
export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Homiees",
      description: "A personal project that helps rental to find desired rented places. ",
      dec1: "Have protected routes for Admin, Landlord & Tenant",
      dec2:"Made with MERN stack",
      image: project1,
      link: "https://homiees-beta.vercel.app/",
      link2:"https://github.com/inshawaheed43/Homiees"

    },
       {
      id: 2,
      title: "Demo Golf Website",
      description: "",
         dec1: "GSAP animations and transitions",
      dec2:"Technologies like HTML5/CSS3, GSAP and font-awesome library has been used.",
      image: project4,
link: "https://inshawaheed43.github.io/GolfSite-GSAP/",
      link2:"https://github.com/inshawaheed43/GolfSite-GSAP"

    },
       {
      id: 3,
      title: "Person Card Generator",
      description: "Made by JavaScript",
         dec1: "Enter your custom data like Image, name, skill & about.",
      dec2:"A custom card will came up!",
      image: project3,
      link: "https://inshawaheed43.github.io/Card-generator/",
      link2:"https://github.com/inshawaheed43/Card-generator"

    }
  ]



  useEffect(() => {
    gsap.from(".project-sec", {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power1.out",
      stagger: 0.4, // 🔥 shows one after another
      scrollTrigger: {
        trigger: ".project-sec",
        start: "top 70%",
      }
    })
  }, [])

  return (
    <div className=' mb-20'>

      <div className="w-full  min-h-screen  text-white pt-28 px-10">
        <h1 className="text-5xl font-bold mb-10 mt-10 ml-16">
          Projects
        </h1>

        {/* Your project grid */}
        <div className="grid grid-cols-1 sm:grid-rows-2 lg:grid-rows-3 gap-14">

          {projects.map((project)=>(


          <div key={project.id} className='project-sec w-auto h-[37vh] rounded-2xl mx-16 '>
{/*
img buttons links
*/}
<div className='flex flex-row bdr-grad m-6 gap-14'>

<img src={project.image} alt="" className=' w-[39vw] my-3 mx-3 overflow-none rounded-2xl '/>


<div className=' my-8 flex flex-col'>
<p className='font-bold text-2xl '>{project.title}</p>
<p className='w-[27vw]'>
  <ul>
  <li>{project.description}</li>
  <li>{project.dec1}</li>
  <li>{project.dec2}</li>
  </ul>
</p>
<div className='flex gap-3 flex-row'>

<button className='bg-blue-950 w-[12vw] duration-300 self-end hover:bg-blue-900 mt-4 p-3 cursor-pointer rounded-full' >
  <a href={project.link}>


  See Project
  </a>
</button>
<button className='bg-blue-950 w-[12vw] duration-300 self-end hover:bg-blue-900 mt-4 p-3 flex flex-col  cursor-pointer rounded-full' >
  <a href={project.link2}>

<span  >
<i class="fa-brands fa-github text-2xl"></i>
</span>
  GitHub Code
  </a>
</button>
</div>

</div>
</div>
          </div>
          ))}


          {/* <div className='border w-auto h-[35vh] rounded-2xl mx-16'>


          </div>
          <div className='border w-auto h-[35vh] rounded-2xl mx-16'>


          </div> */}


        </div>
      </div>

<Footer/>


</div>

    
  )
}
