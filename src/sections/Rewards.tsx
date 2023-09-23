import goldenCup from '../assets/images/home/9486889 1.png';
import awards from '../assets/images/home/Rewards.svg';
import SectionContainer from '../components/SectionContainer';
import flareRight from '../assets/images/home/flare-right.svg';
import flareLeft from '../assets/images/home/flare-left.svg';

const Rewards = () => {
  return (
    <SectionContainer className="text-center lg:text-left">
      <img
        src={flareLeft}
        aria-hidden={true}
        className="absolute pointer-events-none -left-20 top-0 lg:-top-32 lg:left-0 mix-blend-hard-light -z-10"
      />
      <img
        src={flareRight}
        aria-hidden={true}
        className="absolute pointer-events-none -bottom-20 right-0 lg:-bottom-[50%] lg:-right-40 mix-blend-hard-light -z-20"
      />

      <div className="flex flex-col lg:flex-row-reverse md:items-center md:text-left gap-16 lg:pb-14">
        <div className="lg:flex-1">
          <div>
            <h5>
              Prizes and <br />
              <span className="text-magenta">Rewards</span>
            </h5>
            <p className="my-3 lg:my-5 font-medium">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={goldenCup} alt="award cup" className="lg:hidden my-12" />
            <img src={awards} alt="award cup" />
          </div>
        </div>

        <div className="hidden lg:flex flex-1">
          <img
            src={goldenCup}
            alt="award cup"
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Rewards;
