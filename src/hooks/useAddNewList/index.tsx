import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../components/list/store/list.slice.ts";
import { v4 as uuidv4 } from "uuid";
import { ListType } from "../../components/list/types/list.types.ts";
import { RootState } from "../../store";

export const useAddNewList = () => {
  const dispatch = useDispatch();
  const activeWorkspace = useSelector((state: RootState) =>
    state.workspaces.allWorkspaces.find((workspace) => workspace.isActive),
  );

  const addNewList = (listName: string) => {
    const newList: ListType = {
      title: listName,
      id: uuidv4(),
      workspaceId: activeWorkspace?.id ?? "1",
    };
    dispatch(addList({ list: newList }));
  };

  return addNewList;
};
