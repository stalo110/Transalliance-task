import HeaderContent from "./HeaderContent";
import Discover from "../assets/DiscoverMore.svg";
import Navbar from "./Navbar";
import Logo from "../assets/Frame 570logo.svg";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mt-[0px]">
        <Navbar />
        <HeaderContent />
        <div className=" relative">
          <p className=" w-1/5 absolute left-60 -top-6 p-4  bg-gray-500 text-center rounded-lg">
            Discover More
          </p>
          <img className="Image1" src={Discover} alt="Discover More" />
          <div className=" px-32 ">
            <p className="bg-white rounded-t-lg py-4 px-2">
              Send and Receive Money from all over with ease.
            </p>
          </div>
          <div className="bg-white  px-32 ">
            <img className="shadow-lg bg-white-500" src={Logo} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
