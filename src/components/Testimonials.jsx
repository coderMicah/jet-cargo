import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className="max-w-5xl m-auto lg:px-8 p-6 ">
      <p className="text-red-800 font-bold text-center">TESTIMONIALS</p>
      <p className="text-2xl font-bold py-3 text-center">
        What Our Clients Say About Jet Cargo
      </p>
      <p className=" w-10/12 mx-auto text-gray-400 font-extralight py-4 text-center">
        our commitment to excellence in logistics is unwavering. But don&apos;t
        just take our word for it. Hear what our clients have to say about their
        experiences partnering with us:
      </p>

      {/* Add testimonials dynamically */}
      <div className="flex justify-between items-center gap-4 ">
        <TestimonialCard />
        {/* <TestimonialCard /> */}
      </div>
    </div>
  );
}

export default Testimonials;
