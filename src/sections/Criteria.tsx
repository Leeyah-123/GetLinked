import criteriaImg from '../assets/images/home/8046554 1.png';
import { Button } from '../components/Buttons';
import SectionContainer from '../components/SectionContainer';
import { criterias } from '../utils/utils';
import flareRight from '../assets/images/home/flare-right.svg';
import flareLeft from '../assets/images/home/flare-left.svg';

const Criteria = () => {
  return (
    <SectionContainer position="right">
      <img src={criteriaImg} alt="" className="" />

      <img
        src={flareLeft}
        aria-hidden={true}
        className="absolute pointer-events-none -left-20 top-0 lg:top-0 lg:left-0 mix-blend-hard-light -z-10"
      />
      <img
        src={flareRight}
        aria-hidden={true}
        className="absolute pointer-events-none bottom-0 right-0 lg:-bottom-[60%] lg:-right-0 mix-blend-hard-light -z-20"
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
