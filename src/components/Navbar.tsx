import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`top-0 right-0 left-0 px-5 md:px-10 items-center z-10 lg:flex lg:py-12 lg:px-20 ${
        isScrolled && 'backdrop-blur-sm'
      } ${location.pathname !== '/' && 'hidden'}`}
    >
      <Link to="/">
        <Logo />
      </Link>

      <div className="ml-auto">
        <div className="space-x-32 hidden md:flex items-center">
          <ul className="inline-flex space-x-5 capitalize font-semibold">
            <li>
              <Link
                to="/#timeline"
                className={`${location.hash === '#timeline' && 'active'}`}
              >
                timeline
              </Link>
            </li>
            <li>
              <Link
                to="/#overview"
                className={`${location.hash === '#overview' && 'active'}`}
              >
                overview
              </Link>
            </li>
            <li>
              <Link
                to="/#faqs"
                className={`${location.hash === '#faqs' && 'active'}`}
              >
                faqs
              </Link>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>

          <NavLink
            id="registerBtn"
            to="/register"
            className={({ isActive }) =>
              `btn relative transition-transform hover:scale-[1.05] focus:scale-[1.05] ${
                isActive && 'active bg-none bg-[var(--navy-blue)]'
              }`
            }
          >
            <span className="relative z-20">Register</span>
          </NavLink>
        </div>

        <span className="md:hidden border border-slate-400 rounded-md p-2"></span>
      </div>
    </nav>
  );
};

export default Navbar;
