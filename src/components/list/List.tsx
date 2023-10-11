import "./TasksList.scss";
import { Task, TaskNew } from "../task";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "../ui/button";
import { Edit, Plus, Trash } from "../../assets/icons";
import { TList } from "../../store/types.ts";
import { useEditListName } from "../../hooks/useEditListName";
import { useListTitleEdit } from "../../hooks/useListTitleEdit";
import { useAddNewTask } from "../../hooks/useAddNewTask";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { SortableContext, useSortable } from "@dnd-kit/sortable";

interface TasksListProps {
  list: TList;
}
export const List = ({ list }: TasksListProps) => {
  const dispatch = useDispatch();
  const editListName = useEditListName();
  const { title, isEditing, startEditing, stopEditing, handleChange } =
    useListTitleEdit(list.name, list.id, editListName);
  const {
    isNewTask,
    newTaskName,
    startNewTask,
    cancelNewTask,
    saveNewTask,
    handleNewTaskNameChange,
  } = useAddNewTask(list.id);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setNodeRef } = useDroppable({
    id: list.id,
  });

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="tasks-list" ref={setNodeRef}>
      <div className="tasks-list__content">
        <div className="tasks-list__header">
          <input
            value={title}
            disabled={!isEditing}
            ref={inputRef}
            onBlur={stopEditing}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && stopEditing()}
          />
          <div className="tasks-list__header--actions">
            <Edit onClick={startEditing} />
            <Trash />
          </div>
        </div>
        <SortableContext items={list.tasks} id={list.id}>
          {list.tasks.map((task) => (
            <SortableTask key={task.id} id={task.id} taskName={task.name} />
          ))}
        </SortableContext>
        {isNewTask && (
          <div>
            <TaskNew
              onCancel={cancelNewTask}
              onSave={saveNewTask}
              onChange={handleNewTaskNameChange}
              value={newTaskName}
            />
          </div>
        )}
      </div>
      <Button onClick={startNewTask} variant="ghost">
        <Plus />
        Add a card
      </Button>
    </div>
  );
};

const SortableTask = ({ id, taskName }) => {
  console.log("sortable task id", id);
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id,
  });

  useEffect(() => {
    console.log("SortableTask Rerendered!", id, taskName);
  }, [id, taskName]);

  return (
    <div
      className="tasks-list__tasks"
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
      }}
      {...attributes}
      {...listeners}
    >
      <Task taskName={taskName} />
    </div>
  );
};
