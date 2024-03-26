import RisingHand from "../../../img/risingHand.png"

const FindHelp = () => {
  return (
    <div className="mt-4 h-screen bg-white rounded-md text-black border-2 border-gray-300">
        <div className="flex w-auto mr-8 border-2 ml-8 mt-8 h-24 rounded-md text-black bg-gray-200">
            <img className="w-auto ml-6 mt-3" src={RisingHand} alt="" />
            <div>
            <h2 className="text-3xl mt-4">Find Help for Your CRM</h2>
            <h3 className="text-gray-500">Try filling in your information and  needs need in the form below</h3>
            </div>
        </div>
        



        <div className=" mx-8 mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="John Doe"
                  className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Your Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="john@mail.com"
                  className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Apple, inc"
                  className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="New York, NY"
                  className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        </div>



        <p className="block ms-8 mt-8 text-sm font-medium leading-6 text-gray-900">Do you need process automation?</p>
              <div className="mt-2 flex">
                <div className="ml-8 flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Yes
                  </label>
                </div>
                <div className=" ml-8 flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    No
                  </label>
                </div>
              </div>
           <div>
        </div>


        <div className=" w-auto">
              <label htmlFor="about" className="block ms-8 mt-8 text-sm font-medium leading-6 text-gray-900">
                How we can help you with your CRM?
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  // rows={3}
                  className="block ml-8 pl-3 w-10/12	 h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="I need help with..."
                />
              </div>
              
              <button className="mx-8 my-3 bg-indigo-700 text-white border-2 rounded-md px-4 py-1">Submit</button>
    <p className="italic mx-8 mt-3 text-sm leading-6 text-gray-600">*By submitting the form, I confirm that I have read the <span className="underline text-indigo-700">Privcy Policy.</span></p>
            </div>


    </div>
  )
}

export default FindHelp;