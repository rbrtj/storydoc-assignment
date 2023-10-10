import "./TasksList.scss";
import { Button } from "../ui/button";
import { Plus } from "../../assets/icons";
import { useState } from "react";

export const TasksListAdd = () => {
  const [isNewList, setIsNewList] = useState(false);

  const handleListAdd = () => {
    setIsNewList(true);
    // onListAdd();
  };

  return (
    <div className={`${isNewList && "tasks-list"} tasks-list__new`}>
      {isNewList ? (
        <input />
      ) : (
        <Button onClick={handleListAdd} variant="ghost">
          <Plus />
          Add another list
        </Button>
      )}
    </div>
  );
};
