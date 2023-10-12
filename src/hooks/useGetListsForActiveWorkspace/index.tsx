import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

export const useGetListsForActiveWorkspace = () => {
  return useSelector((state: RootState) => {
    const activeWorkspace = state.workspaces.allWorkspaces.find(
      (workspace) => workspace.isActive,
    );
    const lists = state.lists.allLists.filter(
      (list) => list.workspaceId === activeWorkspace?.id,
    );
    return lists;
  });
};
