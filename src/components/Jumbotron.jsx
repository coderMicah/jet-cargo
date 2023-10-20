function Jumbotron() {
  return (
    <section className="max-w-5xl m-auto lg:px-8 p-6 ">
      <p className="text-2xl text-red-800 font-bold text-center">
        Ready to experience hassle-free logistics?
      </p>
      <p className=" w-10/12 mx-auto text-gray-400 font-semibold py-2 text-center">
        Thousands of our customers and Partners enjoys our services everyday,
        Get started today!
      </p>

      <button
        href="#"
        className="mx-auto px-4 py-2 my-2 text-white bg-red-800 flex items-center space-x-2 rounded"
      >
        <p>Book Now</p>
      </button>
    </section>
  );
}

export default Jumbotron;
