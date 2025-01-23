import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SearchInput from "./SearchInput";
import { Fragment } from "react";

const navigation = [
  { name: "On Sale", key: "sale" },
  { name: "New Arrivals", key: "new-arrivals" },
  { name: "Brands", key: "brands" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ onSearch }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Fragment>
      <header className="bg-white shadow-sm">
        <div className="flex flex-row h-16 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 gap-1 justify-between">
          <div className="flex justify-start items-center">
            <Link to="/" className="text-3xl text-[#ff0000]">
              <h1 className="-mt-2">SHOP.CO</h1>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between px-8">
            <div className="hidden lg:flex lg:space-x-4 lg:items-center lg:justify-between">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={`/${item.key}`}
                  className={classNames(
                    item.key === pathname.split("/")[1]
                      ? "text-red-500"
                      : "text-black hover:opacity-70",
                    "text-base font-normal"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <SearchInput onSearch={onSearch} />
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <Link
              className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              to={"/cart"}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>

              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
