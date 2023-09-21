import bigIdea from '../assets/images/The big idea.png'

const Introduction = () => {
  return (
    <section className="flex flex-col lg:flex-row pb-10 items-center justify-around space-y-10 md:space-y-0 min-h-[700px]">
      <img src={bigIdea} alt="" className="" />

      {/*  */}
      <div className="grow space-y-5 max-w-xl text-center md:text-left">
        <h5 className="text-4xl font-semibold">
          Introduction to getlinked <br />
          <span className="text-magenta">techHackathon 1.0</span>
        </h5>

        <h6 className="text-lg">
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear
          as day: to shape the future. Whether you&apos;re a coding genius, a design
          maverick, or a concept wizard, you&apos;ll have the chance to transform your
          ideas into reality. Solving real-world problems, pushing the boundaries of
          technology, and creating solutions that can change the world, that&apos;s what
          we&apos;re all about!
        </h6>
      </div>
    </section>
  )
}

export default Introduction
