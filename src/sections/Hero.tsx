import { Link } from 'react-router-dom';
import chain from '../assets/images/home/chain.svg';
import curve from '../assets/images/home/curve.svg';
import fire from '../assets/images/home/fire.svg';
import guy from '../assets/images/home/guy-wearing-vr.svg';
import spark from '../assets/images/home/spark.svg';

const Hero = () => {
  return (
    <section id="home" className="border-t border-slate-800">
      <div className="text-3.4vw lg:text-sm flex justify-center lg:justify-end relative">
        {/* <img
          src="/images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none lg:top-[-300px] lg:left-[-100px] mix-blend-hard-light"
        />
        <img
          src="/images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none top-[-100px] left-[600px] mix-blend-hard-light"
        /> */}
        <h1 className="text-[3.5vw] lg:text-3xl font-bold italic text-white relative z-2 text-center lg:text-right">
          Igniting a Revolution in{' '}
          <span className="relative">
            HR Innovation{' '}
            <img
              src={curve}
              className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute"
            />
          </span>
        </h1>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 pt-8 lg:pt-24 !px-0 lg:!pl-12">
          <header className="grid place-items-center gap-3 lg:place-items-start lg:flex flex-col lg:gap-5 pb-8">
            {/* <img
              src="/images/purple-lens-flare-left.svg"
              alt="purple lens flare"
              className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light"
            /> */}
            <div className="grid place-items-center text-center lg:text-left lg:block clash-display text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2 tracking-tight">
              <h1>getlinked Tech</h1>
              <h1>
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
              </h1>
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
                <h1 className="font-unicaone text-[48px] lg:text-[64px]">00</h1>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">
                  H
                </span>
              </div>
              <div className="flex">
                <h1 className="font-unicaone text-[48px] lg:text-[64px]">00</h1>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">
                  M
                </span>
              </div>
              <div className="flex">
                <h1 className="font-unicaone text-[48px] lg:text-[64px]">00</h1>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">
                  S
                </span>
              </div>
            </div>
          </header>
          <figure className="relative overflow-y-hidden">
            <img src={spark} alt="Planet" className="absolute" />
            <img
              src={guy}
              alt="Man - Virtual Reality"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>

      {/* <div className="flex flex-col justify-end relative items-center sm:items-end space-y-4">
        <p className="text-lg text-center md:text-3xl font-semibold mt-5 capitalize">
          Igniting a Revolution in HR Innovation
        </p>
        <img src={curve} alt="" className="w-60" />
      </div>

      <div className="flex justify-between items-start flex-col lg:flex-row">
        <div>
          <div className="space-y-6 max-w-fit bg-auto">
            <p className="text-5xl font-semibold xl:text-8xl mt-20">
              getLinked Tech <br /> Hackathon{' '}
              <span className="text-magenta">1.0</span>
            </p>
            <p className="font-semibold">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <Link
              to="/register"
              className={`btn inline-block transition-transform hover:scale-[1.05] focus:scale-[1.05]`}
            >
              Register
            </Link>
          </div>

          <p className="space-x-5 mt-10 xl:mt-20 text-6xl font-unica">
            <span>
              00<span className="text-base">H</span>
            </span>
            <span>
              00<span className="text-base">M</span>
            </span>
            <span>
              00<span className="text-base">S</span>
            </span>
          </p>
        </div>

        <div className="relative">
          <img
            draggable={false}
            src={guy}
            alt=""
            className="sm:static opacity-70"
          />
          <img
            draggable={false}
            src={spark}
            alt=""
            className="absolute top-0 sm:top-12 right-10"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
