"use client";
import { useContext } from "react";
import { useTasks } from "@/context/TaskContext";
import TaskListItem from "@/components/TaskListItem";
import { useRouter } from "next/navigation";

const Completed = () => {
  const { tasks, completedTasks, handleTaskComplete } = useTasks();
  const router = useRouter();

  return (
    <div className="flex w-full flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-semibold">Completed</h1>
        <button className="px-4 py-2 bg-orange-600 text-white rounded-md">
          Sign out
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium">Today's Completed Tasks</h2>
            <p className="text-sm text-gray-500">Monday, 18 December 2023</p>
          </div>

          {/* Completed Tasks List */}
          <div className="space-y-2">
            {completedTasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                onTaskComplete={handleTaskComplete}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Completed;
