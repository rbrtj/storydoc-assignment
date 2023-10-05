import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

export const useListsForActiveWorkspace = () => {
  return useSelector((state: RootState) => {
    const activeWorkspace = state.board.find((workspace) => workspace.isActive);
    return activeWorkspace ? activeWorkspace.lists : [];
  });
};
