import guide from '../assets/images/home/7450159 1.png';
import SectionContainer from '../components/SectionContainer';

const RulesAndGuide = () => {
  return (
    <SectionContainer position="left">
      <img src={guide} alt="" className="" />

      {/*  */}
      <div className="text-[3.4vw] grow space-y-5 max-w-xl text-center md:text-left lg:text-sm">
        <h5 className="text-xl font-bold clash-display lg:text-3xl">
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
