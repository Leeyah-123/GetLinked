import bigIdea from '../assets/images/home/The big idea.png';
import SectionContainer from '../components/SectionContainer';

const Overview = () => {
  return (
    <SectionContainer id="overview" position="right">
      <img src={bigIdea} alt="" className="" />

      {/*  */}
      <div className="space-y-5 text-center md:text-left lg:text-sm">
        <h5>
          Introduction to getlinked <br />
          <span className="text-magenta">techHackathon 1.0</span>
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

export default Overview;
