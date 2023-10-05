import "./Task.scss";

interface TaskProps {
  taskName: string;
}
export const Task = ({ taskName }: TaskProps) => {
  return <div className="task">{taskName}</div>;
};
