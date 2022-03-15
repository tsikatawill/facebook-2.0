import Image from "next/image";
import React from "react";

const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-lg">
      {src && (
        <Image
          src={src}
          alt="user"
          className="rounded-full"
          width={30}
          height={30}
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-semibold">{title}</p>
    </div>
  );
};

export default SidebarRow;
