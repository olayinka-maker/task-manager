"use client";
import { Task } from "@/app/page";
import React, { useState } from "react";
import { useTasks } from "@/context/TaskContext";

interface TaskListItemProps {
  task: Task;
  onTaskComplete: (task: Task) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
  task,
  onTaskComplete,
}) => {
  const [isCompleted, setIsCompleted] = useState(task.completed || false);
  const { completedTasks } = useTasks();

  const handleTaskComplete = () => {
    setIsCompleted(!isCompleted);
    onTaskComplete({ ...task, completed: !isCompleted });
    console.log(isCompleted);
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg ${
        completedTasks ? "bg-orange-500" : "bg-gray-50"
      }`}
    >
      <input
        type="checkbox"
        className="w-5 h-5 rounded-sm border-2 border-gray-300 checked:bg-orange-600"
        checked={isCompleted}
        onChange={handleTaskComplete}
      />
      <span className={isCompleted ? "line-through text-black" : ""}>
        {task.title}
      </span>
    </div>
  );
};

export default TaskListItem;
