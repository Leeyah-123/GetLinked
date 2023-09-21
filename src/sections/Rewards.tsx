import goldenCup from '../assets/images/9486889 1.png'
import awards from '../assets/images/Rewards.png'

const Rewards = () => {
  return (
    <section className="px-10 md:px-20 lg:px-28 py-12">
      <div className="flex flex-col md:flex-row-reverse md:items-center md:text-left gap-16">
        <div className="md:flex-1">
          <div>
            <h5 className="text-4xl font-semibold">
              Prizes and <br />
              <span className="text-magenta">Rewards</span>
            </h5>
            {/* <Subheader
              title="Prizes and"
              subtitle="Rewards"
              animateDirection="left"
            /> */}
            <p className="my-5 max-w-sm">
              Highlight of the prizes or rewards for winners and for participants.
            </p>
          </div>
          <div>
            <img src={goldenCup} alt="award cup" className="md:hidden my-12" />
            <img src={awards} alt="award cup" />
          </div>
        </div>

        <div className="hidden md:flex flex-1">
          <img src={goldenCup} alt="award cup" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </section>
  )
}

export default Rewards
