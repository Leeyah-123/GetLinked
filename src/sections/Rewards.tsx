import goldenCup from '../assets/images/home/9486889 1.png'
import awards from '../assets/images/home/Rewards.svg'
import SectionContainer from '../components/SectionContainer'
import flareRight from '../assets/images/home/flare-right.svg'
import flareLeft from '../assets/images/home/flare-left.svg'

import star1 from '../assets/images/home/star1.svg'
import star2 from '../assets/images/home/star2.svg'
import star3 from '../assets/images/home/star3.svg'

const Rewards = () => {
  return (
    <SectionContainer className="text-center lg:text-left">
      {/* stars */}
      <img
        src={star3}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none top-16 left-1/3 mix-blend-hard-light -z-10"
      />
      <img
        src={star1}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none top-60 left-1/2 mix-blend-hard-light -z-10"
      />
      <img
        src={star1}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none top-80 right-40 mix-blend-hard-light -z-10"
      />
      <img
        src={star2}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none bottom-20 right-96 mix-blend-hard-light -z-10"
      />
      <img
        src={star1}
        aria-hidden="true"
        className="w-[3vw] lg:w-auto absolute pointer-events-none bottom-32 left-96 mix-blend-hard-light -z-10"
      />

      <img
        src={flareLeft}
        aria-hidden="true"
        className="absolute pointer-events-none -left-20 top-0 lg:-top-32 lg:left-0 mix-blend-hard-light -z-10"
      />
      <img
        src={flareRight}
        aria-hidden="true"
        className="absolute pointer-events-none -bottom-20 right-0 lg:-bottom-[50%] lg:-right-40 mix-blend-hard-light -z-20"
      />

      <div className="flex flex-col lg:flex-row-reverse md:items-center md:text-left gap-16 lg:pb-14">
        <div className="lg:flex-1">
          <div>
            <h5>
              Prizes and <br />
              <span className="text-magenta">Rewards</span>
            </h5>
            <p className="my-3 lg:my-5 font-medium">
              Highlight of the prizes or rewards for winners and for participants.
            </p>
          </div>
          <div className="flex flex-col justify-center items-end">
            <img
              src={goldenCup}
              alt="award cup"
              className="lg:hidden my-12"
              loading="lazy"
            />
            <img src={awards} className="w-[900px]" alt="award cup" loading="lazy" />
          </div>
        </div>

        <div className="hidden lg:flex flex-1">
          <img
            src={goldenCup}
            alt="award cup"
            loading="lazy"
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

export default Rewards
