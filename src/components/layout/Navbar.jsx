import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { FaGithub, FaSun } from 'react-icons/fa';

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <FaGithub className="inline pr-1 text-3xl" /> Github Finder
        </Link>
      </div>
      <div className="navbar-end">
        <button
          data-toggle-theme="bumblebee, dark"
          data-act-class="ACTIVECLASS"
          className="btn btn-ghost normal-case text-l"
        >
          <FaSun className="inline pr-1 text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
