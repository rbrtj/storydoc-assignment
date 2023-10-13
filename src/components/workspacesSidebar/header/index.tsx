import "./index.scss";
import { Button } from "../../ui/button";
import { Check, Plus } from "../../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../store/store.ts";
import { addWorkspace } from "../store/workspaces.slice.ts";
import { WorkspaceType } from "../types/workspaces.types.ts";
import { v4 as uuidv4 } from "uuid";
import { WorkspaceItem } from "../workspaceItem/WorkspaceItem.tsx";
import { WorkspaceItemNew } from "../workspaceItem/WorkspaceItemNew.tsx";

export const Header = () => {
  const [newBoardName, setNewBoardName] = useState("");
  const [showNewBoardItem, setShowNewBoardItem] = useState(false);
  const dispatch = useDispatch();
  const workspaces = useSelector(
    (state: RootState) => state.workspaces.allWorkspaces,
  );

  const handleCreateNewBoard = () => {
    setShowNewBoardItem(true);
  };

  const handleCancelNewBoard = (e: any) => {
    console.log(e);
    setShowNewBoardItem(false);
    setNewBoardName("");
  };

  const handleAddNewBoard = () => {
    const newWorkspace: WorkspaceType = {
      id: uuidv4(),
      title: newBoardName,
      isActive: false,
    };
    dispatch(
      addWorkspace({
        workspace: newWorkspace,
      }),
    );
    setShowNewBoardItem(false);
    setNewBoardName("");
  };

  return (
    <div className="workspaces-header">
      {workspaces.map((workspace) => (
        <WorkspaceItem workspace={workspace} disabled={showNewBoardItem} />
      ))}
      {showNewBoardItem && (
        <WorkspaceItemNew
          value={newBoardName}
          setValue={setNewBoardName}
          cancelNewItem={handleCancelNewBoard}
        />
      )}
      {showNewBoardItem ? (
        <Button
          variant="primary"
          onClick={() => handleAddNewBoard()}
          disabled={newBoardName.length === 0}
        >
          <Check />
          Save new workspace
        </Button>
      ) : (
        <Button onClick={() => handleCreateNewBoard()} variant="default">
          <Plus />
          Create Workspace
        </Button>
      )}
    </div>
  );
};
