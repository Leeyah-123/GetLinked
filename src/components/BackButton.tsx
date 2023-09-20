import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const BackButton = ({ className }: { className: string }) => {
  return (
    <nav className={`${className} lg:hidden`}>
      <Link
        to="/"
        title="Go back to home page"
        className="back-btn relative inline-flex transition-all hover:scale-110 focus:scale-110"
      >
        <IoChevronBackOutline className="h-3 w-3 m-2 relative z-20" />
      </Link>
    </nav>
  );
};

export default BackButton;
