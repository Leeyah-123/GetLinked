import criteriaImg from '../assets/images/8046554 1.png'
import { Button } from '../components/Buttons'
import { criterias } from '../utils/utils'

const Criteria = () => {
  return (
    <section className="flex flex-col lg:flex-row pb-10 items-center justify-around space-y-10 md:space-y-0 min-h-[700px]">
      <img src={criteriaImg} alt="" className="" />

      {/*  */}
      <div className="grow space-y-5 max-w-xl text-center md:text-left">
        <h5 className="text-4xl font-semibold">
          Judging Criteria <br />
          <span className="text-magenta">Key Attributes</span>
        </h5>

        <div className="">
          {criterias.map(({ description, title }, index) => (
            <p key={index} className="my-5">
              <span className="capitalize text-[var(--color-2)] font-medium text-lg">
                {title}:{' '}
              </span>
              <span className="text-sm">{description}</span>
            </p>
          ))}
        </div>
        <Button>Read More</Button>
      </div>
    </section>
  )
}

export default Criteria
