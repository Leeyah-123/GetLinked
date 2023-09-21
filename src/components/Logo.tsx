import logo from '../assets/images/getlinked.png';

const Logo = () => {
  return (
    <>
      <img src={logo} alt="GetLinked Logo" className="hidden lg:block" />
      <img
        src={logo}
        alt="GetLinked Logo"
        className="lg:hidden aspect-[170/32] w-[10vw]"
      />
    </>
  );
};

export default Logo;
