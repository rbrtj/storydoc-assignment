import "./Task.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface TaskProps {
  taskName: string;
  taskId: string;
  listId: string;
}
export const Task = ({ taskName, taskId, listId }: TaskProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: taskId,
    });
  return (
    <div
      ref={setNodeRef}
      className="task"
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      {taskName}
    </div>
  );
};
