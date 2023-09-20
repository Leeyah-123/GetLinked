import guide from '../assets/images/7450159 1.png';

const RulesAndGuide = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse pb-10 items-center justify-around space-y-10 md:space-y-0 min-h-[700px]">
      <img src={guide} alt="" className="" />

      {/*  */}
      <div className="grow space-y-5 max-w-xl text-center md:text-left">
        <h5 className="text-4xl font-semibold">
          Rules and <br />
          <span className="text-magenta">Guidelines</span>
        </h5>

        <h6 className="text-lg">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </h6>
      </div>
    </section>
  );
};

export default RulesAndGuide;
