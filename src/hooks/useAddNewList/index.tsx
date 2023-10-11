import { useDispatch } from "react-redux";
import { addList } from "../../store/slices";

export const useAddNewList = () => {
  const dispatch = useDispatch();

  const addNewList = (listName: string) => {
    dispatch(addList({ listName }));
  };

  return addNewList;
};
