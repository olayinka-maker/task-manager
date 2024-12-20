"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getDocs, doc, collection, updateDoc, where, query } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { auth } from "@/lib/firebase/config";

interface Task {
  id: string;
  title: string;
  completed?: boolean;
  highlighted?: boolean;
}

interface TaskContextValue {
  tasks: Task[];
  completedTasks: Task[];
  handleTaskComplete: (task: Task) => void;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Check if user exists first
      if (!auth.currentUser) return;
  
      try {
        const tasksRef = collection(db, "tasks");
        const q = query(tasksRef, where("userId", "==", auth.currentUser.uid));
        
        const querySnapshot = await getDocs(q);
        const fetchedTasks: Task[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        } as Task));
  
        setTasks(fetchedTasks);
        console.log(fetchTasks);
        
        setCompletedTasks(fetchedTasks.filter((task) => task.completed));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
  
    if (auth.currentUser) {
      fetchTasks();
    }
  
  }, [auth.currentUser]); 

  const handleTaskComplete = async (task: Task) => {
    try {
      await updateDoc(doc(db, "tasks", task.id), { completed: task.completed });
      if (task.completed) {
        setCompletedTasks((prevCompletedTasks) => [
          ...prevCompletedTasks,
          task,
        ]);
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
      } else {
        setCompletedTasks((prevCompletedTasks) =>
          prevCompletedTasks.filter((t) => t.id !== task.id)
        );
        setTasks((prevTasks) => [...prevTasks, task]);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, completedTasks, handleTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
