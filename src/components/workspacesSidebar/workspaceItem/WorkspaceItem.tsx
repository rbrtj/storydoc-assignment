import "./WorkspaceItem.scss";
import { WorkspaceType } from "../types/workspaces.types.ts";
import { useState } from "react";
import {
  changeWorkspaceTitle,
  removeWorkspace,
  setActiveWorkspace,
} from "../store/workspaces.slice.ts";
import { useDispatch } from "react-redux";
import { Edit, Logo, Trash } from "../../../assets/icons";
import { Button } from "../../ui/button";

interface WorkspaceItemProps {
  workspace: WorkspaceType;
  disabled: boolean;
}
export const WorkspaceItem = ({ workspace, disabled }: WorkspaceItemProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState(workspace.title);
  const handleSetActiveBoard = (id: string) => {
    if (!disabled) {
      dispatch(setActiveWorkspace({ id }));
    }
  };

  const handleChangeWorkspaceTitle = () => {
    setIsEditing(false);
    dispatch(
      changeWorkspaceTitle({ id: workspace.id, title: newWorkspaceName }),
    );
  };

  const handleWorkspaceTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewWorkspaceName(e.target.value);
  };

  const handleDeleteWorkspace = () => {
    dispatch(removeWorkspace({ id: workspace.id }));
  };

  return (
    <div
      className={`item ${workspace.isActive ? "item--active" : ""} ${
        !disabled ? "cursor-pointer" : ""
      } `}
      onClick={() => handleSetActiveBoard(workspace.id)}
    >
      <Logo />
      {isEditing ? (
        <input
          value={newWorkspaceName}
          onChange={handleWorkspaceTitleChange}
          onBlur={handleChangeWorkspaceTitle}
        />
      ) : (
        <span>{workspace.title}</span>
      )}
      <div className={`item__actions ${disabled || isEditing ? "hide" : ""}`}>
        <Button variant="ghost" onClick={() => setIsEditing(true)}>
          <Edit />
        </Button>
        <Button variant="ghost" onClick={handleDeleteWorkspace}>
          <Trash />
        </Button>
      </div>
    </div>
  );
};
