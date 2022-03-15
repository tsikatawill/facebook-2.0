import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="sticky bg-white z-50 p-2 lg:px-5 shadow-md flex items-center">
      <div className="left flex items-center">
        <Image
          alt="logo"
          src="https://links.papareact.com/5me"
          layout="fixed"
          width={40}
          height={40}
        />
        <form className="flex items-center bg-gray-100 ml-2 py-2 px-5 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="ml-2 hidden md:inline-flex bg-transparent outline-none flex-shrink placeholder-gray-500 "
            type="text"
            placeholder="Search Facebook"
          />
        </form>
      </div>
      <div className="middle  flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active={true} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="right flex items-center sm:space-x-2 justify-end">
        <Image
          alt="user"
          onClick={signOut}
          src={session.user.image}
          width={40}
          height={40}
          className="cursor-pointer rounded-full"
        />
        <p className="font-semibold whitespace-nowrap pr-2">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
