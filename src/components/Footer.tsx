import { MdLocationOn, MdPhoneInTalk } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { socialLinks } from '../utils/utils'

const Footer = () => {
  return (
    <footer className="bg-[#100B20] px-5 md:px-20 py-20 w-full flex items-start flex-wrap space-y-10 font-semibold">
      {/*  */}
      <div className="space-y-20 grow basis-80">
        <div className="space-y-5">
          <Logo className="" />

          <p className="">
            Getlinked Tech Hackathon is a technology innovation program established by a
            group of organizations with the aim of showcasing young and talented
            individuals in the field of technology.
          </p>
        </div>

        <div className="divide-x-4 divide-[var(--color-3)] text-[var(--color-3)] grid grid-cols-2 text-center md:w-[80%] lg:w-[50%] mt-auto">
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

      {/* Links */}
      <div className="md:flex justify-center grow basis-60">
        <div>
          <p className="text-[var(--color-3)] text-lg mb-5">Useful Links</p>
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
            <li className="flex space-x-5 items-end mt-4">
              <span className="text-magenta text-sm">Follow us</span>
              {socialLinks.map(({ Icon, link }, index) => (
                <span key={index}>
                  <Link to={link}>
                    <Icon size={25} />
                  </Link>
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="md:flex justify-center grow basis-60">
        <div>
          <p className="text-[var(--color-3)] text-lg mb-5">Contact Us</p>
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

{
  /* <footer className="pt-[70px] pb-[40px] bg-[#100B20]">
      <div>
        <div className="w-full max-w-[1086px] mx-auto flex flex-col md:flex-row gap-[40px] justify-between">
          <div className="w-full max-w-[412px]">
            <Link to="/">
              <img
                src="/getlinked.svg"
                alt="GetLinked logo"
                className="w-[72px] h-[18px] lg:w-[171px] lg:h-[44px]"
              />
            </Link>
            <p className="text-white pt-2 text-[12px] leading-[20px]">
              Getlinked Tech Hackathon is a technology innovation program established by a
              group of organizations with the aim of showcasing young and talented
              individuals in the field of technology
            </p>
            <div className="flex gap-2 text-white text-[12px] pt-16">
              <p>Terms of Use</p>
              <div className="h-[17px] rounded-[2px] w-[2px] bg-primary"></div>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-10 w-full max-w-[500px]">
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-[14px] font-semibold text-primary">Useful Links</h1>
              <p className="text-white text-[12px]">Overview</p>
              <p className="text-white text-[12px]">Timeline</p>
              <p className="text-white text-[12px]">FAQs</p>
              <p className="text-white text-[12px]">Register</p>
              <p className="text-primary text-[12px] flex gap-2 item items-center">
                Follow us{' '}
                <div className="flex gap-4 items-center">
                  {socialLinks.map(({ Icon, link }, index) => (
                    <a key={index} href={link}>
                      <Icon />
                    </a>
                  ))}
                </div>
              </p>
            </div>
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-[14px] font-semibold text-primary">Contact Us</h1>
              <div className="flex gap-4 text-white items-center text-[12px]">
                <MdPhoneInTalk />
                <a href="tel:+2346707653444">+234 6707653444</a>
              </div>
              <div className="flex gap-4 text-white text-[12px]">
                <MdLocationOn />
                <p className="max-w-[89px] leading-[18px]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white mt-[70px] text-[12px]">
          All rights reserved. &copy; getlinked Ltd.
        </p>
      </div>
    </footer> */
}
