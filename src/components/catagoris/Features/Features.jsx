import { IoMdCheckmarkCircle } from "react-icons/io";

const Features = () => {
  return (
    <div className="h-96 mt-4 bg-white rounded-md text-black border-2 border-gray-300">
      <div className="mt-2 ml-4 text-indigo-600 font-bold	text-xl">Features</div>
      <div className="border-b-2 size-4 w-full border-gray-300"></div>

      <div className="ml-4">

{/* Tasks */}
        <div className="mt-4">
          <span className="flex ">
            <span>
              <IoMdCheckmarkCircle className="text-indigo-600 mt-1.5" />
            </span>
            <span>task</span>
          </span>
          <span>
            <span className="flex ">
              <div >
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Creation & Assignment</span>
                </span>

                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>To-Do Lists</span>
                </span>
              </div>
              <div className="ml-16">
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Due Dates</span>
                </span>

                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Dependencies</span>
                </span>
              </div>
              <div className="ml-16">
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Tast Prioritization</span>
                </span>

                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Drag & Drop</span>
                </span>
              </div>
            </span>
          </span>
        </div>


{/* projects */}

        <div className="mt-4">
          <span className="flex ">
            <span>
              <IoMdCheckmarkCircle className="text-indigo-600 mt-1.5" />
            </span>
            <span>Projects</span>
          </span>
          <span>
            <span className="flex">
              <div >
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Creation & Assignment</span>
                </span>
              </div>
              <div className="ml-16">
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Dependencies</span>
                </span>
              </div>
              <div className="ml-16">
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Tast Prioritization</span>
                </span>
              </div>
            </span>
          </span>
        </div>

        {/* Task Creation */}

        <div className="mt-4">
          <span className="flex ">
            <span>
              <IoMdCheckmarkCircle className="text-indigo-600 mt-1.5" />
            </span>
            <span>Task Creation</span>
          </span>
          <span>
            <span className="flex">
              <div>
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Creation & Assignment</span>
                </span>
              </div>
              <div className="ml-16">
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5" />
                  </span>
                  <span>Due Dates</span>
                </span>
              </div>
              <div className="ml-16">
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 ml-[27px] mt-1.5" />
                  </span>
                  <span className="ml-2">Drag & Drop</span>
                </span>
              </div>
            </span>
          </span>
        </div>


        {/* Task Management */}

        <div className="mt-4">
          <span className="flex ">
            <span>
              <IoMdCheckmarkCircle className="text-indigo-600 mt-1.5" />
            </span>
            <span>Task Management</span>
          </span>
          <span>
            <span className="flex">
              <div>
                <span className="flex">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 mt-1.5 " />
                  </span>
                  <span className="ml-2">Task Prioritization</span>
                </span>
              </div> 
              <div>
                <span className="flex ml-16">
                  <span>
                    <IoMdCheckmarkCircle className="text-lime-700 ml-[30px] mt-1.5" />
                  </span>
                  <span className="ml-2">To-Do Lists</span>
                </span>
              </div>

            </span>
          </span>
        </div>




      </div>
    </div>
  );
};

export default Features;
