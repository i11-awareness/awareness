import { NavLink } from "react-router-dom";

const NavItem = ({ item, onClick, className }) => {
  return (
    <NavLink
      to={item.to}
      onClick={onClick}
      className={({ isActive }) =>
        `${className} ${
          isActive
            ? "bg-gray-700 text-white"
            : "text-gray-100 hover:bg-gray-700 hover:text-white"
        } block w-full px-4 py-10 transition duration-300 ease-in-out`
      }
    >
      {item.name}
    </NavLink>
  );
};

export default NavItem;
