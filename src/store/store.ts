import { configureStore } from "@reduxjs/toolkit";
import { workspacesReducer } from "../components/workspacesSidebar/store/workspaces.slice.ts";
import { tasksReducer } from "../components/task/store/task.slice.ts";
import { listsReducer } from "../components/list/store/list.slice.ts";

const store = configureStore({
  reducer: {
    workspaces: workspacesReducer,
    tasks: tasksReducer,
    lists: listsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
// export const boardSlice = createSlice({
//   name: "board",
//   initialState,
//   reducers: {
//     setBoardActive: (state, action) => {
//       state.map((board, index) => {
//         index === action.payload.index
//           ? (board.isActive = true)
//           : (board.isActive = false);
//         return board;
//       });
//     },
//     editListName: (state, action) => {
//       const { listId, newName } = action.payload;
//       const activeWorkspace = state.find((workspace) => workspace.isActive);
//       if (activeWorkspace) {
//         const list = activeWorkspace.lists.find((list) => list.id === listId);
//         if (list) {
//           list.name = newName;
//         }
//       }
//     },
//     moveTask: (state, action) => {
//       const { sourceTaskId, destinationListId, destinationTaskIndex } =
//         action.payload;
//       const board = state.find((b) => b.isActive);
//
//       console.log(action.payload);
//       if (!board) return;
//       let sourceList = null;
//       let sourceTask = null;
//       let sourceTaskIndex = -1;
//
//       // Find the source list and task
//       for (const list of board.lists) {
//         const taskIndex = list.tasks.findIndex(
//           (task) => task.id === sourceTaskId,
//         );
//         if (taskIndex !== -1) {
//           sourceList = list;
//           sourceTask = list.tasks[taskIndex];
//           sourceTaskIndex = taskIndex;
//           break;
//         }
//       }
//
//       // Validate source task and list
//       if (!sourceList || !sourceTask || sourceTaskIndex === -1) return;
//
//       // Find the destination list
//       const destinationList = board.lists.find(
//         (list) => list.id === destinationListId,
//       );
//       if (!destinationList) return;
//
//       // Move the task
//       sourceList.tasks.splice(sourceTaskIndex, 1);
//
//       // If destinationTaskIndex is provided, insert at that index, otherwise push to the end of the list
//       if (typeof destinationTaskIndex === "number") {
//         destinationList.tasks.splice(destinationTaskIndex, 0, sourceTask);
//       } else {
//         destinationList.tasks.push(sourceTask);
//       }
//     },
//   },
// });

// export const { setBoardActive, editListName, moveTask } = boardSlice.actions;
