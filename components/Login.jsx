import { LoginIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        alt="logo"
        objectFit="contain"
      />
      <button
        className="bg-blue-500 text-xl flex gap-2 rounded-lg text-white p-5"
        onClick={signIn}
      >
        Login with Facebook
        <span>
          <LoginIcon height={30} />
        </span>
      </button>
    </div>
  );
};

export default Login;
