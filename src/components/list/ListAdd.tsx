import "./List.scss";
import { Button } from "../ui/button";
import { Check, Plus } from "../../assets/icons";
import { useState } from "react";
import { useAddNewList } from "../../hooks/useAddNewList";

export const ListAdd = () => {
  const [isNewList, setIsNewList] = useState(false);
  const [listName, setListName] = useState("");
  const addNewList = useAddNewList();
  const handleListAdd = () => {
    setIsNewList(true);
  };

  const handleCancelListAdd = () => {
    setIsNewList(false);
  };

  const handleListAddConfirm = () => {
    addNewList(listName);
    setIsNewList(false);
    setListName("");
  };

  const handleListNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  return (
    <div className={`${isNewList && "tasks-list"} tasks-list__new`}>
      {isNewList ? (
        <div className="tasks-list__new--content">
          <input value={listName} onChange={handleListNameChange} />
          <Button variant="ghost" onClick={handleListAddConfirm}>
            <Check />
          </Button>
          <Button variant="ghost" onClick={handleCancelListAdd}>
            X
          </Button>
        </div>
      ) : (
        <Button onClick={handleListAdd} variant="ghost">
          <Plus />
          Add another list
        </Button>
      )}
    </div>
  );
};
