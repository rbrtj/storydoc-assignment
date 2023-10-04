import "./WorkspacesHeader.scss";
import { Button } from "../ui/button";
import { Logo, LogoEmpty } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { boardSlice } from "../../store/slices";
import { useState } from "react";

export const WorkspacesHeader = () => {
  const [newBoardName, setNewBoardName] = useState("Workspace name");
  const [showNewBoardItem, setShowNewBoardItem] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board);

  const handleButtonClick = () => {
    setShowNewBoardItem(true);
    dispatch(boardSlice.actions.setBoardActive({ index: null }));
  };

  const handleCancelNewBoard = () => {
    setShowNewBoardItem(false);
  };

  return (
    <div className="workspaces-header">
      {boards.map((board, index) => (
        <div
          key={index}
          className={`workspaces-header__item ${
            board.isActive ? "workspaces-header__item--active" : ""
          }`}
          onClick={() => {
            if (!showNewBoardItem) {
              dispatch(boardSlice.actions.setBoardActive({ index }));
            }
          }}
        >
          <Logo />
          {board.name}
        </div>
      ))}
      {showNewBoardItem && (
        <div className="workspaces-header__item workspaces-header__item--new">
          <LogoEmpty onClick={handleCancelNewBoard} />
          <input
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            className="workspaces-header__item__input"
          />
        </div>
      )}

      <Button onClick={handleButtonClick} />
    </div>
  );
};
