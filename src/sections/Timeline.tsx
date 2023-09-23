import SectionContainer from '../components/SectionContainer';
import {
  TimelineLeft,
  TimelineMobile,
  TimelineRight,
} from '../components/TimelineComponents';
import { timelines } from '../utils/utils';

const Timeline = () => {
  return (
    <SectionContainer id="timeline" className="pb-10">
      <div className="lg:px-10">
        <div className="w-full max-w-[346px] mb-10 mx-auto text-center text-white lg:mb-20">
          <h1 className="mb-2 text-xl font-bold clash-display lg:text-3xl">
            Timeline
          </h1>
          <p className="text-[3.4vw] font-medium lg:text-sm">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
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
    </SectionContainer>
  );
};

export default Timeline;
