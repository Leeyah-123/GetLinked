import {
  TimelineLeft,
  TimelineMobile,
  TimelineRight,
} from '../components/TimelineComponents'
import { timelines } from '../utils/utils'

const Timeline = () => {
  return (
    <section className="border-b-[1px] border-[#ffffff2e] pb-10">
      <div className="">
        <div className="w-full max-w-[346px] mx-auto text-center text-white mb-20">
          <h1 className="text-[32px] font-bold mb-2">Timeline</h1>
          <p className="text-[14px]">
            Here is the breakdown of the time we anticipate using for the upcoming event.
          </p>
        </div>
        <section className="hidden sm:block">
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
    </section>
  )
}

export default Timeline
