import "./List.scss";
import { Task, TaskNew } from "../task";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "../ui/button";
import { Check, Edit, Plus, Trash } from "../../assets/icons";
import { TList } from "../../store/types.ts";
import { useEditListName } from "../../hooks/useEditListName";
import { useListTitleEdit } from "../../hooks/useListTitleEdit";
import { useAddNewTask } from "../../hooks/useAddNewTask";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import {
  rectSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";

interface TasksListProps {
  list: TList;
}
export const List = ({ list }: TasksListProps) => {
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
    <SortableContext items={list.tasks} id={list.id}>
      <div className="tasks-list" ref={setNodeRef}>
        <div className="tasks-list__header">
          <input
            value={title}
            disabled={!isEditing}
            ref={inputRef}
            onBlur={stopEditing}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && stopEditing()}
          />
          <Button onClick={startEditing} variant="ghost">
            <Edit />
          </Button>
          <Button onClick={() => console.log("delete list")} variant="ghost">
            <Trash />
          </Button>
        </div>
        <div className="tasks-list__content">
          {list.tasks.map((task) => (
            <Task
              key={task.id}
              taskId={task.id}
              listId={list.id}
              taskName={task.name}
            />
          ))}
          {isNewTask && (
            <TaskNew
              onCancel={cancelNewTask}
              onSave={saveNewTask}
              onChange={handleNewTaskNameChange}
              value={newTaskName}
            />
          )}
        </div>
        <div className="tasks-list__footer">
          <Button onClick={startNewTask} variant="ghost">
            <Plus />
            Add a card
          </Button>
        </div>
      </div>
    </SortableContext>
  );
};
