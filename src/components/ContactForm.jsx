import Icon from "../assets/Chevronicon.svg";
import Image from "../assets/Image20.svg";

const ContactForm = () => {
  return (
    <section className="contact-form flex justify-between mt-5 pt-8 px-28">
      <div className="flex flex-col items-center w-1/3">
        <img
          className="h-420 bg-gradient-to-r from-emerald-500 via-blue-950 to-blue-950 rounded-r-2xl"
          src={Image}
          alt="Layer 0"
        />
      </div>
      <div className="w-2/4 h-2/4">
        <h1 className="text-3xl">Speak to Sales</h1>
        <form className="mt-4">
          <div className="email m-2">
            <label htmlFor="email">Email</label>
            <input
              className="w-full h-10 border-2 mt-2 border-gray-300"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="firstname m-2">
            <label htmlFor="firstname">First Name</label>
            <input
              className="w-full h-10 border-2 mt-2 border-gray-300"
              type="text"
              name="firstname"
              id="firstname"
            />
          </div>
          <div className="lastname m-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="w-full h-10 border-2 mt-2 border-gray-300"
              type="text"
              name="lastname"
              id="lastname"
            />
          </div>
          <div className="message m-2">
            <label htmlFor="message">Message</label>
            <textarea
              rows="4"
              className="w-full mt-2 border-2 border-gray-300"
              name="message"
              id="message"
            ></textarea>
          </div>
        </form>
        <p className="m-2">
          I agree to receiving payment news and trends from Inpay, including
          updates to our products and services. I am aware that I can withdraw
          this consent at any time by contacting Inpay or unsubscribing via
          email. I agree to Inpay processing my personal data in accordance with
          its Privacy Policy.
        </p>
        <button className="flex px-2 mt-4 bg-green-700 rounded-lg items-center mr-8">
          <p className="mx-2">Learn More</p>
          <img
            className="h-5 m-2 rounded-3xl bg-green-400"
            src={Icon}
            alt="Learn More"
          />
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
