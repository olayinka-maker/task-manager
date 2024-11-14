"use client";
import AddTaskModal from "@/components/AddTaskModal";
import Header from "@/components/Header";
import WelcomeBanner from "@/components/WelcomeBanner";
import React, { useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";
import { log } from "console";
import ProtectedRoute from "@/components/ProctectedRoute";
import { useRouter } from "next/navigation";
import { getDocs, doc, collection, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import TaskListItem from "@/components/TaskListItem";
import { useContext } from "react";
import { useTasks } from "@/context/TaskContext";
import { getCurrentDate } from "@/lib/utils";

export interface Task {
  id: string;
  title: string;
  completed?: boolean;
  highlighted?: boolean;
}

const TodoDashboard = () => {
  const { openModal, closeModal, isOpen } = useModal();

  const { tasks, completedTasks, handleTaskComplete } = useTasks();

  const { user } = useAuth();
  const router = useRouter();
  console.log(user?.email);

  // if (!user) {
  //   router.push("/sign-in");
  // }

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
                {tasks
                  .filter((task) => !task.completed)
                  .map((task) => (
                    <TaskListItem
                      key={task.id}
                      task={task}
                      onTaskComplete={handleTaskComplete}
                    />
                  ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="w-48 space-y-4">
              <span className="text-black text-sm">{getCurrentDate()}</span>
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
