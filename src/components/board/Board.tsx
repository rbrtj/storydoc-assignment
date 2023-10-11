import "./Board.scss";
import { List, ListAdd } from "../list";
import { useListsForActiveWorkspace } from "../../hooks/useGetListsForActiveWorkspace";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { moveTask } from "../../store/slices";
import { useDispatch } from "react-redux";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { SortableContext } from "@dnd-kit/sortable";

export const Board = () => {
  const tasksLists = useListsForActiveWorkspace();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const { handleDragEnd, handleDragStart, handleDragOver } = useDragAndDrop();

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragOver}
      collisionDetection={closestCenter}
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
