import criteriaImg from '../assets/images/home/8046554 1.png';
import flareLeft from '../assets/images/home/flare-left.svg';
import flareRight from '../assets/images/home/flare-right.svg';
import star1 from '../assets/images/home/star1.svg';
import star2 from '../assets/images/home/star2.svg';
import star3 from '../assets/images/home/star3.svg';
import { Button } from '../components/Buttons';
import SectionContainer from '../components/SectionContainer';
import { criterias } from '../utils/utils';

const Criteria = () => {
  return (
    <SectionContainer position="right">
      <img src={criteriaImg} alt="" className="" loading="lazy" />

      <img
        src={flareLeft}
        aria-hidden="true"
        className="absolute pointer-events-none -left-20 top-0 lg:top-0 lg:left-0 mix-blend-hard-light -z-10"
      />
      <img
        src={flareRight}
        aria-hidden="true"
        className="absolute pointer-events-none bottom-0 right-0 lg:-bottom-[60%] lg:-right-0 mix-blend-hard-light -z-20"
      />
      <img
        src={star1}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none right-10 bottom-10 lg:right-1/2 lg:bottom-[20%] mix-blend-hard-light -z-10"
      />
      <img
        src={star2}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none top-[40%] left-20 mix-blend-hard-light -z-10"
      />
      <img
        src={star3}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none top-10 left-40 mix-blend-hard-light -z-10"
      />

      {/*  */}
      <div className="space-y-5 max-w-xl text-center md:text-left lg:px-10">
        <h5 className="text-xl font-bold clash-display lg:text-3xl">
          Judging Criteria <br />
          <span className="text-[var(--color-3)]">Key Attributes</span>
        </h5>

        <div className="">
          {criterias.map(({ description, title }, index) => (
            <p key={index} className="my-5 text-sm">
              <span className="capitalize text-[var(--color-2)] font-medium">
                {title}:{' '}
              </span>
              <span>{description}</span>
            </p>
          ))}
        </div>
        <Button>Read More</Button>
      </div>
    </SectionContainer>
  );
};

export default Criteria;
