"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";

const AddTaskModal = () => {
  const { isOpen, closeModal } = useModal();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSaveTask = async () => {
    // await addTaskToFirebase({ title, description });
    setTitle("");
    setDescription("");
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Add a New Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-end  gap-2">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              className="bg-SecondaryGold hover:text-white"
              onClick={handleSaveTask}
            >
              Save Task
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
