import Layer from "../assets/Layer 01.svg";
import Icon from "../assets/Chevronicon.svg";
const ContactForm = () => {
  return (
    <section className="contact-form flex justify-between mt-5 pt-8 px-28">
      <div className="flex flex-col items-center w-1/3">
        <img
          className="h-420 bg-gradient-to-r from-emerald-500 via-blue-950 to-blue-950 rounded-r-2xl"
          src={Layer}
          alt="Layer 0"
        />
      </div>
      <div className="w-2/4 h-2/4">
        <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic
          aut, error voluptates nobis praesentium sint quia earum laborum
          eveniet consequatur qui quo distinctio repellendus corrupti impedit
          illo voluptatum quas!
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
