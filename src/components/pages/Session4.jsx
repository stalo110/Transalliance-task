import frameImage from "../../assets/Frame 555.svg";
import frameImage1 from "../../assets/Frame 560crop.png";
import Frame from "../../assets/Frame 530.svg";
import portraitWoman from "../../assets/Corporatewoman.svg";
import Man from "../../assets/SmilingMan.svg";
import Frame1 from "../../assets/Frame 535.svg";
import Hand from "../../assets/Hands1.svg";
import Star from "../../assets/Star2.svg";
import Key from "../../assets/Key.svg";
import Human from "../../assets/Human.svg";
import House from "../../assets/House.svg";
import Library from "../../assets/Library.svg";
import Computer from "../../assets/Computer.svg";
import Field from "../../assets/Field.svg";
import Break from "../Break";
import Break1 from "../Break1";
import Break2 from "../Break2";
import Button from "../Button";
import Session3 from "./Session3";

const Session4 = () => {
  return (
    <main>
      <Session3 />
      <div className="  max-sm:px-2">
        <div className=" flex justify-between mt-6">
          <div className="image1 small-s md:w-1/2 relative">
            <img className="h-300" src={Frame} alt="Image 1" />
            <div className=" bg-red-500 mr-auto text-center mx-4 my-2 absolute -bottom-2">
              <p className="bg-white p-2 mr-1 rounded-lg">
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
          <div className="bg-white mx-12 mt-4">
            <img className="h-300 pt-10 px-10" src={Frame1} alt="Image 4" />
            <p>90+ currencies served</p>
          </div>
        </div>
        <div className="flex justify-end m-6">
          <Button />
        </div>
        <div className="flex">
          <Break />
        </div>
        <div className="flex mt-5">
          <div className="flex flex-col p-20">
            <div className="mt-2 p-2">
              <img className=" h-16 w-16" src={Hand} alt="Back" />
              <h1 className="text-xl p-2">We are your trusted partner</h1>
              <p>
                We are a dedicated and diligent team of payments specialists
                that’s committed to helping you unlock opportunity, create value
                and make payments happen, together.
              </p>
            </div>
            <div className="mt-2 p-2">
              <img className=" h-16 w-16" src={Star} alt="Back" />
              <h1 className="text-xl p-2">We provide the network you need</h1>
              <p>
                We open access to a resilient global network spanning 90+
                countries that’s built to simplify complex challenges and move
                money at speed.
              </p>
            </div>
            <div className="mt-2 p-2">
              <img className=" h-16 w-16" src={Key} alt="Back" />
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
              <img className=" h-16 w-16" src={Human} alt="Back" />
              <h1 className="text-xl p-2">We execute with expertise</h1>
              <p>
                We complete an industry-leading 99% of payments for customers in
                the fast-changing financial services, iGaming, corporate and NGO
                sectors, drawing on 16 years of proven expertise.
              </p>
            </div>
          </div>
          <div className="ml-10">
            <div className="mr-14">
              <p>OUR SERVICE</p>
              <h1 className="text-2xl">
                The Transalliance Group.
                <br /> difference
              </h1>
              <p className="">
                Our global payments network is powered by passionate people,
                transparent customer relationships, and leading-edge technology.
              </p>
            </div>
            <div className="flex mt-16 mb-10 mr-16">
              <div className="relative ">
                <img
                  className=" mt-0 rounded-md"
                  src={frameImage}
                  alt="Image 6"
                />
                <p className="absolute top-6 bg-white rounded-lg -left-14">
                  <span>OUR TEAM</span> <br /> Meet our best financial experts
                </p>
              </div>
              <div className="relative">
                <img
                  className="mt-0  rounded-md"
                  src={frameImage1}
                  alt="Image 6"
                />
                <p className="py-10 px-2 text-center absolute bottom-0 right-0 bg-white w-full">
                  Meet our best financial experts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 flex">
          <Break1 />
        </div>
      </div>
      <div className="sector pt-8">
        <div className="w-[100%]">
          <h1 className="text-4xl bold mb-6 text-center">Sectors we serve</h1>
          <p className="mx-10 mb-8">
            We simplify the complexities of cross-border payments in some of the
            world’s most <br /> demanding sectors. Learn more about who we serve
            and how we add value below.
          </p>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="W-[50%] flex">
            <img className="m-2" src={House} alt="" />
            <div className="h-[50px] top-8 w-[100px] bg-yellow-500 mx-[-70px] my-[70px] rounded-lg">
              <p>
                Finacial Services<span>learn more</span>
              </p>
            </div>
          </div>
          <img className="m-2" src={Computer} alt="" />
          <div className=" bg-yellow-500 h-14 rounded-lg">
            <p>
              iGaming<span>learn more</span>
            </p>
          </div>
        </div>
        <div className=" flex justify-between w-[100%]">
          <div className="W-[50%] flex ">
            <img className="m-2" src={Field} alt="" />
            <div className="bg-yellow-500 h-14 rounded-lg">
              <p>
                NGOs<span>learn more</span>
              </p>
            </div>
          </div>
          <img className="m-2" src={Library} alt="" />
          <div className="bg-yellow-500 h-14 rounded-lg">
            <p>
              Corporates<span>learn more</span>
            </p>
          </div>
        </div>
      </div>
      <Break2 />
    </main>
  );
};

export default Session4;
