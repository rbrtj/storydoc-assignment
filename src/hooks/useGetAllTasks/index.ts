import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useGetAllTasks = () => {
  const allTasks = useSelector((state: RootState) => state.tasks.allTasks);
  return allTasks;
};
