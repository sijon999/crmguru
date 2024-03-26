
import Kk from "../../img/keap1.png";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaExternalLinkAlt, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";



const body = () => {
  return (
    <div className="flex pl-16 pt-16  mb-20 mr-16">
      <div className=" w-80">
        <img className="" src={Kk} alt="" />
      </div>
      <div className="">
        <div className="flex  ml-6">
          <h1 className="font-bold">Keap</h1>
          <IoMdStar className="text-yellow-300 mt-1 ml-2 " />
          <IoMdStar className="text-yellow-300 mt-1 " />
          <IoMdStar className="text-yellow-300 mt-1 " />
          <IoMdStar className="text-yellow-300 mt-1 " />
          <IoMdStarHalf className="text-yellow-300 mt-1 mr-2" />
          <h2>
            4.4 <span className="underline ml-2">(618) reviews</span>
          </h2>
        </div>
        <div className="ml-6  flex ">
            <div className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          vitae quisquam earum quasi cupiditate minima temporibus fugiat omnis
          velit. Nesciunt modi accusamus praesentium, excepturi, aperiam
          temporibus nisi neque quam velit ex itaque architecto reiciendis,
          culpa maxime molestiae. Obcaecati similique deserunt vitae in sapiente
          rerum dignissimos recusandae impedit hic sint aspernatur praesentium,
          vero iste placeat ipsum iure atque. Hic aspernatur consequatur
          necessitatibus nam ratione, perspiciatis, quae nemo illo veritatis
          error, odio tempora eligendi! Iusto culpa ad fugit voluptatem
          laudantium praesentium explicabo repellendus vitae repellat corporis
          officiis atque, maxime eos eum facilis eveniet reiciendis velit magnam
          libero. Voluptatibus accusantium itaque a cum soluta optio quaerat,
          deleniti voluptatem dignissimos corporis in, libero sint voluptas
          maxime fugit quis amet, nostrum neque. Provident, porro! Ullam quasi
          molestias doloremque maiores officiis tenetur quae ut alias earum a
          eveniet quia reiciendis asperiores eligendi, facilis obcaecati ducimus
          maxime eum deserunt omnis! Porro, totam alias cumque inventore
          accusamus perferendis maiores veniam aut sed eligendi nesciunt saepe
            </div>

            <div className="p-1 ml-10 flex">
            <div className=" border-l-2 size-6 h-full border-gray-700 "></div>
            <div className=" ml-0">
                <div className="flex">
                <button className=" flex mb-7 mx-3 px-5 py-1 rounded-lg	text-white bg-violet-700">
                <p className=" mr-2">Visit_Keap</p>
                <FaExternalLinkAlt className="mt-1" />
                </button>
                <button className=" flex mx-3 mb-7 px-5 py-1 rounded-lg	text-black border-2 border-violet-700">
                <p className=" mr-2 text-violet-700">Contact_Keap</p>
                </button>
                </div>
                
                <div className="flex text-violet-700 ml-3 mb-2">
                    <FaTwitter className="mt-1 mr-2" />
                    <h2>Twitter</h2>
                    <FaFacebook className="mt-1 mx-2" />
                    <h2>Facebook</h2>
                    <FaLinkedin className="mt-1 mx-2" />
                    <h2>Linkedin</h2>
                </div>
                <div>
                <iframe className="w-full aspect-video ml-3" src="https://dl.youtu.be/YBd8q8vyUXA?si=Fe7Xs2PQ-8c6zg_L"></iframe>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default body;
