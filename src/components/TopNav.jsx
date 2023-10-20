import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoTwitter,
  BiSolidPhone,
  BiLogoGmail,
} from "react-icons/bi";

function TopNav() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between text-gray-400 p-6 lg:px-8 ">
        <div className="flex items-center space-x-4 text-white">
          <p className="text-gray-400">Follow Us</p>
          <a href="/">
            <BiLogoLinkedin />
          </a>
          <a href="/">
            <BiLogoTwitter />
          </a>
          <a href="/">
            <BiLogoFacebook />
          </a>
        </div>
        <div className="hidden md:flex space-x-12 items-center">
          <span className="flex items-center space-x-4">
            <BiSolidPhone /> <p>Call: 123456789</p>
          </span>
          <span className="flex items-center space-x-4">
            <BiLogoGmail />
            <p>Call: 123456789</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
