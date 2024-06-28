import Frame from "../assets/Frame1.svg";

const HeaderContent = () => {
  return (
    <div className="header-content md:flex max-sm: w-full item-center align-middle justify-between">
      <div className=" md:px-32 max-sm:px-2 mt-3 items-center max-sm: w-full">
        <p className="text-sm text-yellow-300">
          Simplified cross-border payment
        </p>
        <p className="text-5xl text-white mt-1 mb-3">
          We are the <br /> payments people
        </p>
        <p className="text-white text-sm">
          Transalliance Group.’s cross-border payments solutions connect <br />
          organisations and communities globally to the network they need <br />
          to thrive. Together, we make money move.
        </p>
      </div>
      <div className="md: px-24 max-sm: px-2 relative max-sm: w-full">
        <img className="h-300 pr-24" src={Frame} alt="Header" />
        <div className="border-body bg-neutral-300 p-1 rounded-md absolute top-12 -left-3">
          24/7, 365 transaction tracking
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
