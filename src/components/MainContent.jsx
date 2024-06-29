import About from "./About";
import frameImage from "../assets/Frame 555.svg";
import frameImage1 from "../assets/Frame 556.svg";
import Frame from "../assets/Frame 530.svg";
import portraitWoman from "../assets/Corporatewoman.svg";
import Man from "../assets/SmilingMan.svg";
import Frame1 from "../assets/Frame 535.svg";
import Layer from "../assets/Layer 01.svg";
import Hand from "../assets/Hands1.svg";
import Star from "../assets/Star2.svg";
import Key from "../assets/Key.svg";
import Human from "../assets/Human.svg";
import Image from "../assets/imageTab.svg";
import Icon from "../assets/Chevronicon.svg";

const MainContent = () => {
  return (
    <main>
      <About />
      <div className=" md:px-28 max-sm:px-2">
        <div className=" flex justify-between mt-6">
          <div className="image1 small-s md:w-1/2 relative">
            <img className="h-300" src={Frame} alt="Image 1" />
            <div className="mr-auto w-2/3 text-center mx-4  my-2 absolute -bottom-6 ">
              <p className="bg-white p-2 mr-1 rounded-lg ">
                SEPA Instant, SEPA & SWIFT
              </p>
            </div>
          </div>
          <div className="image2 md:w-1/2 small-s rounded-lg relative">
            <img
              className="h-300 rounded-lg bg-smallcard border-2 p-10 border-blue-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
              src={portraitWoman}
              alt="Image 2"
            />
            <div className="text-center mx-4  my-2 absolute bottom-0 -left-12  ">
              <p className="bg-white px-6 py-1 mr-1 rounded-lg text-center ">
                Customer portal for live transaction <br /> monitoring
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-6 pt-6 justify-end relative">
          <div className="mt-4 rounded-lg h-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-6">
            <img className="-mt-14" src={Man} alt="Image 3" />
            <p className="bg-white p-2 mr-1 rounded-lg absolute top-16 -left-3 ">
              Danish FSA regulated
            </p>
          </div>
          <div className="bg-white rounded-md  mx-12 mt-4">
            <img className="h-300 pt-10 px-10" src={Frame1} alt="Image 4" />
            <p>90+ currencies served</p>
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
                The human-powered payments network
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
          <div className="flex flex-col items-center ml-8 bg-green-500 p-4">
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
            <div className="relative">
              <div className="text-center">
                <img
                  className="border-2 bg-gradient-to-r from-emerald-50 rounded-2xl"
                  src={frameImage}
                  alt="Image 6"
                />
                <p>
                  {" "}
                  <span>OUR TEAM</span>Over 200 Experts
                </p>
                <img
                  className="border-2 bg-gradient-to-r from-emerald-50 rounded-2xl"
                  src={frameImage1}
                  alt="Image 6"
                />
                <p>Meet our best financial experts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 border-2 border-green-400 h-1/3">
          <img
            className="border-2 border-red-300 h-300 bg-gradient-to-r from-emerald-500 from-1% via-blue-950 via-30% to-blue-950 via-9% rounded-r-2xl"
            src={Image}
            alt="Image 7"
          />
          <div>
            <div className="mt-20 bg-green-400 p-12">
              <h1 className="text-3xl">One portal, every transaction</h1>
              <p>
                Our customer portal provides an intuitive interface to access
                all of our services via a simple, single login.
                <br /> . Real-time, 24/7, 365 transaction tracking <br />
                . Customizable & downloadable reports
                <br />
                . Rich data analysis <br />. Multiple integration methods, built
                to suit your needs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sector pt-8">
        <div>
          <h1 className="text-4xl bold mb-6">Sectors we serve</h1>
          <p className="mx-10 mb-8">
            We simplify the complexities of cross-border payments in some of the
            world’s most demanding sectors. Learn more about who we serve and
            how we add value below.
          </p>
        </div>
        <div className="flex justify-between">
          <img
            className="m-2"
            src="/static/dist/img/smiling-purposeful-young-businessman-with-credit-card-looking-aside 1.png"
            alt=""
          />
          <img
            className="m-2"
            src="/static/dist/img/smiling-purposeful-young-businessman-with-credit-card-looking-aside 1.png"
            alt=""
          />
        </div>
        <div className="flex justify-between mt-5">
          <img
            className="m-2"
            src="/static/dist/img/smiling-purposeful-young-businessman-with-credit-card-looking-aside 1.png"
            alt=""
          />
          <img
            className="m-2"
            src="/static/dist/img/smiling-purposeful-young-businessman-with-credit-card-looking-aside 1.png"
            alt=""
          />
        </div>
      </div>
      <div className="annaul-report flex flex-col items-center pt-12 bg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="text-center px-32">
          <h1 className="text-4xl bold mb-8">Lorem ipsum dolor sit amet.</h1>
          <p className="mx-28 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            animi non cum asperiores aliquid nam quod consectetur voluptatem
            rerum porro dolores laudantium laborum, iure dolorum, iste
            necessitatibus. Amet, quibusdam voluptatum?
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
