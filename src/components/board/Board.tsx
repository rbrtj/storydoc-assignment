import "./Board.scss";
import { List, ListAdd } from "../list";
import { useGetListsForActiveWorkspace } from "../../hooks/useGetListsForActiveWorkspace";
import {
  closestCorners,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";

export const Board = () => {
  const tasksLists = useGetListsForActiveWorkspace();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor),
  );

  const { handleDragEnd, handleDragStart, handleDragOver } = useDragAndDrop();

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <div className="board">
        {tasksLists.map((list) => (
          <List list={list} key={list.id} />
        ))}
        <ListAdd />
      </div>
    </DndContext>
  );
};
