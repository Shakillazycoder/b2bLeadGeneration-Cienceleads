import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/' className={({ isActive}) =>
    isActive ? "text-red-500 border-2 p-3 rounded-xl border-red-500" : "text-white"
  }>Home</NavLink>
      </li>
      <li>
        <NavLink to='/why' className={({ isActive}) =>
    isActive ? "text-red-500 border-2 p-3 rounded-xl border-red-500" : "text-white"
  }>Why Us?</NavLink>
      </li>
      <li>
        <NavLink to='/testimonial' className={({ isActive}) =>
    isActive ? "text-red-500 border-2 p-3 rounded-xl border-red-500" : "text-white"
  }>Testimonials</NavLink>
      </li>
      <li>
        <NavLink to='/services' className={({ isActive}) =>
    isActive ? "text-red-500 border-2 p-3 rounded-xl border-red-500" : "text-white"
  }>Services</NavLink>
      </li>
      <li>
        <NavLink to='/caseStudies' className={({ isActive}) =>
    isActive ? "text-red-500 border-2 p-3 rounded-xl border-red-500" : "text-white"
  }>Case Studies</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1649FF] mt-3 z-[1] p-2  gap-5 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <p className="btn btn-ghost text-xl gap-0">Cience<span className="gap-0 bg-[#1649FF] rounded-xl px-2">Leads</span></p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-8 px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#1649FF] hover:text-[#1649FF] text-lg border-none text-white">Book A Demo</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
