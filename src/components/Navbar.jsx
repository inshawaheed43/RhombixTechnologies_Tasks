
import { Link } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Navbar() {
  return (
    <div className=''>
<div className='w-[40vw] flex flex-row justify-center align-middle float-left h-24 position relative rounded-4xl top-[3vh] gap-10 items-center '>

      <span className='text-[30px] bg-white rounded-md p-2 '>

        <i class="fa-solid fa-terminal text-black" ></i>
      </span>




      <ul className='flex flex-row gap-10 text-[23px]'>

        <li>
          <Link to="/">
            Home
          </Link>

        </li>


        <li>

          <Link to="/projects">
            Projects
          </Link>
        </li>


        <li>

          <Link to="/contact">
            Contact</Link>

        </li>





      </ul>
</div>
    </div>
  )
}
