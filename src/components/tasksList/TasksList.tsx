import "./TasksList.scss";
import { Task, TaskNew } from "../task";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Edit, Plus, Trash } from "../../assets/icons";
import { List } from "../../store/types.ts";
import { useEditListName } from "../../hooks/useEditListName";
import { useAddNewTask } from "../../hooks/useAddNewTask";

interface TasksListProps {
  list: List;
  listIndex: number;
}
export const TasksList = ({ list, listIndex }: TasksListProps) => {
  const [title, setTitle] = useState(list.name);
  const [isEditing, setIsEditing] = useState(false);
  const [isNewTask, setIsNewTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const editListName = useEditListName();
  const addNewTask = useAddNewTask();

  useEffect(() => {
    setTitle(list.name);
  }, [list.name]);

  const handleStartEditingTitle = () => {
    setIsEditing(true);
  };

  const handleEndEditingTitle = () => {
    setIsEditing(false);
    editListName(listIndex, title);
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEndEditingTitle();
    }
  };

  const handleNewTaskAdd = () => {
    addNewTask({ listIndex, taskName: newTaskName });
    setIsNewTask(false);
    setNewTaskName("");
  };

  const handleCancelNewTask = () => {
    setIsNewTask(false);
    setNewTaskName("");
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
        {list.tasks.map((task, index) => (
          <div className="tasks-list__tasks" key={index}>
            <Task taskName={task.name} />
          </div>
        ))}
        {isNewTask && (
          <div>
            <TaskNew
              onCancel={() => handleCancelNewTask()}
              onSave={() => handleNewTaskAdd()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTaskName(e.target.value)
              }
              value={newTaskName}
            />
          </div>
        )}
      </div>
      <Button onClick={() => setIsNewTask(true)} variant="ghost">
        <Plus />
        Add a card
      </Button>
    </div>
  );
};
