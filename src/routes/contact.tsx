import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from 'react-icons/ri';

import flare from '../assets/images/contact/flare.svg';
import flare2 from '../assets/images/contact/flare2.svg';
import BackButton from '../components/BackButton';

const Contact = () => {
  return (
    <>
      <BackButton className="px-[calc(1.25em+10vw)] pt-[6vh]" />

      <div
        id="contact"
        className="relative px-[10vw] lg:min-h-screen lg:grid lg:grid-cols-2 lg:grid-flow-col lg:pt-10 lg:pb-40"
      >
        <section className="my-10 hidden lg:block">
          <h1 className="text-3xl text-[var(--color-3)] clash-display font-black tracking-wide mb-3">
            Get in touch
          </h1>

          <div className="flex flex-col gap-3 text-lg">
            <h2 className="font-medium max-w-[7ch]">Contact Information</h2>

            <address className="font-medium not-italic">
              <span className="block">27,Alare Street</span>
              <span className="block">Yaba 100012</span>
              <span className="block">Lagos State</span>
            </address>

            <p className="font-light mb-2">Call Us : 07067981819</p>
            <p className="font-light max-w-[30ch]">
              we are open from Monday-Friday 08:00am - 05:00pm
            </p>
          </div>

          <div className="text-lg mt-10 flex flex-col gap-3">
            <p className="text-[var(--color-3)] font-medium">Share on</p>
            <ul className="flex gap-3 text-xl">
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiInstagramLine />
                </a>
              </li>
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiTwitterXLine />
                </a>
              </li>
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiFacebookFill />
                </a>
              </li>
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="h-fit rounded-xl py-10 px-5 !ml-0 lg:shadow-[#0f0f0f] lg:shadow-md lg:ml-28 lg:py-16 lg:px-24 lg:bg-white/[0.03]">
          <div className="text-xl text-[var(--color-3)] clash-display font-semibold tracking-wide mb-4 xl:min-w-[30ch] lg:mb-8">
            <h2>Questions or need assistance?</h2>
            <p>Let us know about it!</p>
          </div>
          <div className="mb-4 font-medium text-sm lg:hidden">
            Email us below to any question related to our event
          </div>
          <form className="flex flex-col gap-7">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="hidden lg:block rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
            />
            <input
              type="text"
              name="teamName"
              id="teamName"
              placeholder="Team's Name"
              className="lg:hidden rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
            />
            <input
              type="text"
              name="topic"
              id="topic"
              placeholder="Topic"
              className="lg:hidden rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
            />
            <input
              type="text"
              name="mail"
              id="mail"
              placeholder="Mail"
              className="rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
            />
            <textarea
              name="message"
              id="message"
              cols={3}
              rows={3}
              placeholder="Message"
              className="rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 py-2"
            />
            <button type="submit" className="btn self-center">
              Submit
            </button>
          </form>

          <div className="text-center lg:hidden text-sm flex flex-col gap-3 mt-5">
            <p className="text-[var(--color-3)] font-medium">Share on</p>
            <ul className="flex gap-3 text-xl justify-center">
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiInstagramLine />
                </a>
              </li>
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiTwitterXLine />
                </a>
              </li>
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiFacebookFill />
                </a>
              </li>
              <li className="transition-all hover:scale-[1.2] focus-within:scale-[1.2]">
                <a
                  href="#"
                  className="hover:!bg-none hover:!text-[var(--color-2)] focus:!bg-none focus:!text-[var(--color-2)]"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <img
          src={flare}
          alt=""
          className="absolute top-2 left-0 lg:-top-20 lg:-left-2 -z-10"
          style={{ filter: 'brightness(70%)' }}
        />
        <img
          src={flare2}
          alt=""
          className="absolute bottom-0 right-0 -z-50"
          style={{ filter: 'brightness(70%)' }}
        />
      </div>
    </>
  );
};

export default Contact;
