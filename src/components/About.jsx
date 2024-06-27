const About = () => {
  return (
    <div className="about mt-10 md:px-28 max-sm:px-2  ">
      <div className="flex justify-between">
        <div className=" max-sm: w-full about1 flex flex-col justify-between relative rounded-md border-2">
          <div>
            <p>ABOUT US</p>
          </div>
          <div>
            <button className="z-0">Money Out</button>
            <button>
              <p className="text-white">Money out</p>
            </button>
          </div>
        </div>
        <div className="about2 md:w-1/2 max-sm: w-full">
          <h1 className="text-4xl bold">
            Payment pathways, built <br /> for you
          </h1>
          <p className="break-all p-3">
            Transalliance Group. Money Out and Money In solutions give our
            customers the ability to complete cross-border, multi-currency
            transactions securely and at speed. And with a single provider for
            both payouts and pay-ins, say goodbye to the operational headaches
            of multi-supplier management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
