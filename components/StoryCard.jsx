import Image from "next/image";
import React from "react";

const StoryCard = ({ src, profile, name }) => {
  return (
    <div className="story-card relative h-14 w-14">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        alt="user"
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl z-50 top-10"
        src={src}
        alt="profile"
        layout="fill"
      />
    </div>
  );
};

export default StoryCard;
