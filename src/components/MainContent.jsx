import About from "./About";
// import frameImage from "../assets/img/Frame570.png";
import Frame from "../assets/Frame 530.svg";
import portraitWoman from "../assets/Corporatewoman.svg";
// import smilingBusinessman from "../assets/Smilingbusinessman.svg";
import Frame1 from "../assets/Frame 535.svg";
import Layer from "../assets/Layer 01.svg";
import Hand from "../assets/Hands1.svg";
import Star from "../assets/Star2.svg";
import Key from "../assets/Key.svg";
import Human from "../assets/Human.svg";
import Icon from "../assets/Chevronicon.svg";

const MainContent = () => {
  return (
    <main>
      <About />
      <div className=" md:px-28 max-sm:px-2">
        <div className=" flex justify-between mt-6">
          <div className="image1 small-s md:w-1/2">
            <img className="h-300" src={Frame} alt="Image 1" />
          </div>
          <div className="image2 md:w-1/2 small-s rounded-lg">
            <img
              className="h-300 rounded-lg bg-smallcard border-2 p-10 border-blue-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
              src={portraitWoman}
              alt="Image 2"
            />
          </div>
        </div>
        <div className="flex border-green-600 border-2 mt-6 pt-6 justify-end">
          <div className="mt-4 rounded-lg h-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-6">
            {/* <img className="-mt-14" src={smilingBusinessman} alt="Image 3" /> */}
          </div>
          <div className="bg-white border-4 rounded-md border-green-50 mx-12 mt-4">
            <img className="h-300 pt-10 px-10" src={Frame1} alt="Image 4" />
          </div>
        </div>
        <div className="flex justify-end m-6">
          <button className="flex bg-green-700 rounded-lg items-center mr-8">
            <p className="mx-2">Learn More</p>
            <img
              className="h-5 m-2 rounded-3xl bg-green-400"
              src={Icon}
              alt="Learn More"
            />
          </button>
        </div>
        <div className="flex border-2 border-green-400 h-1/3">
          <div>
            <div className="mt-20 bg-green-400 p-12">
              <h1 className="text-3xl p-2">
                The human-powered payments network{" "}
              </h1>
              <p className="p-2">
                Driven by a team of over 200 global payments experts with
                absolute dedication to solving our customers’ most complex
                cross-border payments challenges.
              </p>
              <button className="flex p-2 mt-4 bg-green-700 rounded-lg items-center mr-8">
                <p className="mx-2">Learn More</p>
                <img
                  className="h-5 m-2 rounded-3xl bg-green-400"
                  src={Icon}
                  alt="Learn More"
                />
              </button>
            </div>
          </div>
          <img
            className="border-2 border-red-300 h-370 bg-gradient-to-r from-emerald-500 from-1% via-blue-950 via-30% to-blue-950 via-9% rounded-l-2xl"
            src={Layer}
            alt="Image 5"
          />
        </div>
        <div className="flex mt-5">
          <div className="flex flex-col bg-red-300 p-4 m-2">
            <div className="mt-2 p-2">
              <img src={Hand} alt="Back" />
              <h1 className="text-xl p-2">We are your trusted partner</h1>
              <p>
                We are a dedicated and diligent team of payments specialists
                that’s committed to helping you unlock opportunity, create value
                and make payments happen, together.
              </p>
            </div>
            <div className="mt-2 p-2">
              <img src={Star} alt="Back" />
              <h1 className="text-xl p-2">We provide the network you need</h1>
              <p>
                We open access to a resilient global network spanning 90+
                countries that’s built to simplify complex challenges and move
                money at speed.
              </p>
            </div>
            <div className="mt-2 p-2">
              <img src={Key} alt="Back" />
              <h1 className="text-xl p-2">
                We bring certainty through compliance
              </h1>
              <p>
                We were born with compliance at our heart. Licensed by the
                globally trusted Danish FSA, when we move money you can be
                confident that it gets to the right place with absolute
                accuracy.
              </p>
            </div>
            <div className="mt-2 p-2">
              <img src={Human} alt="Back" />
              <h1 className="text-xl p-2">We execute with expertise</h1>
              <p>
                We complete an industry-leading 99% of payments for customers in
                the fast-changing financial services, iGaming, corporate and NGO
                sectors, drawing on 16 years of proven expertise.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ml-8 bg-green-500 p-4 i">
            <div>
              <h1 className="text-2xl mb-2">
                The Transalliance Group.
                <br /> difference
              </h1>
              <p className="mb-2 p-2">
                Our global payments network is powered by passionate people,
                transparent customer relationships, and leading-edge technology.
              </p>
            </div>
            <div className="text-center">
              <img
                className="border-2 border-red-300 h-420 bg-gradient-to-r from-emerald-500 from-1% via-blue-950 via-30% to-blue-950 via-9% rounded-2xl"
                src={Layer}
                alt="Image 6"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5 border-2 border-green-400 h-1/3">
          <img
            className="border-2 border-red-300 h-300 bg-gradient-to-r from-emerald-500 from-1% via-blue-950 via-30% to-blue-950 via-9% rounded-r-2xl"
            src={Layer}
            alt="Image 7"
          />
          <div>
            <div className="mt-20 bg-green-400 p-12">
              <h1 className="text-3xl">The human-powered payments network </h1>
              <p>
                Driven by a team of over 200 global payments experts with
                absolute dedication to solving our customers’ most complex
                cross-border payments challenges.
              </p>
              <button className="flex bg-green-700 rounded-lg items-center mr-8">
                <p className="mx-2">Learn More</p>
                <img
                  className="h-5 m-2 rounded-3xl bg-green-400"
                  src={Icon}
                  alt="Learn More"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
