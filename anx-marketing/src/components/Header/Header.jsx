import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../index';

function Header() {
  return (
    <header>
      <nav className="flex bg-blue-400 shadow-md">
        <Link to="/">
          <div className="mr-5 px-6 py-3">
            <Logo />
          </div>
        </Link>
        <ul className="flex ml-auto pt-2">
          <li className="px-6 py-4 hover:bg-slate-500 ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-6 py-4 hover:bg-slate-500">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mr-5 px-6 py-4 hover:bg-slate-500 ">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
