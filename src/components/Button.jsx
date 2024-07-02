import { IoIosArrowDroprightCircle } from "react-icons/io";

const Button = ({ children, type = "button", className }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 text-black bg-green-700 rounded-xl focus:outline-none focus:ring-2 ${className}`}
    >
      <div className="flex">
        {children}
        <IoIosArrowDroprightCircle className="text-2xl ml-5" />
      </div>
    </button>
  );
};
export default Button;
