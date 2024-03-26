

import Flogo from "../../img/crmLogoF.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const footer = () => {
  return (
    <div className='h-72 bg-white '>
        <div className='h-40 bg-black text-white flex pl-20 pt-5'>
          <div>
          <img className='mb-4' src={Flogo} alt="" />
            <p className='mb-4'>66 Broklyne Golden Street, USA</p>
            <div className='flex'>
            <FaFacebook className='mr-2 size-6' />
            <FaInstagram className='mx-2 size-6' />
            <FaYoutube className='ml-2 size-6' />
            </div>
          </div>
          <div className='ml-12 underline'>
            <p>Home</p>
            <p>About</p>
            <p>Vendors</p>
            <p>Explore Platform</p>
          </div>
          <div className='ml-12 underline'>
            <p>FAQs/Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Sponsorship</p>
          </div>
          <div className='ml-12 underline'>
            <p>Contact policy</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <h4 className='text-center'>Copyright ©2024 | EIN 13-4148824 | Bridge ID 3108588923</h4>
    </div>
  )
}

export default footer;