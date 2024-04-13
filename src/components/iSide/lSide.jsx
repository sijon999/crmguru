
import { GoWorkflow } from "react-icons/go";
import { MdOutlineReviews } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

import Workflow from "../catagoris/Workflow/Workflow";
import FindHelp from "../catagoris/FindHelp/FindHelp";
import Features from "../catagoris/Features/Features";
import Pricing from "../Pricing/Pricing";


const lSide = () => {
  return (
<div className="flex mb-10">
    <div className="ml-16  w-1/6 ">
        <div className="mb-2">
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <GoWorkflow className="mt-1 mr-2" />
            Workflow Automation
            </div>
        </div>
        <div className="mb-2">
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <IoPersonOutline className="mt-1 mr-2" />
            Find Help for your CRM
            </div>
        </div>
        <div className="mb-2">
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <IoSettingsOutline className="mt-1 mr-2" />
                Features
            </div>
        </div>
        <div className="mb-2">
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <IoLogoUsd className="mt-1 mr-2" />
                Pricing
            </div>
        </div>
        <div className="mb-2">
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <FaQuestion className="mt-1 mr-2" />
                FAQs
            </div>
        </div>
        <div className="mb-2">
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <IoMdStarOutline className="mt-1 mr-2" />
                Ratings
            </div>
        </div>
        <div>
            <div className="flex w-60 h-8 px-5 py-1 rounded text-black border-2 border-gray-300">
            <MdOutlineReviews className="mt-1 mr-2" />
                Reviews
            </div>
        </div>
    </div>
    <div className="w-5/6 ml-6 mr-16 ">
        <Workflow />
        <FindHelp />
        <Features />
        <Pricing />
    </div>
    
</div>
  )
}

export default lSide;