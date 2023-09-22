import { FormEvent, useState } from 'react';

// icons
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from 'react-icons/ri';

// images
import flare from '../assets/images/contact/flare.svg';
import flare2 from '../assets/images/contact/flare2.svg';
import star1 from '../assets/images/contact/star1.svg';
import star2 from '../assets/images/contact/star2.svg';
import star3 from '../assets/images/contact/star3.svg';
import star4 from '../assets/images/contact/star4.svg';
import star5 from '../assets/images/contact/star5.svg';

// components
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import BackButton from '../components/BackButton';

// utilities
import { contact } from '../utils/apiRequests';

const Contact = () => {
  return (
    <>
      <BackButton className="px-[calc(1.25em+10vw)] pt-[6vh]" />

      <div
        id="contact"
        className="relative px-[10vw] lg:grid lg:grid-cols-2 lg:grid-flow-col lg:pt-10 lg:pb-40"
      >
        <Section1 />
        <Section2 />

        {/* Flares */}
        <img
          src={flare}
          alt=""
          className="absolute top-2 left-0 pointer-events-none mix-blend-hard-light -z-10 lg:-top-48 lg:-left-2"
        />
        <img
          src={flare2}
          alt=""
          className="absolute hidden bottom-0 right-0 pointer-events-none mix-blend-hard-light -z-10 lg:block"
        />

        {/* Stars scattered around the page */}
        <img
          src={star1}
          alt=""
          className="absolute top-0 right-2/3 w-[3vw] lg:hidden lg:w-auto"
        />
        <img
          src={star1}
          alt=""
          className="absolute bottom-32 left-[6vw] w-[3vw] lg:hidden lg:w-auto"
        />
        <img
          src={star4}
          alt=""
          className="absolute top-10 right-4 w-[3vw] lg:right-[15vw] lg:-top-5 lg:w-auto"
        />
        <img
          src={star5}
          alt=""
          className="absolute bottom-40 right-[6vw] w-[3vw] lg:w-auto"
        />
      </div>
    </>
  );
};

const Section1 = () => {
  return (
    <section className="relative my-10 hidden lg:block">
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

      <img src={star1} alt="" className="absolute -top-[10vh] left-3" />
    </section>
  );
};

const Section2 = () => {
  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const resetFields = () => {
    setEmail('');
    setFirstName('');
    setMessage('');
    setPhoneNum('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !firstName || !message) {
      Notify.failure('Please fill in all fields');
      return;
    }

    Loading.hourglass();
    const { error } = await contact({
      email,
      first_name: firstName,
      phone_number: phoneNum,
      message,
    });
    Loading.remove();

    if (error) {
      type ResponseData = { string: Array<string> };

      const responseData: ResponseData = error.response?.data as ResponseData;
      let errorString = '';

      for (const key in responseData) {
        const errors: Array<string> = responseData[key as keyof ResponseData];
        errorString = errors[0];
        break;
      }

      Report.failure(
        'An error occurred',
        errorString || error.message || 'An error occurred',
        'Okay'
      );
      return;
    }

    Notify.success('Successfully sent message');
    resetFields();
  };

  return (
    <section className="relative rounded-xl py-10 px-5 !ml-0 lg:shadow-[#0f0f0f] lg:shadow-md lg:ml-28 lg:py-16 lg:px-24 lg:bg-white/[0.03]">
      <div className="text-xl text-[var(--color-3)] clash-display font-semibold tracking-wide mb-4 xl:min-w-[30ch] lg:mb-8">
        <h2>Questions or need assistance?</h2>
        <p>Let us know about it!</p>
      </div>
      <div className="mb-4 font-medium text-sm lg:hidden">
        Email us below to any question related to our event
      </div>

      {/* Contact form */}
      <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          minLength={3}
          placeholder="First Name"
          className="rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
        />
        <input
          type="number"
          name="phoneNum"
          id="phoneNum"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          placeholder="Phone Number"
          className="lg:hidden rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
        />
        <input
          type="email"
          name="mail"
          id="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Mail"
          className="rounded-sm lg:rounded-md bg-transparent text-white placeholder:text-white placeholder:font-medium outline outline-1 outline-white px-5 p-2"
        />
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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

      {/* Stars */}
      <img
        src={star3}
        alt=""
        className="hidden absolute left-[0] -ml-4 bottom-1/4 lg:block"
      />
      <img
        src={star2}
        alt=""
        className="hidden absolute -left-28 top-1/4 lg:block"
      />
    </section>
  );
};

export default Contact;
