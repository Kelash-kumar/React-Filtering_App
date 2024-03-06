import './Nav.css';
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className='w-full  h-16 flex justify-around align-middle  text-black pt-4 fixed -z-10 '>
      <input type="text" placeholder="Search..."  className='
      w-1/4 h-10 bg-gray-300  borde-none text-black text-center rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50  
      '/>
      <div className="nav_icons flex justify-between align-middle gap-5 text-2xl ">
        <FaUserAlt className="icon text-gray-500" />
        <FaShoppingCart className="icon text-gray-500" />
        <FaSearch className="icon text-gray-500" />
      </div>
      </nav>
  )
}

export default Nav