import {
  AddWorkspacePayload,
  ChangeWorkspaceTitlePayload,
  RemoveWorkspacePayload,
  SetActiveWorkspacePayload,
  WorkspacesState,
  WorkspaceType,
} from "../types/workspaces.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WorkspacesState = {
  allWorkspaces: [
    {
      id: "321",
      title: "Acme Corp Workspace",
      isActive: true,
    },
    {
      id: "3211",
      title: "Test Workspace",
      isActive: false,
    },
  ],
};

const workspacesSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    addWorkspace: (
      state: WorkspacesState,
      action: PayloadAction<AddWorkspacePayload>,
    ) => {
      return {
        ...state,
        allWorkspaces: [...state.allWorkspaces, action.payload.workspace],
      };
    },
    setActiveWorkspace: (
      state: WorkspacesState,
      action: PayloadAction<SetActiveWorkspacePayload>,
    ) => {
      return {
        ...state,
        allWorkspaces: state.allWorkspaces.map((workspace: WorkspaceType) => {
          if (workspace.id === action.payload.id) {
            return {
              ...workspace,
              isActive: true,
            };
          }
          return {
            ...workspace,
            isActive: false,
          };
        }),
      };
    },
    changeWorkspaceTitle: (
      state: WorkspacesState,
      action: PayloadAction<ChangeWorkspaceTitlePayload>,
    ) => {
      return {
        ...state,
        allWorkspaces: state.allWorkspaces.map((workspace: WorkspaceType) => {
          if (workspace.id === action.payload.id) {
            return {
              ...workspace,
              title: action.payload.title,
            };
          }
          return workspace;
        }),
      };
    },
    removeWorkspace: (
      state: WorkspacesState,
      action: PayloadAction<RemoveWorkspacePayload>,
    ) => {
      return {
        ...state,
        allWorkspaces: state.allWorkspaces.filter(
          (workspace: WorkspaceType) => {
            return workspace.id !== action.payload.id;
          },
        ),
      };
    },
  },
});

export const {
  addWorkspace,
  changeWorkspaceTitle,
  setActiveWorkspace,
  removeWorkspace,
} = workspacesSlice.actions;

export const workspacesReducer = workspacesSlice.reducer;
