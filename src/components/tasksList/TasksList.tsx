import "./TasksList.scss";
import { Task } from "../task";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Edit, Plus, Trash } from "../../assets/icons";
export const TasksList = () => {
  const [title, setTitle] = useState("Working on");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStartEditingTitle = () => {
    setIsEditing(true);
  };

  const handleEndEditingTitle = () => {
    setIsEditing(false);
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEndEditingTitle();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="tasks-list">
      <div className="tasks-list__content">
        <div className="tasks-list__header">
          <input
            value={title}
            disabled={!isEditing}
            ref={inputRef}
            onBlur={() => handleEndEditingTitle()}
            onChange={(e) => handleTitleInputChange(e)}
            onKeyDown={(e) => handleInputKeyPress(e)}
          />
          <div className="tasks-list__header--actions">
            <Edit onClick={() => handleStartEditingTitle()} />
            <Trash />
          </div>
        </div>
        <div className="tasks-list__tasks">
          <Task />
        </div>
      </div>
      <Button onClick={() => console.log("clicked")} variant="ghost">
        <Plus />
        Add a card
      </Button>
    </div>
  );
};
