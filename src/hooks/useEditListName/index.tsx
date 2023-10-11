import { useDispatch } from "react-redux";
import { editListName } from "../../store/slices";

export const useEditListName = () => {
  const dispatch = useDispatch();

  const editList = (listId: string, newName: string) => {
    dispatch(editListName({ listId, newName }));
  };

  return editList;
};
