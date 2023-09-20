import { Button } from '../components/Buttons'

const Home = () => {
  return (
    <section className=''>
      <div className="flex justify-end relative">
        <p className="text-lg text-center md:text-3xl font-semibold mt-10 capitalize">
          Igniting a Revolution in HR Innovation
        </p>
      </div>

      <div className="space-y-6 max-w-fit">
        <p className="text-5xl font-semibold md:text-8xl mt-20">
          getLinked Tech <br /> Hackathon <span className="text-magenta">1.0</span>
        </p>
        <p className="font-semibold">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
        </p>

        <Button className="px-10 py-3">Register</Button>
      </div>

      <p className="space-x-5 mt-10 text-4xl">
        <span>
          00<span className="text-base">H</span>
        </span>
        <span>
          00<span className="text-base">M</span>
        </span>
        <span>
          00<span className="text-base">S</span>
        </span>
      </p>
    </section>
  )
}

export default Home
