import { HiMiniArrowLongRight } from "react-icons/hi2";

function Process() {
  return (
    <div className="max-w-7xl m-auto lg:px-8 p-6 flex flex-col sm:flex-row justify-between gap-4">
      <div>
        <p className="text-2xl font-bold leading-7">
          Our 3-steps <br /> Process
        </p>
        <p className="my-2">
          Our step is simple follow this three steps to work with us
        </p>
        <button
          href="#"
          className="px-4 py-2 my-2 border border-red-800 bg-red-200 rounded flex items-center space-x-2"
        >
          <p>Work With Us</p>
          <HiMiniArrowLongRight className="h-6 w-6" />
        </button>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <p className="text-3xl font-bold text-gray-400">01</p>
          <p className="text-lg font-bold ">
            Book Your <br />
            Cargo
          </p>
        </div>
        <p className=" font-extralight py-1">
          Enjoy the convenience of parcel drop-offs, real-time tracking.
        </p>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <p className="text-3xl font-bold text-gray-400">02</p>
          <p className="text-lg font-bold">
            Track In <br /> Real Time
          </p>
        </div>
        <p className=" font-extralight py-1">
          Enjoy the convenience of parcel drop-offs, real-time tracking, and
          reliable deliveries
        </p>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <p className="text-3xl font-bold text-gray-400">03</p>
          <p className="text-lg font-bold">
            Receivable Reliable <br /> Deliveries
          </p>
        </div>
        <p className=" font-extralight py-1">
          Save on shipping its by sharing cars space with others
        </p>
      </div>
    </div>
  );
}

export default Process;
