const About = () => {
  return (
    <div className="about mt-10 md:px-28 max-sm:px-2  ">
      <div className="flex justify-between">
        <div className="flex-col justify-between relative rounded-md">
          <div className="flex flex-col ">
            <p>ABOUT US</p>
          </div>
          <div className="flex flex-col bg-green-500 h-10 mt-32 rounded-lg p-4">
            <button className="bg-#5AAF87">Money Out</button>
          </div>
        </div>
        <div className=" md:w-1/2">
          <h1 className="text-4xl bold">
            Payment pathways, built <br /> for you
          </h1>
          <p className="p-2">
            Transalliance Group. Money Out and Money In solutions give <br />
            our customers the ability to complete cross-border, multi- <br />
            currency transactions securely and at speed. And with a <br />
            single provider for both payouts and pay-ins, say goodbye to <br />
            the operational headaches of multi-supplier management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
