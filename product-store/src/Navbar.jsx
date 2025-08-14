import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="mt-2 ml-4 flex gap-4">
      <NavLink to={"/"} className="bg-gray-500 text-white rounded px-2 py-1">
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
