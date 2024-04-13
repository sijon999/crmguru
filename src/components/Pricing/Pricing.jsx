import { IoMdCheckmarkCircle } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="mt-4  bg-white rounded-md text-black border-2 border-gray-300">
      <div className="mt-2 ml-4 text-indigo-600 font-bold text-xl	">Pricing</div>
      <div className="border-b-2 size-4 w-full border-gray-300"></div>

      <div className="flex mt-12 mx-20 gap-10">
        <div className=" ">
          <h2 className="text-xl font-bold mb-4">Pro</h2>
          <p className="text-sx-2 mb-4">
            For smaller teams looking to automate basic sales, marketing and
            business processes
          </p>
          <h1>
            <span className="font-bold text-2xl">159/</span>mo
          </h1>
          <div  className="text-sx text-gray-500">(Billed at $1908/year)</div>
          <button className=" bg-indigo-700 border-l-sky-700 rounded text-white px-10 py-1 ml-12 m-2 ">Get Started</button>
          <h2 className="font-bold">Features:</h2>
          <div className="">
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700  mt-1.5" />
              </span>
              <span className="ml-2">Email marketing</span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">
                Marketing sales & workflow automation
              </span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">Lead capture & automated follow-up</span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">Lead & client management (CRM)</span>
            </span>
          </div>
          <a className="underline text-indigo-600 ml-2" href="">Show More</a>
        </div>
        <div className=" border-l-2 mt-1 "></div>



        <div className=" ">
          <h2 className="text-xl font-bold mb-4">Max</h2>
          <p className="text-sx-2 mb-4">
          For growing teams who need advanced ecommerce and reporting capabilities
          </p>
          <h1>
            <span className="font-bold text-2xl">229/</span>mo
          </h1>
          <div className="text-sx text-gray-500">(Billed at $2748/year)</div>
          <button className=" bg-indigo-700 border-l-sky-700 rounded text-white px-10 py-1 ml-12 m-2 ">Get Started</button>
          <h2 className="font-bold">Features:</h2>
          <div className="">
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700  mt-1.5" />
              </span>
              <span className="ml-2">Advanced lead optimization</span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">
                Enhanced landing pages & sales tools
              </span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">Ecommoerce tools</span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">Advanced reporting</span>
            </span>
          </div>
          <a className="underline text-indigo-600 ml-2" href="">Show More</a>
        </div>
        <div className=" border-l-2 mt-1 "></div>




        <div className="">
          <h2 className="text-xl font-bold mb-4">Ultimate</h2>
          <p className="text-sx-2 mb-4">
          For larger teams with advanced workflows and powerful automation needs
          </p>
          <h1>
            <span className="font-bold text-2xl">229/</span>mo
          </h1>
          <div className="text-sx text-gray-500">(Billed at $1908/year)</div>
          <button className=" bg-indigo-700 border-l-sky-700 rounded text-white px-10 py-1 ml-12 m-2 ">Get Started</button>
          <h2 className="font-bold">Features:</h2>
          <div className="">
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700  mt-1.5" />
              </span>
              <span className="ml-2">Premium CRM & sales management</span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">
                Advanced marketing & sales tools
              </span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">Custom user access controls</span>
            </span>
            <span className="flex">
              <span>
                <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
              </span>
              <span className="ml-2">Affiliate management & collaboration</span>
            </span>
          </div>
          <a className="underline text-indigo-600 ml-2" href="">Show More</a>
        </div>
      </div>
      <div className="w-full text-center mt-20 mb-8">See all 5 <a className="font-bold text-sm underline text-indigo-700" href="">Keap Pricing Levels</a></div>
    </div>
  );
};

export default Pricing;
