import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../components/task/store/task.slice.ts";
import { v4 as uuidv4 } from "uuid";
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
    const newTask = {
      id: uuidv4(),
      listId,
      title: taskName,
    };
    dispatch(addTask({ task: newTask }));
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
