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

export const Board = () => {
  const tasksLists = useListsForActiveWorkspace();
  const dispatch = useDispatch();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const handleDragEnd = (event: DragEndEvent) => {
    console.log("drag end!");
    const { active, over } = event;
    console.log("over: ", over);
    if (active.id && over && over.id) {
      // dispatch(
      //     moveTask({
      //       sourceListIndex: listIndex,
      //       sourceTaskIndex: over.id,
      //       destinationListIndex: listIndex,
      //     }),
      // );
    }
    // const { active, over } = event;
    // if (active.id && over && over.id) {
    //   console.log("active: ", active, "over: ", over);
    //   const [, , sourceListIndex, sourceTaskIndex] = active.id;
    //   const [, , destinationListIndex] = over.id;
    //   console.log("sourceList index", sourceListIndex);
    //   dispatch(
    //     moveTask({
    //       sourceListIndex: Number(sourceListIndex),
    //       sourceTaskIndex: Number(sourceTaskIndex),
    //       destinationListIndex: Number(destinationListIndex),
    //     }),
    //   );
    // }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { id } = active;
    console.log("active: ", active);
    // setActiveId(id);
  };

  const handleDragMove = (event: DragMoveEvent) => {
    // const {active, over} = event;
    //
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
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
