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
            id: "task-3",
            name: "Social media posts for Acme",
          },
          {
            id: "task-4",
            name: "Facebook Campaign",
          },
          {
            id: "task-5",
            name: "Tiktok profile setup",
          },
          {
            id: "task-6",
            name: "Marketing list",
          },
          {
            id: "task-7",
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
      const { sourceTaskId, destinationListId, destinationTaskIndex } =
        action.payload;
      const board = state.find((b) => b.isActive);
      console.log(action.payload);
      if (!board) return;
      let sourceList = null;
      let sourceTask = null;
      let sourceTaskIndex = -1;

      // Find the source list and task
      for (const list of board.lists) {
        const taskIndex = list.tasks.findIndex(
          (task) => task.id === sourceTaskId,
        );
        if (taskIndex !== -1) {
          sourceList = list;
          sourceTask = list.tasks[taskIndex];
          sourceTaskIndex = taskIndex;
          break;
        }
      }

      // Validate source task and list
      if (!sourceList || !sourceTask || sourceTaskIndex === -1) return;

      // Find the destination list
      const destinationList = board.lists.find(
        (list) => list.id === destinationListId,
      );
      if (!destinationList) return;

      // Move the task
      sourceList.tasks.splice(sourceTaskIndex, 1);

      // If destinationTaskIndex is provided, insert at that index, otherwise push to the end of the list
      if (typeof destinationTaskIndex === "number") {
        destinationList.tasks.splice(destinationTaskIndex, 0, sourceTask);
      } else {
        destinationList.tasks.push(sourceTask);
      }
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
