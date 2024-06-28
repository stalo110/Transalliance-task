import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Frame from "../assets/Frame 01.svg"

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-gray-300 py-8 font-dm-sans text-20px leading-30px">
         <div className="flex items-center">
          <img src={Frame} alt="Logo" className="h-10 mr-4" />
          <p>Transalliance Group.</p>
        </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Offices</h2>
          <ul className="space-y-2">
            <li>Denmark:</li>
            <li>Toldbodgade 55B</li>
            <li>1253, Copenhagen</li>
            <li>United Kingdom:</li>
            <br/>
            <li>1 Poultry</li>
            <li>EC2R 8EJ, London</li>
            <li>info@inpay.com</li>
            <li>Phone: +45 88610 610</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Solution</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300">Money Out</a></li>
            <li><a href="#" className="hover:text-blue-300">Money In</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Sectors</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300">Financial Service</a></li>
            <li><a href="#" className="hover:text-blue-300">iGaming</a></li>
            <li><a href="#" className="hover:text-blue-300">Corporates</a></li>
            <li><a href="#" className="hover:text-blue-300">NGOs</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Other</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300">News & Insights</a></li>
            <li><a href="#" className="hover:text-blue-300">Compliance</a></li>
            <li><a href="#" className="hover:text-blue-300">Careers</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="my-8 border-gray-500 w-3/4" />
      </div>
      <div className="container mx-auto px-4 flex justify-end space-x-4">
       
        <h6>Social Media</h6>
        
        <a href="#" className="text-gray-300 hover:text-blue-300">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-300">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-300">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        </div>
    </footer>
  );
};

export default Footer;
