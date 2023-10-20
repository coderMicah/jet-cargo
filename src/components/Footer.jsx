import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl m-auto lg:px-8 lg:py-16 p-6 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="col-span-1 md:col-span-2  w-3/4">
          <img src="" alt="logo-image" />
          <p className="text-gray-500 text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="col-span-1">
          <nav>
            <ul className="text-gray-500 text-sm">
              <li className="pb-4">
                <a href="#"></a>About Us
              </li>
              <li className="pb-4">
                <a href="#"></a>Testimonials
              </li>
              <li className="pb-4">
                <a href="#"></a>Services
              </li>
              <li className="pb-4">
                <a href="#"></a>Contact Us
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-1">
          <ul className="text-gray-500 text-sm">
            <li className="pb-4">Call: 123456789</li>
            <li className="pb-4">Email: info@jetcago.com</li>
            <li className="pb-4">
              P.O.BOX 1234 <br /> Tanzania
            </li>
            <li className="pb-4">Maps</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 ">
          <p className="text-gray-500 text-sm">
            Be the first to get the latest news about us, including blogs and so
            much more. here
          </p>

          <div className="relative my-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full  p-2.5 "
              placeholder="Write Your Email Here"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
              <FaTelegram className="text-red-800 h-5 w-5" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            By subscribing you accept the Privacy Policy.{" "}
          </p>

          <div className="flex gap-8 py-4">
            <FaFacebook className="text-red-800 h-5 w-5" />
            <FaTwitter className="text-red-800 h-5 w-5" />
            <FaInstagram className="text-red-800 h-5 w-5" />
            <FaLinkedin className="text-red-800 h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
