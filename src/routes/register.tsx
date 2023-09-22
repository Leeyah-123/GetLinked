import { useState } from 'react';

// images
import graphicDesignerImg from '../assets/images/register/3d-graphic-designer.svg';
import flare from '../assets/images/register/flare.svg';
import flare2 from '../assets/images/register/flare2.svg';
import littleBoyImg from '../assets/images/register/little-boy.svg';
import littleGirlImg from '../assets/images/register/little-girl.svg';

// stars
import star1 from '../assets/images/register/star1.svg';
import star2 from '../assets/images/register/star2.svg';
import star3 from '../assets/images/register/star3.svg';
import star4 from '../assets/images/register/star4.svg';
import star5 from '../assets/images/register/star5.svg';

// components
import BackButton from '../components/BackButton';
import RegisterForm from '../components/register/Form';
import Modal from '../components/register/Modal';

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';

    setIsModalOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';

    setIsModalOpen(false);
  };

  return (
    <>
      <BackButton className="pl-[10vw] md:pl-[20vw] py-[5vh]" />

      <h1 className="pl-[10vw] md:pl-[20vw] self-start text-xl text-[var(--color-3)] clash-display font-medium tracking-wide lg:hidden">
        Register
      </h1>

      <div
        id="contact"
        className="relative min-h-screen px-[5vw] flex flex-col items-center lg:px-[7vw] lg:items-stretch lg:grid lg:grid-cols-2 lg:grid-flow-col"
      >
        <img
          src={graphicDesignerImg}
          alt="A graphic designer at his desk"
          className="w-[50vw] max-w-full aspect-square lg:-ml-11 lg:-mt-40"
        />

        <div className="relative mb-2 h-fit rounded-xl px-[5vw] py-[7vh] md:px-[5vw] md:py-[3vh] lg:-ml-7 lg:shadow-[#0f0f0f] lg:shadow-md lg:bg-white/[0.03] xl:py-[5vh]">
          <h1 className="hidden lg:block text-2xl text-[var(--color-3)] clash-display font-medium tracking-wide mb-4 lg:mb-8">
            Register
          </h1>

          <div className="mb-3 flex">
            <p className="w-[20ch] sm:w-auto text-sm font-medium">
              Be part of this movement!
            </p>
            <div className="w-[30%] lg:w-28">
              <p className="relative inline-block w-full border-b border-dashed border-b-[var(--color-3)]">
                <img
                  src={littleGirlImg}
                  alt=""
                  className="absolute bottom-0 left-[1vw] sm:left-2 md:left-4"
                />
                <img
                  src={littleBoyImg}
                  alt=""
                  className="absolute bottom-0 left-[3vw] sm:left-4 md:left-8"
                />
              </p>
            </div>
          </div>

          <RegisterForm openModal={openModal} />

          {/* Stars around the form */}
          <img
            src={star4}
            alt=""
            className="absolute top-1/3 left-0 w-[3vw] lg:top-5 lg:left-auto lg:right-1/3 lg:w-6"
          />
          <img
            src={star5}
            alt=""
            className="hidden absolute -bottom-3 right-32 lg:block"
          />
        </div>

        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />

        {/* Flares */}
        <img
          src={flare}
          alt=""
          className="absolute -top-[5rem] left-0 pointer-events-none mix-blend-hard-light -z-10 lg:-top-[15rem] lg:-left-2"
        />
        <img
          src={flare2}
          alt=""
          className="hidden absolute bottom-0 right-0 mix-blend-hard-light pointer-events-none -z-10 lg:block"
        />

        {/* Stars scattered around the page */}
        <img
          src={star1}
          alt=""
          className="absolute left-auto right-[5vw] w-[3vw] top-0 lg:left-[8vw] lg:right-auto lg:w-auto"
        />
        <img
          src={star2}
          alt=""
          className="absolute hidden left-[10vw] w-[3vw] bottom-1/4 lg:w-auto lg:block"
        />
        <img
          src={star3}
          alt=""
          className="absolute right-3 bottom-[15rem] w-[3vw] lg:w-auto lg:bottom-1/3 lg:right-auto lg:left-[40vw]"
        />
      </div>
    </>
  );
};

export default Register;
