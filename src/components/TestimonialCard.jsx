import {FaQuoteRight} from "react-icons/fa"

function TestimonialCard() {
  return (
    <div className="flex flex-col sm:flex-row font-sans  rounded-xl  h-60 bg-gray-100">
      <div className="flex-none w-36 relative ">
        <img
          src="/profile-picture-8.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between p-6 rounded-r-xl max-h-max">
        <div className="mr-1">
        <FaQuoteRight className="w-8 h-8 "/>
        </div>
        <p className="text-sm text-gray-800">
          Dragged meet in ourselves, his a ationalize for temple. Hearing To
          able that multitude to the ped. Paper its for the place. 
        </p>
        
        <div>
        <p className="text-sm font-semibold">Aisha Damian,</p>
        <p className="text-sm text-gray-400 italic ">Project manager from Arusha</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
