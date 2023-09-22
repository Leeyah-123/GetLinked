import { Link } from 'react-router-dom';
import spark from '../assets/images/home/Image 1.png';
import curve from '../assets/images/home/Vector 4.png';
import guy from '../assets/images/home/virtual.png';

const Hero = () => {
  return (
    <section id="home" className="border-t border-slate-800">
      <div className="flex flex-col justify-end relative items-center sm:items-end space-y-4">
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
      </div>
    </section>
  );
};

export default Hero;
