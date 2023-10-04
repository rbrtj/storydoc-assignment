import './WorkspacesSidebar.scss';
import { UserProfile } from '../userProfile';
import { WorkspaceSettings } from '../workspaceSettings';
import {WorkspacesHeader} from "../workspacesHeader";
import {WorkspacesMain} from "../workspacesMain/WorkspacesMain.tsx";

export const WorkspacesSidebar = () => {
  return (
    <div className='workspaces'>
      <div className="workspaces-header">
          <WorkspacesHeader />
      </div>
      <div className="workspaces-main">
          <WorkspacesMain />
      </div>
      <div className="workspaces-footer">

        <UserProfile />
        <WorkspaceSettings/>
      </div>
    </div>
  )
}
