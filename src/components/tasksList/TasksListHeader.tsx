import "./TasksList.scss";
import React, { useState } from "react";

interface TaskListHeaderProps {
  title: string;
  isEditing: boolean;
  onEditTitle: () => void;
  onEndEditTitle: () => void;
  onTitleChange: (newTitle: string) => void;
}

const TaskListHeader: React.FC<TaskListHeaderProps> = ({
  title,
  isEditing,
  onEditTitle,
  onEndEditTitle,
  onTitleChange,
}) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEndEditTitle();
    }
  };

  return (
    <div className="tasks-list__header">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={onEndEditTitle}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <div onClick={onEditTitle}>{title}</div>
      )}
      <div className="tasks-list__header--actions">
        {/* Add your edit and delete icons here */}
      </div>
    </div>
  );
};

export default TaskListHeader;
