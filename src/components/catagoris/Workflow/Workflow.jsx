
import unnamed from "../../../img/unnamedOne.svg";
import Zapier from "../../../img/2560px-Zapier_logoOne.svg";
import Pabbly from "../../../img/pabblyOne.svg";
import Pipedream from "../../../img/pipedream-logoOne.svg";


const Workflow = () => {
  return (
    <div>
      <div className=" h-40 bg-white rounded-md text-black border-2 border-gray-300">
        <div className="mt-2 ml-4">Workflow Automation</div>
        <div className="border-b-2 size-4 w-full border-gray-300"></div>

        <div className="flex ml-12 justify-items-center">

          <div className=" p-6  text-xs">
          <img className="w-12 mb-1 ml-1" src={unnamed} alt="" />
          <span className="">Make.com</span>
          </div>

          <div className="mx-8 p-6 text-xs">
          <img className="w-12 mb-1" src={Pabbly} alt="" />
          <span className="ml-1">Pabbly</span>
          </div>

          <div className=" p-6 text-xs">
          <img className="mb-1" src={Zapier} alt="" />
          <span className="ml-6">Zapier</span>
          </div>

          <div className="mx-8 p-6 text-xs ">
          <img className="mb-1 ml-2" src={Pipedream} alt="" />
          <span>Pipedream</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
