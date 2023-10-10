import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";

const initialState: BoardInterface[] = [
  {
    name: "Acme Corp workspace",
    // TODO - add icon
    isActive: true,
    lists: [
      {
        name: "Working on",
        tasks: [
          {
            name: "Create a video for Acme",
          },
          {
            name: "Review Acme PDF",
          },
        ],
      },
      {
        name: "Review",
        tasks: [
          {
            name: "Social media posts for Acme",
          },
          {
            name: "Facebook Campaign",
          },
          {
            name: "Tiktok profile setup",
          },
          {
            name: "Marketing list",
          },
          {
            name: "Company Video",
          },
        ],
      },
    ],
  },
  {
    name: "Test workspace",
    isActive: false,
    lists: [
      {
        name: "Some list",
        tasks: [
          {
            name: "Some task",
          },
        ],
      },
    ],
  },
];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const payload = action.payload;
      const board: BoardInterface = {
        name: payload.name,
        isActive: true,
        lists: [],
      };
      state.map((board) => (board.isActive = false));
      state.push(board);
    },
    setBoardActive: (state, action) => {
      state.map((board, index) => {
        index === action.payload.index
          ? (board.isActive = true)
          : (board.isActive = false);
        return board;
      });
    },
    editListName: (state, action) => {
      const { listIndex, newName } = action.payload;
      const activeWorkspace = state.find((workspace) => workspace.isActive);
      // Kinda dirty but I'd like to omit setting index prop on each workspace.
      if (activeWorkspace) {
        activeWorkspace.lists[listIndex].name = newName;
      }
    },
    addTask: (state, action) => {
      const { listIndex, taskName } = action.payload;
      const activeWorkspace = state.find((workspace) => workspace.isActive);
      if (activeWorkspace) {
        activeWorkspace.lists[listIndex].tasks.push({
          name: taskName,
        });
      }
    },
  },
});

export const { addBoard, setBoardActive, editListName, addTask } =
  boardSlice.actions;
