import React from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between px-10  my-auto items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      </div>
      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">
        Sign out
        <Image src={LogOut} alt="logout" width={40} height={40} />
      </button>
    </div>
  );
};

export default Header;
