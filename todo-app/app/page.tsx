"use client";
import AddTaskModal from "@/components/AddTaskModal";
import Header from "@/components/Header";
import WelcomeBanner from "@/components/WelcomeBanner";
import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";
import { log } from "console";
import ProtectedRoute from "@/components/ProctectedRoute";

const TodoDashboard = () => {
  const { openModal, closeModal, isOpen } = useModal();
  const { user } = useAuth();
  console.log(user?.email);

  console.log(isOpen);

  const tasks = [
    { id: 1, title: "Buy monthly groceries", completed: false },
    { id: 2, title: "Pick up the kids", completed: false },
    { id: 3, title: "Get nails and hair done", completed: false },
    { id: 4, title: "Prepare presentations", highlighted: true },
    { id: 5, title: "Go to the gym", highlighted: true },
    { id: 6, title: "Get nails and hair done", completed: false },
    { id: 7, title: "Prepare presentations", highlighted: true },
    { id: 8, title: "Go to the gym", highlighted: true },
    { id: 9, title: "Get nails and hair done", completed: false },
    { id: 10, title: "Prepare presentations", highlighted: true },
    { id: 11, title: "Go to the gym", highlighted: true },
    // Add more tasks as needed
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col overflow-hidden bg-white">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 flex p-8 flex-col">
          <Header />
          <WelcomeBanner />

          <div className="flex gap-6  justify-center mx-auto  items-start w-[90%]">
            {/* TaskList banner */}
            <div className="flex-1  relative max-h-[calc(100vh-200px)] overflow-y-auto">
              <div className="flex px-2  z-40 bg-white py-2 top-0 right-0 left-0 justify-between items-center ">
                <h2 className="font-medium text-gray-800">Today's Tasks</h2>
                <div className="flex items-center gap-4">
                  <button className="text-orange-600 text-sm">
                    Delete All
                  </button>
                </div>
              </div>
              {/* Tasks List */}
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      task.highlighted ? "bg-orange-100" : "bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-sm border-2 border-gray-300 checked:bg-orange-600"
                    />
                    <span>{task.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="w-48 space-y-4">
              <span className="text-gray-600 text-sm">
                Monday, 18 December 2023
              </span>
              <div className="bg-orange-600 p-4 rounded-lg text-white">
                <div className="mb-2">
                  <span className="text-3xl font-bold">40%</span>
                </div>
                <div className="text-sm">Completed tasks</div>
              </div>

              <div className="bg-orange-300 p-4 rounded-lg text-white">
                <div className="mb-2">
                  <span className="text-3xl font-bold">60%</span>
                </div>
                <div className="text-sm">Time Progress</div>
              </div>

              <div className="relative">
                <img
                  src="/api/placeholder/200/240"
                  alt="Illustration of person with laptop"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddTaskModal />
    </div>
  );
};

export default TodoDashboard;
