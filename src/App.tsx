import "./App.scss";
import { WorkspacesSidebar } from "./components/workspacesSidebar";
import { MainView } from "./components/mainView/MainView.tsx";

export const App = () => {
  return (
    <div className="container">
      <WorkspacesSidebar />
      <MainView />
    </div>
  );
};
