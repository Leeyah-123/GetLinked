import { Link } from 'react-router-dom';
import chain from '../assets/images/home/chain.svg';
import curve from '../assets/images/home/curve.svg';
import fire from '../assets/images/home/fire.svg';
import guy from '../assets/images/home/guy-wearing-vr.svg';
import lightbulb from '../assets/images/home/lightbulb.svg';
import spark from '../assets/images/home/spark.svg';
import star1 from '../assets/images/home/star1.svg';
import star2 from '../assets/images/home/star2.svg';
import flareRight from '../assets/images/home/flare-right.svg';
import flareLeft from '../assets/images/home/flare-left.svg';

const Hero = () => {
  return (
    <section id="home" className="border-t border-slate-800 !pb-0">
      <div className="text-3.4vw lg:text-sm flex justify-center lg:justify-end relative">
        {/* Flares */}
        <img
          aria-hidden="true"
          src={flareLeft}
          alt=""
          className="absolute pointer-events-none -left-10 -top-32 lg:-top-80 lg:-left-24 mix-blend-hard-light -z-10"
        />
        <img
          aria-hidden="true"
          src={flareRight}
          alt=""
          className="hidden lg:block absolute pointer-events-none -top-[6.5rem] -right-20 mix-blend-hard-light -z-10"
        />

        {/* Stars */}
        <img
          aria-hidden="true"
          src={star1}
          alt=""
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-7 lg:top-0 left-28 mix-blend-hard-light -z-10"
        />
        <img
          aria-hidden="true"
          src={star2}
          alt=""
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-[15rem] right-[20%] lg:top-[30rem] lg:right-1/2 mix-blend-hard-light -z-10"
        />
        <img
          aria-hidden="true"
          src={star2}
          alt=""
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-[5rem] right-[10%] mix-blend-hard-light -z-10"
        />

        <h2 className="text-[3.5vw] lg:text-3xl font-bold italic text-white relative z-2 text-center lg:text-right">
          Igniting a Revolution in{' '}
          <span className="relative">
            HR Innovation{' '}
            <img
              src={curve}
              className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute"
            />
          </span>
        </h2>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 pt-8 lg:pt-16 !px-0 lg:!pl-12">
          <header className="grid place-items-center gap-3 lg:place-items-start lg:flex flex-col lg:gap-5 pb-8">
            <div className="grid place-items-center text-center lg:text-left lg:block clash-display text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2 tracking-tight">
              <div className="relative">
                <h1>
                  getlinked{``}
                  <span className="ml-2 relative">
                    Tech
                    <img
                      src={lightbulb}
                      aria-hidden="true"
                      alt=""
                      className="w-[4vw] absolute -top-[4vw] right-0 "
                    />
                  </span>
                </h1>
              </div>
              <h2>
                Hackathon&nbsp;
                <span className="text-[var(--color-3)] inline-block relative">
                  1.0
                  <img
                    src={chain}
                    alt="chain"
                    className="inline-block mb-2 lg:mb-0 lg:absolute w-[32px] h-[32px] lg:w-auto lg:h-auto top-[5px] left-[120px]"
                  />
                  <img
                    src={fire}
                    alt="fire"
                    className="inline-block mb-2 lg:mb-0 lg:absolute top-[20px] w-[22px] h-[22px] lg:w-auto lg:h-auto left-[205px]"
                  />
                </span>
              </h2>
            </div>
            <p className="text-[13px] lg:text-[20px] lg:mb-5 text-white text-center lg:text-left max-w-[264px] lg:max-w-none relative z-2">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link
              to="/register"
              className={`btn inline-block transition-transform hover:scale-[1.05] focus:scale-[1.05]`}
            >
              Register
            </Link>

            <div className="text-white flex gap-4 lg:gap-6 relative z-2 unica-one">
              <div className="flex">
                <p className="font-unicaone text-[48px] lg:text-[64px]">00</p>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">
                  H
                </span>
              </div>
              <div className="flex">
                <p className="font-unicaone text-[48px] lg:text-[64px]">00</p>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">
                  M
                </span>
              </div>
              <div className="flex">
                <p className="font-unicaone text-[48px] lg:text-[64px]">00</p>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">
                  S
                </span>
              </div>
            </div>
          </header>
          <figure className="relative overflow-y-hidden">
            <img src={spark} alt="" aria-hidden="true" className="absolute" />
            <img src={guy} alt="A man wearing VR googles" className="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
