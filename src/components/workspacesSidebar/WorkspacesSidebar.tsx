import "./WorkspacesSidebar.scss";
import { UserProfile } from "../userProfile";
import { Settings } from "./settings";
import { Header } from "./header";
import { Main } from "./main/Main.tsx";

export const WorkspacesSidebar = () => {
  return (
    <div className="workspaces">
      <div className="workspaces-header">
        <Header />
      </div>
      <div className="workspaces-main">
        <Main />
      </div>
      <div className="workspaces-footer">
        <UserProfile />
        <Settings />
      </div>
    </div>
  );
};
