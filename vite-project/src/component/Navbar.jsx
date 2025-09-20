import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";


const Navbar = () => {
  return (
          <div className="d-flex justify-content-between align-items-center mt-4 md-4">
           <div> <h4>Tech-Shop</h4></div>
           <span className="d-flex">
             <h3><IoIosSearch /></h3>
            <h3><IoCartOutline /></h3>
            <h3><FaRegUser /></h3>
           </span>
          </div>
  )
}

export default Navbar