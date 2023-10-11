import "./App.scss";
import { WorkspacesSidebar } from "./components/workspacesSidebar";
import { Board } from "./components/board/Board.tsx";

export const App = () => {
  return (
    <div className="container">
      <WorkspacesSidebar />
      <Board />
    </div>
  );
};
