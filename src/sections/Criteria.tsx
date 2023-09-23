import criteriaImg from '../assets/images/home/8046554 1.png';
import { Button } from '../components/Buttons';
import SectionContainer from '../components/SectionContainer';
import { criterias } from '../utils/utils';

const Criteria = () => {
  return (
    <SectionContainer position="right">
      <img src={criteriaImg} alt="" className="" />

      {/*  */}
      <div className="text-[3.4vw] grow space-y-5 max-w-xl text-center md:text-left lg:text-sm">
        <h5 className="text-xl font-bold clash-display lg:text-3xl">
          Judging Criteria <br />
          <span className="text-[var(--color-3)]">Key Attributes</span>
        </h5>

        <div className="">
          {criterias.map(({ description, title }, index) => (
            <p key={index} className="my-5">
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
