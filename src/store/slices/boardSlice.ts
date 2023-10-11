import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState: BoardInterface[] = [
  {
    name: "Acme Corp workspace",
    // TODO - add icon
    isActive: true,
    lists: [
      {
        id: "list-1",
        name: "Working on",
        tasks: [
          {
            id: "task-1",
            name: "Create a video for Acme",
          },
          {
            id: "task-2",
            name: "Review Acme PDF",
          },
        ],
      },
      {
        name: "Review",
        id: "list-2",
        tasks: [
          {
            id: "task-1",
            name: "Social media posts for Acme",
          },
          {
            id: "task-2",
            name: "Facebook Campaign",
          },
          {
            id: "task-3",
            name: "Tiktok profile setup",
          },
          {
            id: "task-4",
            name: "Marketing list",
          },
          {
            id: "task-5",
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
        id: "list-1",
        tasks: [
          {
            id: "task-1",
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
      const { listId, newName } = action.payload;
      const activeWorkspace = state.find((workspace) => workspace.isActive);
      if (activeWorkspace) {
        const list = activeWorkspace.lists.find((list) => list.id === listId);
        if (list) {
          list.name = newName;
        }
      }
    },
    addTask: (state, action) => {
      const { listIndex, taskName } = action.payload;
      const activeWorkspace = state.find((workspace) => workspace.isActive);
      if (activeWorkspace) {
        activeWorkspace.lists[listIndex].tasks.push({
          name: taskName,
          id: uuidv4(),
        });
      }
    },
    addList: (state, action) => {
      const { listName } = action.payload;
      const activeWorkspace = state.find((workspace) => workspace.isActive);
      if (activeWorkspace) {
        activeWorkspace.lists.push({
          name: listName,
          tasks: [],
          id: uuidv4(),
        });
      }
    },
    moveTask: (state, action) => {
      const { sourceListIndex, sourceTaskIndex, destinationListIndex } =
        action.payload;
      console.log("action payload", action.payload);
      const board = state.find((b) => b.isActive);
      if (!board) return;
      if (
        sourceListIndex < 0 ||
        sourceListIndex >= board.lists.length ||
        destinationListIndex < 0 ||
        destinationListIndex >= board.lists.length ||
        sourceTaskIndex < 0 ||
        sourceTaskIndex >= board.lists[sourceListIndex].tasks.length
      )
        return;
      const sourceList = board.lists[sourceListIndex];
      const destinationList = board.lists[destinationListIndex];
      const [movedTask] = sourceList.tasks.splice(sourceTaskIndex, 1);
      destinationList.tasks.push(movedTask);
    },
  },
});

export const {
  addBoard,
  setBoardActive,
  editListName,
  addTask,
  addList,
  moveTask,
} = boardSlice.actions;
