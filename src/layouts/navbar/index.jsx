import { Link, useLocation } from "react-router-dom";
import SearchInput from "@layouts/navbar/components/SearchInput";
import NavItem from "@layouts/navbar/components/NavItem";
import CartButton from "@layouts/navbar/components/CartButton";
import { NAVIGATION_ITEMS } from "@layouts/navbar/constants/navigation";

const Navbar = ({ onSearch }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  return (
    <header className="bg-white shadow-sm">
      <div className="flex flex-row h-16 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 gap-1 justify-between">
        <div className="flex justify-start items-center">
          <Link to="/" className="text-3xl text-color-red">
            <h1 className="-mt-2">SHOP.CO</h1>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between px-8">
          <nav className="hidden lg:flex lg:space-x-4 lg:items-center lg:justify-between">
            {NAVIGATION_ITEMS.map((item) => (
              <NavItem
                key={item.key}
                item={item}
                isActive={item.key === currentPath}
              />
            ))}
          </nav>
          <SearchInput onSearch={onSearch} />
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-end">
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
