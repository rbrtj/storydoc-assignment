import "./MainView.scss";
import { TasksList } from "../tasksList";

export const MainView = () => {
  return (
    <div className="main-view">
      <TasksList />
    </div>
  );
};
