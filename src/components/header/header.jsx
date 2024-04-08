
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import Logo from "../../img/crmLogoFn.svg";
import Mask from "../../img/maskgroup.svg";

const header = () => {
  return (
    <div className="flex justify-around border-b-2 bg-white ">
    <div className="flex  justify-around">
      <img className="w-full h-10 mt-4" src={Logo} alt="" />
      <div className="flex p-6 ">
        <RiHomeLine className="mt-1 mr-2" />
        <h2>Dashboard</h2>
      </div>
      <div className="flex p-6">
        <MdOutlineExplore className="mt-1 mr-2" />
        <h2>ExplorePlatform</h2>
        <MdKeyboardArrowDown className="mt-1 mr-2" />
      </div>
      <div className="flex p-6">
        <MdManageAccounts className="mt-1 mr-2" />
        <h2>Manage</h2>
        <MdKeyboardArrowDown className="mt-1 mr-2" />
      </div>
    </div>
    <div className="flex  justify-around">
      <button className="flex mt-4 mb-7 mx-4 px-5 py-1	 rounded-lg	text-white	 bg-violet-700">
        <FiPlus className="mt-1 mr-2	"/>
        <h2 className="">REQUEST</h2>
      </button>
      <MdForwardToInbox className="size-6 mt-5" />
      <IoNotificationsOutline className="size-6 mt-5 ml-4" />
      <BsQuestionCircle className="size-5 mt-6 ml-4" />

      <div className="p-3 ml-4 flex">
        <div className=" border-l-2 size-10 mt-1 "></div>
        <p>Balance<br /><span className="font-bold">$202.00</span></p>
      </div>
      <img className="w- h-20 p-3" src={Mask} alt="" />
    </div>
</div>
  )
}

export default header;