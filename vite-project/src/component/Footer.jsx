import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='container'>
        <div className='row d-flex justify-content-around bg-dark text-light text-start'>
            <div className='col-4 '>
                <h2>Tech-Shop</h2>
                <p>Subscribe to our Email alerts to receive early discount offers,and new products info</p>
                <input type="text" name="Email" placeholder='Email Address*'/>
                <div>
                <button className='btn btn-danger'>Subscribe</button>
                </div>
                </div>
                <div className='col-2'>
                  <h4>Help</h4>
                  <p>FAQs</p>
                  <p>Track Order</p>
                  <p>Cancel Order</p>
                  <p>Return Order</p>
                  <p>Warranty Info</p>
                  

                </div>
                <div className='col-3'>
                  <h4>Policies</h4>
                  <p>Return policy</p>
                  <p>Security</p>
                  <p>Sitemap</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </div>
                <div className='col-3'>
                  <h4>Company</h4>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Service Centers</p>
                  <p>Careers</p>
                  <p>Affiliates</p>
                </div>
                <hr />
                <div className=' d-flex justify-content-between'>
                  <p>2025|All Rights Reserved</p>
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />

                  
                </div>
                
                

            
        </div>
        
    </div>
  )
}

export default Footer