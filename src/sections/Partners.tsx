import SectionContainer from '../components/SectionContainer';

import libertyImg from '../assets/images/home/liberty.svg';
import libertyPayImg from '../assets/images/home/libertypay.svg';
import payboxImg from '../assets/images/home/paybox.svg';
import visualPlusImg from '../assets/images/home/vizual-plus.svg';
import winwiseImg from '../assets/images/home/winwise.svg';
import whisperImg from '../assets/images/home/wisper.svg';

const Partners = () => {
  return (
    <SectionContainer className="text-[3.4vw] flex-col px-10 md:px-20 lg:px-[300px] lg:text-sm py-12">
      <div className="md:w-[480px] text-center md:h-auto mx-auto">
        <h2 className="text-xl font-bold clash-display lg:text-3xl">
          Partners and Sponsors
        </h2>
        <p className="my-3 lg:my-5 font-medium">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto py-32 rounded-[2px] border-[1px] border-[var(--color-3)]">
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
