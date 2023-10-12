import { useDispatch } from "react-redux";
import { removeList } from "../../components/list/store/list.slice.ts";

export const useListRemove = ({ listId }: { listId: string }) => {
  const dispatch = useDispatch();
  const listRemove = () => {
    dispatch(removeList({ id: listId }));
  };
  return listRemove;
};
