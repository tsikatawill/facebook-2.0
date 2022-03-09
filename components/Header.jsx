import Image from "next/image";
import React from "react";
import { BellIcon } from "@heroicons/react/solid";
import { FlagIcon, SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="left flex items-center">
          <Image
            src="https://links.papareact.com/5me"
            layout="fixed"
            width={40}
            height={40}
          />
          <form className="flex items-center bg-gray-100 py-2 px-5 rounded-full">
            <SearchIcon className="h-6 text-gray-500" />
            <input
              className="ml-4 bg-transparent outline-none placeholder-gray-500 "
              type="text"
              placeholder="Search Facebook"
            />
          </form>
        </div>
        <span>lorem</span>
        <span>lorem</span>
      </div>
    </header>
  );
};

export default Header;
