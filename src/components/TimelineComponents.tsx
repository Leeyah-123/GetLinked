interface Timeline {
  title: string;
  content: string;
  index: number;
  date: string;
  start?: boolean;
  end?: boolean;
}

export const TimelineLeft = ({
  title,
  content,
  index,
  date,
  start,
}: Timeline) => {
  return (
    <div className="grid grid-cols-[1fr_70px_1fr]">
      <div
        className={`pr-[40px] md:pr-[80px] pb-5 ${start ? 'pt-24' : 'pt-10'}`}
      >
        <h1 className="text-right text-[var(--color-3)] text-[24px] font-bold mb-2">
          {title}
        </h1>
        <p className="text-[14px] text-white text-right">{content}</p>
      </div>
      <div className="flex justify-center relative">
        <div className="h-[58px] w-[58px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[24px] font-bold self-end mb-5 relative z-[1] border-[6px] border-[var(--navy-blue)]">
          {index}
        </div>
        <div className="absolute w-[4px] h-full bg-[var(--color-3)]"></div>
      </div>
      <div className="pl-[40px] md:pl-[80px] flex items-center">
        <h1
          className={`text-left self-end text-[var(--color-3)] text-[24px] font-bold mb-[30px]`}
        >
          {date}
        </h1>
      </div>
    </div>
  );
};

export const TimelineRight = ({
  title,
  content,
  index,
  date,
  end,
}: Timeline) => {
  return (
    <div className="grid grid-cols-[1fr_70px_1fr]">
      <div className="pr-[40px] md:pr-[80px] flex">
        <h1 className="flex-1 text-right self-end text-[var(--color-3)] text-[24px] font-bold mb-9">
          {date}
        </h1>
      </div>
      <div className="flex justify-center relative">
        <div className="h-[65px] w-[65px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[24px] font-bold self-end mb-5 relative z-[1] border-[10px] border-[var(--navy-blue)]">
          {index}
        </div>
        <div
          className={`absolute w-[4px] h-full bg-[var(--color-3)] ${
            end ? 'bottom-5' : ''
          }`}
        ></div>
      </div>
      <div className="pl-[40px] md:pl-[80px] pb-5 pt-10 text-left">
        <h1 className="text-[var(--color-3)] text-[24px] font-bold mb-2">
          {title}
        </h1>
        <p className="text-[14px] text-white">{content}</p>
      </div>
    </div>
  );
};

export const TimelineMobile = ({ title, content, index, date }: Timeline) => {
  return (
    <div className="grid grid-cols-[36px_1fr] mb-5 text-[12px]">
      <div className="flex justify-center relative">
        <div className="h-[40px] w-[40px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle font-bold self-end relative z-[1] border-[7px] border-[var(--navy-blue)]">
          {index}
        </div>
        <div className={`absolute w-[4px] h-[90%] bg-[var(--color-3)]`}></div>
      </div>
      <div className="pb-[6px] text-left">
        <div className="min-h-[90px]">
          <h1 className="text-[var(--color-3)] font-bold mb-2">{title}</h1>
          <p className="text-white font-medium">{content}</p>
        </div>
        <div className="flex pt-2">
          <h1 className="flex-1 mb-1 text-[var(--color-3)] font-bold">
            {date}
          </h1>
        </div>
      </div>
    </div>
  );
};
