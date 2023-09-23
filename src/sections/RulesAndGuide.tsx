import guide from '../assets/images/home/7450159 1.png';
import SectionContainer from '../components/SectionContainer';
import flareRight from '../assets/images/home/flare-right.svg';
import flareLeft from '../assets/images/home/flare-left.svg';
import star1 from '../assets/images/home/star1.svg';
import star2 from '../assets/images/home/star2.svg';

const RulesAndGuide = () => {
  return (
    <SectionContainer position="left">
      <img
        aria-hidden={true}
        src={flareLeft}
        className="absolute pointer-events-none -left-20 -top-5 lg:-top-80 lg:left-0 mix-blend-hard-light -z-10"
      />
      <img
        aria-hidden={true}
        src={flareRight}
        className="absolute pointer-events-none bottom-0 right-0 lg:-bottom-1/2 lg:-right-56 mix-blend-hard-light -z-10"
      />
      <img
        aria-hidden={true}
        src={star1}
        className="w-[3vw] lg:w-auto absolute pointer-events-none right-20 bottom-[20%] lg:right-auto lg:left-[50%] mix-blend-hard-light -z-10"
      />
      <img
        aria-hidden={true}
        src={star2}
        className="w-[3vw] lg:w-auto absolute pointer-events-none top-[20%] left-10 lg:left-[40%] mix-blend-hard-light -z-10"
      />

      <img src={guide} alt="" aria-hidden={true} loading="lazy" />

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
