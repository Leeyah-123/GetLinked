import { MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { socialLinks } from '../utils/utils';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="px-10 lg:px-20 pt-[70px] pb-[40px] bg-[#100B20]">
      <div>
        <div className="w-full max-w-[1086px] mx-auto flex flex-col md:flex-row gap-[40px] justify-between">
          <div className="w-full max-w-[412px]">
            <Logo className="" />

            <p className="text-white pt-2 text-[12px] leading-[20px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-2 text-white text-[12px] pt-16">
              <Link to="/#terms">Terms of Use</Link>
              <div className="h-[17px] rounded-[2px] w-[2px] bg-[var(--color-3)]"></div>
              <Link to="/#terms">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-10 w-full max-w-[500px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[14px] font-semibold text-[var(--color-3)]">
                Useful Links
              </h1>
              <Link to="/#overview" className="text-white text-[12px]">
                Overview
              </Link>
              <Link to="/#timeline" className="text-white text-[12px]">
                Timeline
              </Link>
              <Link to="/#faqs" className="text-white text-[12px]">
                FAQs
              </Link>
              <Link to="/register" className="text-white text-[12px]">
                Register
              </Link>
              <div className="text-[12px] flex gap-2 item items-center">
                <span className="text-[var(--color-3)]">Follow us </span>
                <div className="flex gap-4 items-center">
                  {socialLinks.map(({ Icon, link }, index) => (
                    <span key={index}>
                      <Link to={link} className="icon">
                        <Icon
                          size={25}
                          className="transition-transform hover:scale-105 focus:scale-105"
                        />
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-[14px] font-semibold text-[var(--color-3)]">
                Contact Us
              </h1>
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
        </div>
        <p className="text-center text-white mt-[70px] text-[12px]">
          All rights reserved. &copy; getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
