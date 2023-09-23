import SectionContainer from '../components/SectionContainer'
import {
  TimelineLeft,
  TimelineMobile,
  TimelineRight,
} from '../components/TimelineComponents'
import { timelines } from '../utils/utils'
import star1 from '../assets/images/home/star1.svg'
import star2 from '../assets/images/home/star2.svg'
import star3 from '../assets/images/home/star3.svg'

const Timeline = () => {
  return (
    <SectionContainer id="timeline" className="pb-10">
      <div className="relative">
        <div className="w-full max-w-[346px] mb-10 mx-auto text-center text-white lg:mb-20">
          <h5>Timeline</h5>
          <p className="font-medium">
            Here is the breakdown of the time we anticipate using for the upcoming event.
          </p>
        </div>
        <section className="hidden sm:block">
          <img
            src={star3}
            alt=""
            className="absolute left-1/3 w-[3vw] top-40 lg:w-auto"
          />
          <img
            src={star1}
            alt=""
            className="absolute top-1/2 right-20 w-[3vw] lg:w-auto"
          />
          <img
            src={star2}
            alt=""
            className="absolute bottom-10 left-[15vw] w-[3vw] lg:w-auto"
          />
          {timelines.map(({ date, description, title }, index) =>
            index % 2 === 0 ? (
              <TimelineLeft
                key={index}
                title={title}
                content={description}
                date={date}
                index={index + 1}
                start={index === 0}
                end={index === timelines.length - 1}
              />
            ) : (
              <TimelineRight
                key={index}
                title={title}
                content={description}
                date={date}
                index={index + 1}
                start={index === 0}
                end={index === timelines.length - 1}
              />
            )
          )}
        </section>
        <section className="block sm:hidden">
          {timelines.map(({ date, description, title }, index) => (
            <TimelineMobile
              key={index}
              title={title}
              content={description}
              date={date}
              index={index + 1}
            />
          ))}
        </section>
      </div>
    </SectionContainer>
  )
}

export default Timeline
