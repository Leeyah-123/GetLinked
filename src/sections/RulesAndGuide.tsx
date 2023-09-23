import guide from '../assets/images/home/7450159 1.png';
import SectionContainer from '../components/SectionContainer';
import flareRight from '../assets/images/home/flare-right.svg';
import flareLeft from '../assets/images/home/flare-left.svg';

const RulesAndGuide = () => {
  return (
    <SectionContainer position="left">
      <img
        src={flareLeft}
        alt="purple lens flare"
        className="absolute pointer-events-none -left-20 top-0 lg:-top-80 lg:left-0 mix-blend-hard-light"
      />
      <img
        src={flareRight}
        alt="purple lens flare"
        className="absolute pointer-events-none bottom-0 right-0 lg:-bottom-1/2 lg:-right-56 mix-blend-hard-light"
      />

      <img src={guide} alt="" className="" />

      {/*  */}
      <div className="grow max-w-xl lg:px-10 text-center md:text-left">
        <h5>
          Rules and <br />
          <span className="text-[var(--color-3)]">Guidelines</span>
        </h5>

        <h6>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </h6>
      </div>
    </SectionContainer>
  );
};

export default RulesAndGuide;
