import sponsors from '../assets/images/Partner and sponsors section.svg';

const Partners = () => {
  return (
    <section className=" px-10 md:px-20 lg:px-28 py-12">
      <div className="md:w-[480px] text-center md:h-auto mx-auto">
        <h2 className="font-bold text-3xl">Partners and Sponsors</h2>
        <p className="my-5">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="h-44 md:h-64 lg:h-[600px] mt-12">
        <img src={sponsors} alt="sponsors" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Partners;
