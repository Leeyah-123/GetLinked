import SectionContainer from '../components/SectionContainer';

import libertyImg from '../assets/images/home/liberty.svg';
import libertyPayImg from '../assets/images/home/libertypay.svg';
import payboxImg from '../assets/images/home/paybox.svg';
import visualPlusImg from '../assets/images/home/vizual-plus.svg';
import winwiseImg from '../assets/images/home/winwise.svg';
import whisperImg from '../assets/images/home/wisper.svg';
import flareRight from '../assets/images/home/flare-right.svg';
import flareLeft from '../assets/images/home/flare-left.svg';

const Partners = () => {
  return (
    <SectionContainer className="flex-col px-10 md:px-20 lg:px-[300px] py-12">
      <img
        src={flareLeft}
        alt="purple lens flare"
        className="absolute pointer-events-none -left-28 -top-32 mix-blend-hard-light -z-10 lg:hidden"
      />
      <img
        src={flareRight}
        alt="purple lens flare"
        className="absolute pointer-events-none -bottom-[60%] right-0 mix-blend-hard-light -z-20 lg:hidden"
      />

      <div className="md:w-[480px] text-center md:h-auto mx-auto">
        <h5>Partners and Sponsors</h5>
        <p className="my-3 lg:my-5 font-medium">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="relative w-full max-w-6xl mx-auto py-32 rounded-[2px] border-[1px] border-[var(--color-3)]">
        <img
          src={flareLeft}
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none lg:-top-[65%] lg:-left-1/3 mix-blend-hard-light -z-10"
        />
        <img
          src={flareRight}
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none  lg:-bottom-[70%] lg:-right-40 mix-blend-hard-light -z-20"
        />

        <div className="w-full max-w-4xl mx-auto grid grid-cols-3">
          <div className="p-5 grid place-items-center border-b-[3px] border-[var(--color-3)] relative before:content-[''] before:w-12 before:h-12 before:absolute before:bottom-[-25px] before:right-[-25px] before:bg-[var(--navy-blue)]">
            <img src={libertyImg} alt="Liberty" />
          </div>
          <div className="p-5 grid place-items-center border-b-[3px] border-[var(--color-3)] border-l-[3px] border-r-[3px]">
            <img src={libertyPayImg} alt="Liberty Pay" />
          </div>
          <div className="p-5 grid place-items-center border-b-[3px] border-[var(--color-3)] relative before:content-[''] before:w-12 before:h-12 before:absolute before:bottom-[-25px] before:left-[-25px] before:bg-[var(--navy-blue)]">
            <img src={winwiseImg} alt="Winwise" />
          </div>
          <div className="p-5 grid place-items-center">
            <img src={whisperImg} alt="Wisper" />
          </div>
          <div className="p-5 grid place-items-center border-l-[3px] border-r-[3px] border-[var(--color-3)]">
            <img src={payboxImg} alt="Paybox" />
          </div>
          <div className="p-5 grid place-items-center">
            <img src={visualPlusImg} alt="Vizual Plus" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Partners;
