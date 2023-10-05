import { useDispatch } from "react-redux";
import { editListName } from "../../store/slices";

export const useEditListName = () => {
  const dispatch = useDispatch();

  const editList = (listIndex: number, newName: string) => {
    dispatch(editListName({ listIndex, newName }));
  };

  return editList;
};
