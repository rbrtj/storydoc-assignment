import { useDispatch, useSelector } from "react-redux";
import { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import {
  resetActiveTaskId,
  setActiveTaskId,
  setTaskListId,
  setTasks,
} from "../../components/task/store/task.slice.ts";
import { useGetListsForActiveWorkspace } from "../useGetListsForActiveWorkspace";
import { arrayMove } from "@dnd-kit/sortable";
import { RootState } from "../../store/index.ts";

export const useDragAndDrop = () => {
  const dispatch = useDispatch();
  const lists = useGetListsForActiveWorkspace();
  const tasks = useSelector((state: RootState) => state.tasks.allTasks);
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { id } = active;
    dispatch(setActiveTaskId({ id }));
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      const overTask = tasks.find((task) => task.id === over.id);
      if (overTask && active.id !== over.id) {
        const oldTask = tasks.find((task) => task.id === active.id);
        const newTask = tasks.find((task) => task.id === over.id);
        if (oldTask && newTask) {
          const oldTaskIndex = tasks.indexOf(oldTask);
          const newTaskIndex = tasks.indexOf(newTask);
          const tasksCopy = [...tasks];
          dispatch(
            setTasks({
              allTasks: arrayMove(tasksCopy, oldTaskIndex, newTaskIndex),
            }),
          );
        }
      }
    }
    dispatch(resetActiveTaskId());
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over) {
      const overList = lists.find((list) => list.id === over.id);
      const overTask = tasks.find((task) => task.id === over.id);

      if (overList) {
        dispatch(setTaskListId({ id: active.id, listId: over.id }));
      } else if (overTask) {
        dispatch(setTaskListId({ id: active.id, listId: overTask.listId }));
      }
    }
  };

  return { handleDragEnd, handleDragStart, handleDragOver };
};
