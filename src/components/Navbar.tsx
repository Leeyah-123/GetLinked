import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="py-12 border-b border-b-slate-400 px-5 md:px-10 lg:px-20 flex items-center">
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
            className="btn transition-transform hover:scale-[1.05] focus:scale-[1.05]"
          >
            Register
          </Link>
        </div>

        <span className="md:hidden border border-slate-400 rounded-md p-2"></span>
      </div>
    </nav>
  );
};

export default Navbar;
