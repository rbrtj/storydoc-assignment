import "./WorkspacesHeader.scss";
import { Button } from "../ui/button";
import { Check, Logo, LogoEmpty, Plus } from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, setBoardActive } from "../../store/slices";
import { useState } from "react";
import { RootState } from "../../store/store.ts";

export const WorkspacesHeader = () => {
  const [newBoardName, setNewBoardName] = useState("");
  const [showNewBoardItem, setShowNewBoardItem] = useState(false);

  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.board);
  const handleCreateNewBoard = () => {
    setShowNewBoardItem(true);
    dispatch(setBoardActive({ index: null }));
  };

  const handleCancelNewBoard = () => {
    setShowNewBoardItem(false);
  };

  const handleAddNewBoard = () => {
    dispatch(
      addBoard({
        name: newBoardName,
      }),
    );
    setShowNewBoardItem(false);
  };

  const handleSetActiveBoard = (index: number) => {
    if (!showNewBoardItem) {
      dispatch(setBoardActive({ index }));
    }
  };

  return (
    <div className="workspaces-header">
      {boards.map((board, index: number) => (
        <div
          key={index}
          className={`workspaces-header__item ${
            board.isActive ? "workspaces-header__item--active" : ""
          }
          ${!showNewBoardItem ? "cursor-pointer" : ""}
          `}
          onClick={() => handleSetActiveBoard(index)}
        >
          <Logo />
          {board.name}
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
