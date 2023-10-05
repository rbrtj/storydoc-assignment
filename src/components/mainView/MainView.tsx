import "./MainView.scss";
import { TasksList } from "../tasksList";
import { useListsForActiveWorkspace } from "../../hooks/useGetListsForActiveWorkspace";

export const MainView = () => {
  const tasksLists = useListsForActiveWorkspace();
  return (
    <div className="main-view">
      {tasksLists.map((list, index) => (
        <TasksList list={list} listIndex={index} key={index} />
      ))}
    </div>
  );
};
