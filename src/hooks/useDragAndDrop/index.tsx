import { useDispatch } from "react-redux";
import { DragEndEvent } from "@dnd-kit/core";

export const useDragAndDrop = () => {
  const dispatch = useDispatch();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id && over && over.id) {
      // Implement logic to update task position
      // dispatch(moveTask(/* payload */));
    }
  };

  return { handleDragEnd };
};
