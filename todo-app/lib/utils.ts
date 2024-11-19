// utils/firebase/tasks.ts
import { auth, db } from "./firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { User } from "firebase/auth";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TaskData {
  title: string;
  description: string;
  completed?: boolean;
  createdAt?: any;
  userId: string;
}

export const addTaskToFirebase = async (
  taskData: Omit<TaskData, "createdAt">
) => {
  if (!taskData.userId) {
    throw new Error("User ID is required");
  }
  try {
    console.log("Adding task with data:", taskData);
    const tasksRef = collection(db, "tasks");
    const newTask = {
      ...taskData,
      completed: false,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(tasksRef, newTask);
    return { id: docRef.id, ...newTask };
  } catch (error: any) {
    console.error("Error adding task: ", error.message || error.code);
    throw error;
  }
};

export const getCurrentDate = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
