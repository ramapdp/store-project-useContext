import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchInput = (props) => {
  const { onSearch } = props;

  return (
    <div className="flex flex-1 items-center justify-end sm:inset-0">
      <div className="w-full lg:max-w-md sm:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-full border-0 bg-[#F0F0F0] py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
            onChange={onSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
