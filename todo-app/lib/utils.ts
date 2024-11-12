import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

const firebaseConfig = {
  // Your Firebase configuration
};

import { db } from "./firebase/config";

export const addTaskToFirebase = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  try {
    await addDoc(collection(db, "tasks"), {
      title,
      description,
      completed: false,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding task to Firebase:", error);
  }
};
