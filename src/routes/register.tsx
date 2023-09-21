import { FormEvent, useEffect, useState } from 'react';

// images
import graphicDesignerImg from '../assets/images/register/3d-graphic-designer.svg';
import flare from '../assets/images/register/flare.svg';
import flare2 from '../assets/images/register/flare2.svg';
import littleBoyImg from '../assets/images/register/little-boy.svg';
import littleGirlImg from '../assets/images/register/little-girl.svg';
import registrationSuccessfulImg from '../assets/images/register/register-successful.svg';

// stars
import star1 from '../assets/images/register/star1.svg';
import star2 from '../assets/images/register/star2.svg';
import star3 from '../assets/images/register/star3.svg';
import star4 from '../assets/images/register/star4.svg';
import star5 from '../assets/images/register/star5.svg';

// icons
import { BiRefresh } from 'react-icons/bi';

// utilities
import { getCategories, register } from '../utils/apiRequests';

// components
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import BackButton from '../components/BackButton';

const Register = () => {
  const [teamName, setTeamName] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [projectTopic, setProjectTopic] = useState<string>('');
  const [groupSize, setGroupSize] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] =
    useState<boolean>(false);

  const groupSizes = [1, 2, 3, 4, 5];
  const [categories, setCategories] = useState<
    { id: number; name: string }[] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';

    setIsModalOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';

    setIsModalOpen(false);
  };
  const resetFields = () => {
    setTeamName('');
    setPhoneNum('');
    setEmail('');
    setProjectTopic('');
    setGroupSize(0);
    setCategory(0);
    setPrivacyPolicyAccepted(false);
  };

  const fetchCategories = async () => {
    const { success, data, error } = await getCategories();

    if (!success) {
      Notify.failure(`Unable to fetch categories: ${error?.message}`);
      return;
    }

    setCategories(data);
  };

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !category ||
      !email ||
      !groupSize ||
      !phoneNum ||
      !projectTopic ||
      !teamName
    ) {
      Notify.failure('Please fill in all fields');
      return;
    }

    Loading.hourglass();
    const { success, error } = await register({
      category,
      email,
      group_size: groupSize,
      phone_number: phoneNum,
      privacy_poclicy_accepted: true,
      project_topic: projectTopic,
      team_name: teamName,
    });
    Loading.remove();

    if (!success) {
      type ResponseData = { string: Array<string> };

      const responseData: ResponseData = error?.response?.data as ResponseData;
      let errorString = '';

      for (const key in responseData) {
        const errors: Array<string> = responseData[key as keyof ResponseData];
        return (errorString = errors[0]);
      }

      Report.failure('Unable to register', errorString, 'Okay');
      return;
    }

    openModal();
    resetFields();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <BackButton className="pl-[10vw] md:pl-[20vw] py-[5vh]" />

      <h1 className="pl-[10vw] md:pl-[20vw] self-start text-xl text-[var(--color-3)] clash-display font-medium tracking-wide lg:hidden">
        Register
      </h1>

      <div
        id="contact"
        className="relative min-h-screen px-[5vw] flex flex-col items-center lg:px-[7vw] lg:items-stretch lg:grid lg:grid-cols-2 lg:grid-flow-col"
      >
        <img
          src={graphicDesignerImg}
          alt="A graphic designer at his desk"
          className="w-[50vw] max-w-full aspect-square lg:-ml-11 lg:-mt-40"
        />

        <div className="relative mb-2 h-fit rounded-xl px-[5vw] py-[7vh] md:px-[5vw] md:py-[3vh] lg:-ml-7 lg:shadow-[#0f0f0f] lg:shadow-md lg:bg-white/[0.03]  xl:py-[5vh]">
          <h1 className="hidden lg:block text-2xl text-[var(--color-3)] clash-display font-medium tracking-wide mb-4 lg:mb-8">
            Register
          </h1>

          <div className="mb-3 flex">
            <p className="w-[20ch] sm:w-auto text-sm font-medium">
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

          <form onSubmit={registerUser}>
            <header className="uppercase font-2xl font-[550] mb-5">
              Create your account
            </header>

            <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
              <div>
                <label htmlFor="teamName" className="text-sm font-medium">
                  Team's Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  id="teamName"
                  value={teamName}
                  minLength={3}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter the name of your group"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  minLength={11}
                  placeholder="Enter your phone number"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  minLength={3}
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  placeholder="What is your group project topic"
                  className="w-full mt-2 rounded-sm text-sm bg-transparent text-white placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-[60%_40%] gap-2 lg:grid-cols-2 lg:grid-rows-1 lg:gap-5">
              <div className="relative">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  placeholder="Select your category"
                  value={category}
                  onChange={(e) => setCategory(parseInt(e.target.value))}
                  className={`w-full mt-2 rounded-sm text-sm bg-transparent placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2 ${
                    category ? 'text-white' : 'text-white/25'
                  }`}
                >
                  <option
                    value={0}
                    className="text-white/25 font-medium text-sm bg-navy-blue"
                  >
                    Select your category
                  </option>
                  {categories?.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className="bg-navy-blue text-white"
                    >
                      {category.name}
                    </option>
                  ))}
                </select>

                {!categories && (
                  <button
                    className="absolute right-0 top-1"
                    title="Fetch categories"
                    onClick={(e) => {
                      e.preventDefault();
                      fetchCategories();
                    }}
                  >
                    <BiRefresh className="h-6 w-6" />
                  </button>
                )}
              </div>

              <div>
                <label htmlFor="groupSize" className="text-sm font-medium">
                  Group Size
                </label>
                <select
                  name="groupSize"
                  id="groupSize"
                  value={groupSize}
                  onChange={(e) => setGroupSize(parseInt(e.target.value))}
                  placeholder="Select"
                  className={`w-full mt-2 rounded-sm text-sm bg-transparent outline outline-1 outline-white px-5 py-2 ${
                    groupSize ? 'text-white' : 'text-white/25'
                  }`}
                >
                  <option
                    value={0}
                    className="text-white/25 font-medium text-sm bg-navy-blue"
                  >
                    Select
                  </option>
                  {groupSizes.map((gs) => (
                    <option
                      key={gs}
                      value={gs}
                      className="bg-navy-blue text-white"
                    >
                      {gs}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <p className="text-[var(--color-2)] text-sm italic">
                Please review your registration details before submitting
              </p>
              <label htmlFor="termsAndConditions">
                <input
                  onChange={(e) => {
                    setPrivacyPolicyAccepted(e.target.checked);
                  }}
                  checked={privacyPolicyAccepted}
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

          <img
            src={star4}
            alt=""
            className="absolute top-1/3 left-0 w-[3vw] lg:top-5 lg:left-auto lg:right-1/3 lg:w-6"
          />
          <img
            src={star5}
            alt=""
            className="hidden absolute -bottom-3 right-32 lg:block"
          />
        </div>

        <div
          role="dialog"
          className={`fixed z-[50] grid place-items-center inset-0 ${
            isModalOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Dialog overlay */}
          <div
            className={`fixed inset-0 bg-navy-blue/90 ${
              isModalOpen ? 'block' : 'hidden'
            }`}
            onClick={closeModal}
          ></div>

          {/* Dialog content */}
          <div className="w-[80vw] text-center gap-5 h-fit outline outline-2 outline-[var(--color-3)] rounded-sm z-40 flex flex-col place-items-center pb-10 px-8 lg:pb-16 lg:px-11 lg:w-[50vw]">
            <img src={registrationSuccessfulImg} alt="" />
            <div className="text-xl font-semibold">
              <p>Congratulations</p>
              <p>You have successfully registered</p>
            </div>
            <div className="text-sm font-medium">
              <p>Yes, it was easy and you did it!</p>
              <p>check your mail box for next step</p>
            </div>
            <button className="btn capitalize w-full" onClick={closeModal}>
              back
            </button>
          </div>
        </div>

        <img
          src={flare}
          alt=""
          className="absolute -top-[5rem] left-0 pointer-events-none mix-blend-hard-light -z-10 lg:-top-[15rem] lg:-left-2"
        />
        <img
          src={flare2}
          alt=""
          className="hidden absolute bottom-0 right-0 mix-blend-hard-light pointer-events-none -z-10 lg:block"
        />
        <img
          src={star1}
          alt=""
          className="absolute left-auto right-[5vw] w-[3vw] top-0 lg:left-[8vw] lg:right-auto lg:w-auto"
        />
        <img
          src={star2}
          alt=""
          className="absolute hidden left-[10vw] w-[3vw] bottom-1/4 lg:w-auto lg:block"
        />
        <img
          src={star3}
          alt=""
          className="absolute right-3 bottom-[15rem] w-[3vw] lg:w-auto lg:bottom-1/3 lg:right-auto lg:left-[40vw]"
        />
      </div>
    </>
  );
};

export default Register;
