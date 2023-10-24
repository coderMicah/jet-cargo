import { HiMiniArrowLongRight,HiBolt,HiPlayCircle} from "react-icons/hi2";


function AboutUs() {
  return (
    <section className="max-w-7xl lg:h-screen xl:h-max grid items-center  m-auto lg:px-8 p-6  ">
      <div className="grid grid-cols-1 md:grid-cols-5 py-4">
        <div className="col-span-2">
          <h2 className="font-semibold text-lg text-red-800">About Us</h2>
          <h3 className="font-bold text-2xl py-4">
            Your Logistics Partner in Excellence
          </h3>

          <p className=" font-extralight text-gray-500">
            At Jet Cargo, we don&apos;t just move goods; we engineer seamless
            supply chain solutions that propel businesses forward. With a legacy
            of excellence spanning years, we&apos;ve toured to new heights in
            the world of logistics, becoming a trusted name synonymous with
            reliability, efficiency, and innovation
          </p>
        </div>

        <div>image comes here</div>
      </div>

      <div className="grid items-end grid-cols-1 gap-8 lg:grid-cols-5 ">
        <div className="col-span-2 grid grid-cols-1  md:grid-cols-2">
          <div>
            {/* <img src="" alt="vision-img" className="h-[100px]" /> */}
            <HiBolt className="h-20 w-20"/>
          
            <h2 className="font-bold text-lg text-red-800 pt-4">Our Vision</h2>
            <hr className="w-[10%] h-1 bg-red-800 my-4" />
            <p className=" font-extralight text-gray-500">
              To redefine the logistics landscape. We&apos;re driven by the
              belief that ingistics isn&apos;t just about transportation
              it&apos;s about optimising. streamlining, & revolutionising the
              way goods move.
            </p>
          </div>
          <div>
            <img src="/public/goal@2x.png" alt="mission-img" className="h-20" />
            {/* <HiCog className="h-20 w-20"/> */}
            <h2 className="font-bold text-lg text-red-800 pt-4">Our Mission</h2>
            <hr className="w-[10%] h-1 bg-red-800 my-4" />
            <p className=" font-extralight text-gray-500">
              We exist to simplify complexity, minimize disruptions, and empower
              businesses to reach their full potential
            </p>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center space-x-4 rounded-md bg-red-100 p-4">
            {/* <img src="" alt="play-btn" /> */}
            <div>
            <HiPlayCircle className="h-20 w-20 text-red-900"/>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold">Our Promise.</h3>
              <p className=" font-extralight py-4 text-gray-500">
                We are committed to excellence in everything i do Our team
                comprises and experts who bring unmatched knowledge and
                dedication to every project
              </p>
              <button className="px-4 py-1 mt-3 border rounded-full border-red-800 text-red-800">
                Start Now
              </button>
            </div>
          </div>

          <div className="flex space-x-4 rounded-md bg-red-100 p-4">
            <div>
            <h2 className=" text-lg text-red-800">About Price</h2>
              <h3 className="font-semibold text-gray-800 py-2">More Than Cheap.</h3>
              <p className=" font-extralight  text-gray-500">
                It is a long established fact that a reader will be distracted
                by the readable contest of a page when looking at its layout,
              </p>
              <button className="mt-3 text-red-800">
                <HiMiniArrowLongRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
