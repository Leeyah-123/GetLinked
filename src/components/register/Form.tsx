import { Notify, Loading } from 'notiflix';
import { useState, FormEvent, useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { getCategories, register } from '../../utils/apiRequests';
import { Report } from 'notiflix/build/notiflix-report-aio';

const RegisterForm = ({ openModal }: { openModal: () => void }) => {
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
    const { data, error } = await getCategories();

    if (error) {
      Notify.failure(`Unable to fetch categories: ${error.message}`);
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
    const { error } = await register({
      category,
      email,
      group_size: groupSize,
      phone_number: phoneNum,
      privacy_poclicy_accepted: true,
      project_topic: projectTopic,
      team_name: teamName,
    });
    Loading.remove();

    if (error) {
      type ResponseData = { string: Array<string> };

      const responseData: ResponseData = error.response?.data as ResponseData;
      let errorString = '';

      for (const key in responseData) {
        const errors: Array<string> = responseData[key as keyof ResponseData];
        errorString = errors[0];
        break;
      }

      Report.failure(
        'Unable to register',
        errorString || error.message || 'An error occurred',
        'Okay'
      );
      return;
    }

    openModal();
    resetFields();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
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
            required
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
            required
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
            required
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
            required
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
            className={`w-full mt-2 rounded-sm text-sm bg-transparent placeholder:text-white/25 placeholder:font-medium placeholder:text-sm outline outline-1 outline-white px-5 py-2 focus:outline-[3px] ${
              category ? 'text-white' : 'text-white/25'
            }`}
            required
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

          {!categories ? (
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
          ) : null}
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
            className={`w-full mt-2 rounded-sm text-sm bg-transparent outline outline-1 outline-white px-5 py-2 focus:outline-[3px] ${
              groupSize ? 'text-white' : 'text-white/25'
            }`}
            required
          >
            <option
              value={0}
              className="text-white/25 font-medium text-sm bg-navy-blue"
            >
              Select
            </option>
            {groupSizes.map((gs) => (
              <option key={gs} value={gs} className="bg-navy-blue text-white">
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
            className="hover:cursor-pointer"
            onChange={(e) => {
              setPrivacyPolicyAccepted(e.target.checked);
            }}
            checked={privacyPolicyAccepted}
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
          />
          <span className="ml-2 text-sm font-medium">
            I agreed with the event terms and conditions and privacy policy
          </span>
        </label>
        <button type="submit" className="btn self-center lg:self-auto">
          Register Now
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
