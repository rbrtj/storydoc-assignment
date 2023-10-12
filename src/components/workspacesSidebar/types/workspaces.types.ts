export type WorkspaceType = {
  id: string;
  title: string;
  isActive: boolean;
};

export type WorkspacesState = {
  allWorkspaces: WorkspaceType[];
};

export interface AddWorkspacePayload {
  workspace: WorkspaceType;
}

export interface SetActiveWorkspacePayload {
  id: string;
}
