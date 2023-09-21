import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b-2 border-primary">
      <div className="container">
        <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 py-4">
          <Link to={'/'} className="text-2xl font-semibold">Mobile <span className="text-primary">Shop</span></Link>
          <ul className="font-medium flex items-center gap-6">
            <li><NavLink to={'/'} className={({isActive, isPending}) => isPending ? '' : isActive ? 'text-primary underline underline-offset-4' : ''}>Home</NavLink></li>
            <li><NavLink to={'/shop'} className={({isActive, isPending}) => isPending ? '' : isActive ? 'text-primary underline underline-offset-4' : ''}>Shop</NavLink></li>
            <li><NavLink to={'/my-account'} className={({isActive, isPending}) => isPending ? '' : isActive ? 'text-primary underline underline-offset-4' : ''}>My Account</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;