import "./Task.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../ui/button";
import { Edit, Trash } from "../../assets/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskTitle, removeTask } from "./store/task.slice.ts";
interface TaskProps {
  taskName: string;
  taskId: string;
  listId: string;
}
export const Task = ({ taskName, taskId }: TaskProps) => {
  const dispatch = useDispatch();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: taskId,
    });
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(taskName);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskTitleSave = () => {
    dispatch(changeTaskTitle({ id: taskId, title: taskTitle }));
    setIsEditing(false);
  };

  const handleRemoveTask = () => {
    dispatch(removeTask({ id: taskId }));
  };

  return (
    <div
      ref={setNodeRef}
      className="task"
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      {isEditing ? (
        <input
          value={taskTitle}
          onChange={handleTaskTitleChange}
          onBlur={handleTaskTitleSave}
        />
      ) : (
        <span>{taskTitle}</span>
      )}

      <div className="task__actions">
        <Button variant="ghost" onClick={handleEdit}>
          <Edit />
        </Button>
        <Button variant="ghost" onClick={handleRemoveTask}>
          <Trash />
        </Button>
      </div>
    </div>
  );
};
