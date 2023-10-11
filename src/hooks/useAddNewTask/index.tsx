import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices";

export const useAddNewTask = (listId: string) => {
  const dispatch = useDispatch();
  const [isNewTask, setIsNewTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  const addNewTask = ({
    listId,
    taskName,
  }: {
    listId: string;
    taskName: string;
  }) => {
    dispatch(addTask({ listId, taskName }));
  };

  const startNewTask = () => setIsNewTask(true);

  const cancelNewTask = () => {
    setIsNewTask(false);
    setNewTaskName("");
  };

  const saveNewTask = () => {
    addNewTask({ listId, taskName: newTaskName });
    setIsNewTask(false);
    setNewTaskName("");
  };

  const handleNewTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskName(e.target.value);

  return {
    isNewTask,
    newTaskName,
    startNewTask,
    cancelNewTask,
    saveNewTask,
    handleNewTaskNameChange,
  };
};
