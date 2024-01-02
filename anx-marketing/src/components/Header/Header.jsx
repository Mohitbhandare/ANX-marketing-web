import { Logo } from '../index';

function Header() {
  return (
    <header>
      <nav className="flex bg-blue-400 shadow-md">
        <div className="mr-5 px-6 py-3">
          <Logo />
        </div>
        <ul className="flex ml-auto">
          <li className="px-6 py-4 hover:bg-slate-500 ">Home</li>
          <li className="px-6 py-4 hover:bg-slate-500">About</li>
          <li className="mr-5 px-6 py-4 hover:bg-slate-500 ">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
