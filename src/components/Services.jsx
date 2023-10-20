import { HiMiniArrowLongRight } from "react-icons/hi2";

function Services() {
  return (
    <section className=" bg-slate-900 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl m-auto lg:px-8 p-6  ">
        <div className="md:col-span-1">
          <img src="" alt="" />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-red-800 text-xl font-semibold pb-3">
            Our Services
          </h3>
          <h3 className="text-white text-2xl font-bold ">
            Navigating Logistics Excelence
          </h3>

          <div className="flex flex-col md:grid gap-4 md:grid-cols-2 py-8">
            <div>
              <p className=" font-extralight text-white w-1/2">
                Shared <br />
                Cargo Service
              </p>
              <p className=" font-extralight py-4 text-gray-500">
                Save on shipping costs by sharing cargo space with others. Enjoy
                the convenience of parcel drop-offs, real-time tracking, and
                reliable deliveries
              </p>
              <button
                href="#"
                className="px-4 py-2 my-2 text-white border border-red-50 rounded flex items-center space-x-2"
              >
                <p>Contact Our Team</p>
                <HiMiniArrowLongRight className="h-6 w-6" />
              </button>
            </div>
            <div>
              <p className=" font-extralight text-white w-1/2">
                Full-Track <br /> Logistics Service
              </p>
              <p className=" font-extralight py-4 text-gray-500">
                Our full-track logistics service is designed for corporate
                clients looking for dedicated transport solutions. Load as much
                as you need and pay per kilometre
              </p>
            </div>

{/* hidden for now */}
            <div className="hidden md:pt-8 col-span-2  flex-col md:flex-row md:items-center justify-between text-white">
              <div>
                <p>1</p>
                <p className="font-extralight py-4 text-gray-500">Fast and Secure Delivery</p>
              
              </div>
              <div>
                <p>2</p>
                <p className="font-extralight py-4 text-gray-500" >Cost Effective Solutions</p>
              </div>
              <div>
                <p>3</p>
                <p className="font-extralight py-4 text-gray-500">Realtime shipment tracking</p>
              </div>
              <div>
                <p>4</p>
                <p className="font-extralight py-4 text-gray-500">Dedicated Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
