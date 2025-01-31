import { Link } from "react-router-dom";

const NavItem = ({ item, isActive }) => (
  <Link
    to={`/${item.key}`}
    className={`text-base font-normal ${
      isActive ? "text-red-500" : "text-black hover:opacity-70"
    }`}
  >
    {item.name}
  </Link>
);

export default NavItem;
