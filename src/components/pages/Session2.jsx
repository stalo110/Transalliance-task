import Frame from "../../assets/Frame1.svg";

const Session2 = () => {
  return (
    <div className="flex justify-center">
      <div className=" flex flex-col justify-center mr-40">
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
      <div className=" flex flex-col items-center relative">
        <img className="h-300" src={Frame} alt="Header" />
        <p className="absolute bg-yellow-400 top-60 p-2 rounded-lg -left-20">
          24/7, 365 transaction tracking
        </p>
      </div>
    </div>
  );
};

export default Session2;
