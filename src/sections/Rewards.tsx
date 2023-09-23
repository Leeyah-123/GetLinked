import goldenCup from '../assets/images/home/9486889 1.png';
import awards from '../assets/images/home/Rewards.svg';
import SectionContainer from '../components/SectionContainer';

const Rewards = () => {
  return (
    <SectionContainer className="text-[3.4vw] py-12 text-center lg:text-left lg:text-sm">
      <div className="flex flex-col lg:flex-row-reverse md:items-center md:text-left gap-16">
        <div className="lg:flex-1">
          <div>
            <h5 className="text-xl font-bold clash-display lg:text-3xl">
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
