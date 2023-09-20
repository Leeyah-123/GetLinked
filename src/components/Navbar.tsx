import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const { pathname } = useLocation();
  const isRegisterRoute = pathname == '/register';

  return (
    <nav className="py-12  px-5 md:px-10 lg:px-20 flex items-center">
      <Link to="/">
        <Logo />
      </Link>

      <div className="ml-auto">
        <div className="space-x-32 hidden md:flex items-center">
          <ul className="inline-flex space-x-5 capitalize font-semibold">
            <li>
              <Link to="/#timeline">timeline</Link>
            </li>
            <li>
              <Link to="/#overview">overview</Link>
            </li>
            <li>
              <Link to="/#faqs">faqs</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>

          <Link
            id="navBtn"
            to="/register"
            className={`relative ${
              isRegisterRoute && 'bg-none bg-navy-blue'
            } btn transition-transform hover:scale-[1.05] focus:scale-[1.05]`}
          >
            <span className="relative z-20">Register</span>
            {isRegisterRoute && (
              <>
                <span className="absolute inset-0.5 z-10 bg-navy-blue rounded-md"></span>
                <span className="absolute inset-0 bg-gradient-to-b from-[#9A39FF] to-[#FF29B9] border-transparent rounded-md"></span>
              </>
            )}
          </Link>
        </div>

        <span className="md:hidden border border-slate-400 rounded-md p-2"></span>
      </div>
    </nav>
  );
};

export default Navbar;
