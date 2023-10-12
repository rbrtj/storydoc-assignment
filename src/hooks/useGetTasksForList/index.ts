import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TaskType } from "../../components/task/types/task.types.ts";

export const useGetTasksForList = (listId: string) => {
  const tasks = useSelector((state: RootState) => {
    return state.tasks.allTasks.filter((task: TaskType) => {
      return task.listId === listId;
    });
  });

  return tasks;
};
