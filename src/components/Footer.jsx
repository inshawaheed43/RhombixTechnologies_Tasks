import React from 'react'
import { Link } from "react-router-dom"
import Home from "../Pages/Home"
import Contact from "./Contact"
import Projects from "./Projects"


export default function Footer() {
    return (
        <div>
            <div className="  flex items-center justify-center">

                <div className='w-[90vw] mt-28 h-20 flex flex-col items-center'>
                    <hr className='bdr-grad mt-4 w-[90vw]' />
                    <p className='text-2xl font-bold mt-4'>Insha Waheed</p>

                    <ul className='flex flex-row gap-4  text-white/40'>
                        <li className='hover:text-white/60 hover:underline duration-300 self-end'>
                            <Link to={Home}>
                                Home
                            </Link>
                        </li>
                        <li className='hover:text-white/60 hover:underline duration-300 self-end'>
                            <Link to={Projects}>
                                Projects
                            </Link>
                        </li>
                        <li className='hover:text-white/60 hover:underline duration-300 self-end'>
                            <Link to={Contact}>
                                Contact
                            </Link>
                        </li>
                    </ul>




                    {/* SOCIAL ICONS */}
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

                    <hr className='bdr-grad mt-4 w-[90vw]' />

                </div>

            </div>
        </div>
    )
}
