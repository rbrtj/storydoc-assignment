import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices";

export const useAddNewTask = () => {
  const dispatch = useDispatch();
  const addNewTask = ({
    listIndex,
    taskName,
  }: {
    listIndex: number;
    taskName: string;
  }) => {
    dispatch(addTask({ listIndex, taskName }));
  };

  return addNewTask;
};
