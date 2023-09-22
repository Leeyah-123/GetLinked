import privacyImage from '../assets/images/08 1.png'

const Privacy = () => {
  return (
    <section className="flex flex-col lg:flex-row pb-10 items-center justify-around space-y-10 md:space-y-0 min-h-[700px]">
      <div className="max-w-2xl">
        <h5 className="text-4xl font-semibold">
          Privacy Policy and <br />
          <span className="text-magenta">Terms</span>
        </h5>
        <small>Last updated on September 12, 2023</small>

        <p className="mt-10">
          Below are our privacy & policy, which outline a lot of goodies. it’s our aim to
          always take of our participant
        </p>

        <div className="border border-magenta p-10 mt-5">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines how we
            collect, use, disclose, and safeguard your data when you participate in our
            tech hackathon event. By participating in our event, you consent to the
            practices described in this policy.
          </p>
        </div>
      </div>

      <img src={privacyImage} alt="" />
    </section>
  )
}

export default Privacy
