function Team() {
  return (
    <div className="max-w-5xl m-auto lg:px-8 p-6 ">
      <p className="text-red-800 font-bold text-center">MEET OUR TEAM</p>
      <p className="text-2xl font-bold py-3 text-center capitalize">
        {" "}
        Meet the people that makes it all possible
      </p>

      {/* Add cards dynamically here  */}

     <div className="py-8 flex flex-col flex-wrap sm:flex-row items-center justify-evenly md:justify-between">
     <div className="flex flex-col max-w-max">
        <div className="flex-none w-52 h-52 relative ">
          <img
            src="/profile-picture-4.jpg"
            alt=""
            className="inset-0 w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="py-2">
          <p className="text-sm font-semibold text-center">Said Pesambili</p>
          <p className="text-sm text-gray-400 italic text-center ">CEO</p>
        </div>
      </div>
      <div className="flex flex-col max-w-max">
        <div className="flex-none w-52 h-52 relative ">
          <img
            src="/profile-picture-3.jpg"
            alt=""
            className="inset-0 w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="py-2">
          <p className="text-sm font-semibold text-center">Laureen Komba</p>
          <p className="text-sm text-gray-400 italic text-center ">Project Manager</p>
        </div>
      </div>
      <div className="flex flex-col max-w-max">
        <div className="flex-none w-52 h-52 relative ">
          <img
            src="/profile-picture-1.jpg"
            alt=""
            className="inset-0 w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="py-2">
          <p className="text-sm font-semibold text-center">Jackson John</p>
          <p className="text-sm text-gray-400 italic text-center ">Technical Manager</p>
        </div>
      </div>
      <div className="flex flex-col max-w-max">
        <div className="flex-none w-52 h-52 relative ">
          <img
            src="/profile-picture-2.jpg"
            alt=""
            className="inset-0 w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="py-2">
          <p className="text-sm font-semibold text-center">Khamis Mashaka</p>
          <p className="text-sm text-gray-400 italic text-center ">Human Resource Manager</p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Team;
