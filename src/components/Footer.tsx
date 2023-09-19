import { Link } from 'react-router-dom';
import logo from '../assets/getlinked.png';

const Footer = () => {
  return (
    <footer className="bg-muted-purple px-5 md:px-20 py-20 static bottom-0 w-full flex flex-wrap space-y-10">
      {/*  */}
      <div className="space-y-20 grow basis-96">
        <div className="space-y-5">
          <img src={logo} alt="GetLinked logo" />

          <p className="">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology.
          </p>
        </div>

        <div className="divide-x-4 divide-magenta grid grid-cols-2 text-center md:w-[80%] lg:w-[50%] mt-auto">
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

      {/* Links */}
      <div className="md:flex justify-center grow basis-96">
        <div>
          <p className="text-magenta text-lg font-medium mb-5">Useful Links</p>
          <ul className="space-y-3">
            <li>
              <Link to="/#overview">Overview</Link>
            </li>
            <li>
              <Link to="/#timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/#faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="md:flex justify-center grow basis-96">
        <div>
          <p className="text-magenta text-lg font-medium mb-5">Contact Us</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
