import React from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user,logout } = useAuth();

  return (
    <div className="flex justify-between px-10  my-auto items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      </div>
      <button onClick={logout} className="bg-orange-600 flex gap-2 text-white px-4 py-2 rounded-md">
        Sign out
        <LogOut />
      </button>
    </div>
  );
};

export default Header;
