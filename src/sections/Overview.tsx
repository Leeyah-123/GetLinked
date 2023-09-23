import bigIdea from '../assets/images/home/The big idea.png';
import SectionContainer from '../components/SectionContainer';
import star3 from '../assets/images/home/star3.svg';

const Overview = () => {
  return (
    <SectionContainer id="overview" position="right">
      <div className="contents">
        <img src={bigIdea} alt="" className="" />

        <img
          src={star3}
          alt=""
          className="w-[3vw] lg:w-auto absolute top-10 left-10"
        />
      </div>

      {/*  */}
      <div className="lg:px-10 space-y-5 text-center md:text-left lg:text-sm">
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

        <img
          src={star3}
          alt=""
          className="w-[3vw] lg:w-auto absolute top-[60%] right-10 lg:top-[30%]"
        />
      </div>
    </SectionContainer>
  );
};

export default Overview;
