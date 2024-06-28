import HeaderContent from "./HeaderContent";
import Discover from "../assets/DiscoverMore.svg";

const Header = () => {
  return (
    <>
      <HeaderContent />
      <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="discoverimage h-150 relative">
          <p className="bg-gray-500 discover w-460 absolute left-44 h-16 flex justify-center rounded-lg py-3 text-xl text-white">
            Discover More{" "}
            <img className="h-8 ml-10" src={Discover} alt="Discover More" />
          </p>
          <div className="absolute bottom-0 px-24 w-full items-start">
            <p className="send rounded-t-md h-16 px-3 py-2">
              Send and Receive Money from all <br /> over with ease
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
