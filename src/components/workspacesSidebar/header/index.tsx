import "./index.scss";
import { Button } from "../../ui/button";
import { Check, Logo, LogoEmpty, Plus } from "../../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../store/store.ts";
import { addWorkspace, setActiveWorkspace } from "../store/workspaces.slice.ts";
import { WorkspaceType } from "../types/workspaces.types.ts";
import { v4 as uuidv4 } from "uuid";

export const Header = () => {
  const [newBoardName, setNewBoardName] = useState("");
  const [showNewBoardItem, setShowNewBoardItem] = useState(false);

  const dispatch = useDispatch();
  const workspaces = useSelector(
    (state: RootState) => state.workspaces.allWorkspaces,
  );
  console.log("workspaces: ", workspaces);
  const handleCreateNewBoard = () => {
    setShowNewBoardItem(true);
    // dispatch(setBoardActive({ index: null }));
  };

  const handleCancelNewBoard = () => {
    setShowNewBoardItem(false);
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
  };

  const handleSetActiveBoard = (id: string) => {
    if (!showNewBoardItem) {
      dispatch(setActiveWorkspace({ id }));
    }
  };

  return (
    <div className="workspaces-header">
      {workspaces.map((workspace) => (
        <div
          key={workspace.id}
          className={`workspaces-header__item ${
            workspace.isActive ? "workspaces-header__item--active" : ""
          }
          ${!showNewBoardItem ? "cursor-pointer" : ""}
          `}
          onClick={() => handleSetActiveBoard(workspace.id)}
        >
          <Logo />
          {workspace.title}
        </div>
      ))}
      {showNewBoardItem && (
        <div className="workspaces-header__item workspaces-header__item--new">
          <LogoEmpty onClick={() => handleCancelNewBoard()} />
          <input
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            className="workspaces-header__item__input"
            placeholder="Workspace name"
          />
        </div>
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
