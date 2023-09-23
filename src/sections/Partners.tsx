import SectionContainer from '../components/SectionContainer';

import libertyImg from '../assets/images/home/liberty.svg';
import libertyPayImg from '../assets/images/home/libertypay.svg';
import payboxImg from '../assets/images/home/paybox.svg';
import visualPlusImg from '../assets/images/home/vizual-plus.svg';
import winwiseImg from '../assets/images/home/winwise.svg';
import whisperImg from '../assets/images/home/wisper.svg';

const Partners = () => {
  return (
    <SectionContainer className="flex-col px-10 md:px-20 lg:px-[300px] py-12">
      <div className="md:w-[480px] text-center md:h-auto mx-auto">
        <h2 className="font-bold text-3xl">Partners and Sponsors</h2>
        <p className="my-5">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="w-full max-w-[1255px] mx-auto py-32 rounded-[2px] border-[1px] border-[var(--color-3)]">
        <div className="w-full max-w-[898px] mx-auto grid grid-cols-3">
          <div className="p-5 grid place-items-center border-b-[3px] border-[var(--color-3)] relative before:content-[''] before:w-[50px] before:h-[50px] before:absolute before:bottom-[-25px] before:right-[-25px] before:bg-[var(--navy-blue)]">
            <img src={libertyImg} alt="Liberty" />
          </div>
          <div className="p-5 grid place-items-center border-b-[3px] border-[var(--color-3)] border-l-[3px] border-r-[3px]">
            <img src={libertyPayImg} alt="Liberty Pay" />
          </div>
          <div className="p-5 grid place-items-center border-b-[3px] border-[var(--color-3)] relative before:content-[''] before:w-[50px] before:h-[50px] before:absolute before:bottom-[-25px] before:left-[-25px] before:bg-[var(--navy-blue)]">
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
