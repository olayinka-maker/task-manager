"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

const navItems = [
  { id: 1, label: "Dashboard", href: "/" },
  { id: 2, label: "Active", href: "/active" },
  { id: 3, label: "Completed", href: "/completed" },
];

const SideBar = () => {
  const { openModal } = useModal();

  return (
    <section className="min-h-screen">
      <div className="w-48 bg-white h-screen p-4 border-r">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-orange-600 font-bold text-xl">To-Do App</span>
        </div>

        <button
          onClick={openModal}
          className="w-full flex items-center gap-2 mb-8 text-left"
        >
          <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
            +
          </span>
          <span className="text-gray-800">Add Task</span>
        </button>

        <nav className="space-y-2 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full text-left p-2 rounded-lg ${
                item.href === "/"
                  ? "bg-orange-100 text-gray-800"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default SideBar;
