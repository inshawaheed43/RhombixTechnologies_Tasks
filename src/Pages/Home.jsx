import React from 'react'
import img1 from '../assets/img-set1.png'
import img4 from "../assets/img4.png"
import { Link } from "react-router-dom"
import project1 from "../assets/Project1.png"
import project4 from "../assets/Project4.png"
import project3 from "../assets/Project3.png"
import skill1 from "../assets/skill1.png"
import skill2 from "../assets/skill2.png"
import skill3 from "../assets/skill3.png"
import skill4 from "../assets/skill4.png"
import skill5 from "../assets/skill5.png"
import Footer from "../components/Footer"
// import Cursor from '../components/cursor.jsx'



export default function Home() {
  // ✅ Your project data (edit this anytime)
  const projectsData = [
    {
      id: 1,
      title: "Homiees",
      description: "A personal project, created with MERN stack. Having security authentications and protected role based profiles",
      image: project1,
      link: "Projects",
      // link: "https://homiees-beta.vercel.app/"
    },
    {
      id: 2,
      title: "Demo Golf Site",
      description: "A demo site for Golf, created by GSAP with some better soothing animations!",
      image: project4,
      // link: "https://inshawaheed43.github.io/GolfSite-GSAP/"
      link: "Projects",
    },
    {
      id: 3,
      title: "Person Card Generator",
      description: "A simple card generator, made by JavaScript. By entering your specific data, you'll get your own card.",
      image: project3,
      // link: "https://inshawaheed43.github.io/Card-generator/"
      link: "Projects",
    },

  ];

  return (
    <div>
      {/* <Cursor/> */}
      {/* INTRO DIV */}
      <div className='  w-[90vw] ml-20 mr-20 mt-10 h-[90vh] align-middle justify-between flex flex-col items-center'>

        {/* div for name and pic */}
        <div className='flex flex-col position relative items-center top-[8vw] h-[80vh]'>
          <img src={img4} alt="" className='w-[50vw]' />
          <h1 className='text-[20vw] position relative top-[-44vh] name-head'>
            Insha W.
          </h1>

        </div>

        {/* div for two section for about */}
        <div className='position top-[-64vh] relative w-[90vw] h-[35vh] flex flex-row items-center align-middle justify-center gap-[20vw]'>

          <section className='float-left w-[35vw] h-[30vh] '>
            <p className='shadow-lg rounded-4xl text-center gap-2 position relative flex flex-row pl-4 pt-2 pb-2 pr-2  bg-blue-950 w-[13vw]'><span className='bg-white border h-4 shadow-2xl rounded-xl top-[0.4vh] position relative w-4'></span>Available for Work</p>
            <h1 className='text-[35px] font-bold '>Frontend Developer <br /> & Jr MERN Stack Developer <br />from Pakistan.</h1>

          </section>
          <section className='float-right w-[30vw] h-[30vh] '>


            <p className='text-xl'>Hi! I'm Insha Waheed - Frontend Developer and junior MERN Stack Developer aimed at creating seamless user experience and frontend, that actually interacts.  </p>

            <Link to="/projects" className=''>
              <div className=' flex bg-blue-950 hover:bg-blue-900 duration-300 mt-6 flex-row items-center w-[13vw] h-[8vh] pr-2 rounded-4xl justify-center gap-2'>
                <span className='bg-white w-12 h-12 items-center align-middle justify-center flex rounded-4xl '>

                  <i class="fa-solid fa-arrow-right text-black "></i>
                </span>
                See My Projects
              </div>
            </Link>

          </section>
        </div>
      </div>
      {/* aBOUT SECTIONS */}
      <div className=' w-[90vw] ml-20 mr-20 mt-16 h-[90vh] align-middle justify-between flex flex-col items-center'>

        <div className=' w-[90vw]  flex flex-row h-60vh mt-24'>

          <div className='flex mt-7 ml-5 flex-col  w-[40vw] '>
            <h1 className='text-5xl font-bold '>I work for Money - That's about me!</h1>
            <p className='w-[35vw] text-[15px] mt-4'>The statement is odd - but everyone does the same! I love to earn money, but I also love to play with errors & mistakes. That may I do intentionally!
              <br /><br />
              <span className='text-[20px]'>
                Well, CutOff, I'm actaully a <b>Frontend Developer</b> - That means I have experience of creating interactive UI/UX with React.js. I can manage some <b>Backend Relations</b> with APIs.
              </span>
            </p>

            <Link to="/projects" className=''>
              <div className=' flex hover:bg-blue-900 duration-300  bg-blue-950 mt-3 flex-row items-center w-[13vw] h-[8vh] pr-2 rounded-4xl justify-center gap-2'>
                <span className='bg-white w-12 h-12 items-center align-middle justify-center flex rounded-4xl '>

                  <i class="fa-solid fa-arrow-right text-black "></i>
                </span>
                See My Projects
              </div>
            </Link>


          </div>




          <img src={img1} alt="" className='w-[45vw] h-[50vh] rounded-3xl  ' />
        </div>



      </div>
      {/* Education Section */}
      <div className=' flex items-center justify-center'>
        <div className='  w-[90vw] h-auto gap-10 p-5  flex flex-row'>
          <div className='float-left flex flex-col w-[38vw] gap-5  h-[90vh]  p-5'>
            <h1 className='flex text-5xl font-bold '>Education</h1>

            <div className='bdr-grad border w-[30vw] h-auto p-3 rounded-xl'>
              <h2 className='font-bold text-lg bg-blue-950 w-[13vw] p-1 flex flex-row gap-4 justify-center items-center rounded-4xl  mb-3 '> <span className='w-4 rounded-2xl h-4 bg-white'></span>Bachelor's in IT</h2>
              <p> Studied at <b>Govt Collge University, Faisalabad</b></p>
              <p>CGPA Attained <b>3.2</b></p>



              <div className=' mt-4 flex flex-col  justify-center rounded-4xl gap-4 ' >

                <p className=' bg-blue-950   py-2 px-4 rounded-4xl  '>
                  System Desings & RDBMS
                </p>
                <p className=' bg-blue-950 py-2 px-4  rounded-4xl  '>
                  Learned about Modern Web Development
                </p>
                <p className='  bg-blue-950 py-2 px-4 rounded-4xl' >
                  Group Management & Communication
                </p>
              </div>
            </div>
            <div className='border bdr-grad w-[30vw] h-auto p-3 rounded-xl'>
              <h2 className='font-bold text-lg bg-blue-950 w-[9vw] p-1 flex flex-row gap-4 justify-center items-center rounded-4xl mb-3 '> <span className='w-4 rounded-2xl h-4 bg-white'></span> FSc. Eng</h2>
              <p>Studied at <b>Govt. College for Women</b></p>
              <p>Marks Attained <b>60%</b></p>

            </div>
            <div className='border bdr-grad w-[30vw] h-auto p-3 rounded-xl'>
              <h2 className='font-bold text-lg bg-blue-950 w-[14vw] p-1 flex flex-row gap-4 justify-center items-center rounded-4xl mb-3 '> <span className='w-4 rounded-2xl h-4 bg-white'></span> Matric in Science</h2>
              <p>
                Studied in <b>Lincoln Grammar School </b>

              </p>
              <p> Marks attained <b>89%</b>
              </p>

            </div>



          </div>

          {/* CERTIFICATIONS */}
          <div className='float-right w-[50vw] gap-10  h-[90vh]  p-5'>
            <h1 className='flex text-5xl font-bold '>Certifications</h1>
            <div className="relative p-4 mt-4">

              <h2 className='text-2xl'>
                Responsive Web Design
                <span className='float-right text-[18px]'>
                  <b>By FreeCodeCamp</b>
                </span>
              </h2>

              <ul className=' list-item text-[16px] mt-2'>
                <li>Learned about Media Queries</li>
                <li>CSS Animations and Transitions Properties</li>
                <button className='mt-3 bg-white/75 text-blue-950 hover:text-white hover:bg-white/55 duration-300 self-end rounded-full p-2 px-5'><a href="https://www.freecodecamp.org/certification/inshawaheed4/responsive-web-design">
                  <span><i class="fa-solid fa-ribbon text-xl "></i></span>Show Certificate</a></button>
              </ul>

              {/* Gradient Bottom Border */}
              <div className="absolute left-0 bottom-0 w-full h-[1px]
                  bg-gradient-to-r from-blue-900 to-blue-200
                  rounded-b-4xl"></div>
            </div>


            <div className="relative p-4 mt-2">

              <h2 className='text-2xl'>
                CCST Cybersecurity
                <span className='float-right text-[18px]'>
                  <b>By CISCO</b>
                </span>
              </h2>

              <ul className=' list-item text-[16px] mt-2'>
                <div>

                  <li>Network Troubleshooting</li>
                  <li>System Audits & Types of Attacks</li>
                  <li>Network Types and Possible vulnerabilities</li>
                </div>

                <button className='mt-3 bg-white/75 text-blue-950 hover:text-white hover:bg-white/55 duration-300 self-end rounded-full p-2 px-5'><a href="https://www.credly.com/badges/12bbd2b9-52ea-40c3-a4b4-742f01782f0f/public_url">
                  <span><i class="fa-solid fa-ribbon text-xl "></i></span>Show Certificate</a></button>
              </ul>

              {/* Gradient Bottom Border */}
              <div className="absolute left-0 bottom-0 w-full h-[1px]
                  bg-gradient-to-r from-blue-900 to-blue-200
                  rounded-b-4xl"></div>
            </div>


            <div className="relative p-4 mt-2">

              <h2 className='text-2xl'>
                Introduction to CSS
                <span className='float-right text-[18px]'>
                  <b>By SoloLearn</b>
                </span>
              </h2>

              <ul className=' list-item text-[16px] mt-2'>
                <div>

                  <li>Basic CSS Properties</li>
                  <li>Wokring with HTML</li>
                  <li> Styled a normal webpage</li>
                </div>

                <button className='mt-3 bg-white/75 text-blue-950 hover:text-white hover:bg-white/55 duration-300 self-end rounded-full p-2 px-5'><a href="https://www.sololearn.com/certificates/CC-KFB7PGQO">
                  <span><i class="fa-solid fa-ribbon text-xl "></i></span>Show Certificate</a></button>
              </ul>

              {/* Gradient Bottom Border */}
              <div className="absolute left-0 bottom-0 w-full h-[1px]
                  bg-gradient-to-r from-blue-900 to-blue-200
                  rounded-b-4xl"></div>
            </div>


          </div>


        </div>
      </div>
      {/* PROJECTS SECTION */}
      <div className="w-[90vw] mx-auto my-24">
        <h1 className="text-5xl font-bold mb-10">What I've Created</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative group w-full h-[360px] rounded-xl overflow-hidden "
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              {/* Blurred Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-200 text-sm mb-4">
                  {project.description}
                </p>

                <Link to={project.link}>
                  <button className="px-5 py-2 bg-blue-950 rounded-full shadow-2xl font-semibold hover:bg-blue-900 duration-200">
                    See Project
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* Skills section */}
      <div className='flex items-center align-middle justify-center'>
        <div className="
 w-full h-[50vh] ">
          <h1 className='text-5xl font-bold text-center mb-4'>Skills</h1>



          <div
            className=' items-center gap-6 align-middle justify-center flex flex-row'>

            <div className="bdr-grad  p-2 items-center flex flex-col justify-center m-2 rounded-2xl w-[15vw] h-[20vw] ">
              <img src={skill4} className='rounded-full w-[10vw] h-[20vh]' alt="" />


              <h1 className='text-2xl font-bold '>JavaScript</h1>
              <div className='mt-3 w-auto h-auto'>
                <p>Skill Level: <span className=' font-bold'>75%</span> </p>
                <p>- DOM Mnipulation </p>
                <p>- <b>Async & Sync</b> Functions </p>
              </div>
            </div>
            <div className="bdr-grad p-2 items-center flex flex-col justify-center m-2 rounded-2xl w-[15vw] h-[20vw]">

              <img src={skill5} className='rounded-full w-[10vw] h-[20vh]' alt="" />


              <h1 className="text-2xl font-bold ">React JS</h1>
              <div className=' mt-3 w-auto h-auto'>
                <p>Skill Level: <span className=' font-bold'>65%</span> </p>
                <p>- Virtual DOM Manipulation</p>
                <p>-React + Vite Integration</p>
              </div>
            </div>
            <div className=" bdr-grad p-2 items-center flex flex-col justify-center m-2 rounded-2xl w-[15vw] h-[20vw] ">
              <img src={skill3} className='rounded-full w-[10vw] h-[20vh]' alt="" />


              <h1 className='text-2xl font-bold '>Tailwind CSS</h1>
              <div className=' mt-3 w-auto h-auto  '>
                <p>Skill Level: <span className=' font-bold'>70%</span> </p>
                <p>
                  - Animations and Styling
                </p>
                <p>
                  - Multiple Integration
                </p>

              </div>
            </div>
            <div className="bdr-grad p-2 items-center flex flex-col justify-center m-2 rounded-2xl w-[15vw] h-[20vw] ">
              <img src={skill2} className='rounded-full w-[10vw] h-[20vh]' alt="" />


              <h1 className='text-2xl font-bold '>CSS</h1>
              <div className=' mt-3 w-auto h-auto '>
                <p>Skill Level: <span className=' font-bold'>90%</span> </p>
                <p>- Styling & Responsiveness</p>
                <p>- Animations & Transitions</p>
              </div>
            </div>
            <div className="bdr-grad p-2 items-center flex flex-col justify-center m-2 rounded-2xl w-[15vw] h-[20vw]">
              <img src={skill1} className='rounded-full w-[10vw] h-[20vh] position relative top-[-3vh] ' alt="" />


              <h1 className='text-2xl font-bold '>HTML</h1>
              <div className=' w-auto h-auto flex flex-row '>
                <p>Skill Level: <span className=' font-bold'>100%</span> </p>
              </div>
            </div>

          </div>










        </div>




      </div>



{/* FOOTER */}

<Footer/>


    </div>
  )
}
