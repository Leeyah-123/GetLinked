import graphicDesignerImg from '../assets/images/3d-graphic-designer.svg';
import flare from '../assets/images/contact/flare.svg';
import flare2 from '../assets/images/contact/flare2.svg';
import littleBoyImg from '../assets/images/little-boy.svg';
import littleGirlImg from '../assets/images/little-girl.svg';
import BackButton from '../components/BackButton';

const Register = () => {
  return (
    <>
      <BackButton className="px-[17vw] py-[5vh]" />

      <h1 className="px-[17vw] self-start text-xl text-[var(--color-3)] clash-display font-medium tracking-wide lg:hidden">
        Register
      </h1>

      <div
        id="contact"
        className="relative min-h-screen pr-[8vw] flex flex-col items-center lg:px-[8vw] lg:items-stretch lg:grid lg:grid-cols-2 lg:grid-flow-col"
      >
        <img
          src={graphicDesignerImg}
          alt="A graphic designer at his desk"
          className="w-[40vw] aspect-square lg:w-full lg:pb-32"
        />

        <div className="mb-2 rounded-xl px-[9vw] py-[7vh] md:px-[5vw] md:py-[3vh] lg:mt-5 lg:shadow-[#0f0f0f] lg:shadow-md lg:bg-white/[0.03] lg:h-[80vh] xl:max-h-[75vh] xl:py-[7vh]">
          <h1 className="hidden lg:block text-2xl text-[var(--color-3)] clash-display font-medium tracking-wide mb-4 lg:mb-8">
            Register
          </h1>

          <div className="mb-3 flex">
            <p className="w-full sm:w-auto text-sm font-medium">
              Be part of this movement!
            </p>
            <div className="w-[30%] lg:w-28">
              <p className="relative inline-block w-full border-b border-dashed border-b-[var(--color-3)]">
                <img
                  src={littleGirlImg}
                  alt=""
                  className="absolute bottom-0 left-[1vw] sm:left-2 md:left-4"
                />
                <img
                  src={littleBoyImg}
                  alt=""
                  className="absolute bottom-0 left-[3vw] sm:left-4 md:left-8"
                />
              </p>
            </div>
          </div>

          <form>
            <header className="uppercase font-2xl font-[550] mb-5">
              Create your account
            </header>

            <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-5">
              <div>
                <label htmlFor="teamName" className="text-sm font-medium">
                  Team's Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  id="teamName"
                  placeholder="Enter the name of your group"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="projectTopic" className="text-sm font-medium">
                  Project Topic
                </label>
                <input
                  type="text"
                  name="projectTopic"
                  id="projectTopic"
                  placeholder="What is your group project topic"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  placeholder="Select your category"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white/25  placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                >
                  <option
                    value=""
                    className="text-white/25 font-medium text-sm bg-navy-blue"
                  >
                    Select your category
                  </option>
                  <option value="Developer" className="bg-navy-blue">
                    Developer
                  </option>
                  <option value="Product Designer" className="bg-navy-blue">
                    Product Designer
                  </option>
                  <option value="UI/UX Designer" className="bg-navy-blue">
                    UI/UX Designer
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="groupSize" className="text-sm font-medium">
                  Group Size
                </label>
                <select
                  name="groupSize"
                  id="groupSize"
                  placeholder="Select"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white/25 outline outline-1 outline-white px-5 py-2"
                >
                  <option
                    value=""
                    className="text-white/25 font-medium text-sm bg-navy-blue"
                  >
                    Select
                  </option>
                  <option value={1} className="bg-navy-blue">
                    1
                  </option>
                  <option value={2} className="bg-navy-blue">
                    2
                  </option>
                  <option value={3} className="bg-navy-blue">
                    3
                  </option>
                  <option value={4} className="bg-navy-blue">
                    4
                  </option>
                  <option value={5} className="bg-navy-blue">
                    5
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <p className="text-[var(--color-2)] text-sm italic">
                Please review your registration details before submitting
              </p>
              <label htmlFor="termsAndConditions">
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  id="termsAndConditions"
                />
                <span className="ml-2 text-sm font-medium">
                  I agreed with the event terms and conditions and privacy
                  policy
                </span>
              </label>
              <button type="submit" className="btn self-center lg:self-auto">
                Register Now
              </button>
            </div>
          </form>
        </div>

        <img
          src={flare}
          alt=""
          className="absolute top-2 left-0 lg:-top-20 lg:-left-2 -z-10"
          style={{ filter: 'brightness(70%)' }}
        />
        <img
          src={flare2}
          alt=""
          className="absolute bottom-0 right-0 -z-50"
          style={{ filter: 'brightness(70%)' }}
        />
      </div>
    </>
  );
};

export default Register;
