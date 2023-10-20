import { HiMiniArrowLongRight } from "react-icons/hi2";

function Hero() {
  return (
    <section >
      <div className="max-w-7xl m-auto h-[80vh] md:h-full lg:h-[80vh] lg:px-8 md:grid grid-cols-2 p-6">
      <div className="py-5">
        {/* <h1 className=" text-3xl font-bold text-white md:text-6xl md:leading-tight "> */}
        <h1 className=" text-3xl font-bold  md:text-6xl md:leading-tight "> 
          We Are Transforming Logistics In Tanzania And Africa.
        </h1>
        <p className=" text-xl my-5">
          Your trusted partner in cargo transportation, revolutionizing the
          logistics industry in Tanzania and across Africa
        </p>

        <button href="#" className="px-4 py-2 my-2 text-white bg-red-700 flex items-center space-x-2"  >
          <p> Get Started</p>
          <HiMiniArrowLongRight className="h-6 w-6" />
        </button>
      </div>

      <div></div>
      </div>
     
    </section>
  );
}

export default Hero;
