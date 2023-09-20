import spark from '../assets/images/Image 1.png';
import curve from '../assets/images/Vector 4.png';
import guy from '../assets/images/virtual.png';
import { Button } from '../components/Buttons';
import Introduction from '../sections/Introduction';

const Home = () => {
  return (
    <>
      <section id="home" className="border-t border-slate-700">
        <div className="flex flex-col justify-end relative items-center sm:items-end space-y-4">
          <p className="text-lg text-center md:text-3xl font-semibold mt-5 capitalize">
            Igniting a Revolution in HR Innovation
          </p>
          <img src={curve} alt="" className="w-60" />
        </div>

        <div className="flex justify-between items-center flex-col md:flex-row">
          <div>
            <div className="space-y-6 max-w-fit bg-auto mt-auto">
              <p className="text-5xl font-semibold md:text-8xl mt-20">
                getLinked Tech <br /> Hackathon{' '}
                <span className="text-magenta">1.0</span>
              </p>
              <p className="font-semibold">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>

              <Button className="px-10 py-3">Register</Button>
            </div>

            <p className="space-x-5 mt-10 text-4xl">
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

      <Introduction />
    </>
  );
};

export default Home;
