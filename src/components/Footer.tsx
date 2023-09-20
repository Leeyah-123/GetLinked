import { Link } from 'react-router-dom';
import { MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-muted-purple px-5 md:px-20 py-20 w-full flex items-start flex-wrap space-y-10 font-semibold">
      {/*  */}
      <div className="space-y-20 grow basis-80">
        <div className="space-y-5">
          <Logo />

          <p className="">
            Getlinked Tech Hackathon is a technology innovation program established by a
            group of organizations with the aim of showcasing young and talented
            individuals in the field of technology.
          </p>
        </div>

        <div className="divide-x-4 divide-magenta grid grid-cols-2 text-center md:w-[80%] lg:w-[50%] mt-auto">
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

      {/* Links */}
      <div className="md:flex justify-center grow basis-60">
        <div>
          <p className="text-magenta text-lg mb-5">Useful Links</p>
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
      <div className="md:flex justify-center grow basis-60">
        <div>
          <p className="text-magenta text-lg mb-5">Contact Us</p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-5">
              <MdPhoneInTalk size={25} />
              <span className="text-sm">+234 6707653444</span>
            </li>

            <li className="flex items-start space-x-5">
              <MdLocationOn size={25} />
              <span className="text-sm">
                27 Alara street <br />
                Yaba 100012 <br />
                Lagos State
              </span>
            </li>
          </ul>
        </div>
      </div>

      <p className="basis-full text-center pt-20 text-sm font-medium">
        All rights reserved.&copy; getLinked Ltd
      </p>
    </footer>
  )
}

export default Footer
