import "./List.scss";
import { Task, TaskNew } from "../task";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Edit, Plus, Trash } from "../../assets/icons";
import { useListTitleEdit } from "./hooks/useListTitleEdit/index.tsx";
import { useAddNewTask } from "./hooks/useAddNewTask/index.tsx";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ListType } from "./types/list.types.ts";
import { useGetTasksForList } from "./hooks/useGetTasksForList/index.ts";
import { useListRemove } from "./hooks/useListRemove/index.ts";

interface TasksListProps {
  list: ListType;
}
export const List = ({ list }: TasksListProps) => {
  const tasks = useGetTasksForList(list.id);
  const { title, isEditing, startEditing, stopEditing, handleChange } =
    useListTitleEdit(list.title, list.id);
  const removeList = useListRemove({ listId: list.id });
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
          <Button onClick={startEditing} variant="ghost">
            <Edit />
          </Button>
          <Button onClick={removeList} variant="ghost">
            <Trash />
          </Button>
        </div>
      </div>
      <div className="tasks-list__content">
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <Task
              key={task.id}
              taskId={task.id}
              listId={list.id}
              taskName={task.title}
            />
          ))}
        </SortableContext>
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
  );
};
