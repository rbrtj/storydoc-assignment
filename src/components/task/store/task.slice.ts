import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddTaskPayload,
  SetActiveTaskIdPayload,
  SetTaskListIdPayload,
  SetTasksPayload,
  TasksState,
} from "../types/task.types.ts";

const initialState: TasksState = {
  allTasks: [
    {
      id: "1",
      listId: "12",
      title: "Create a video for Acme",
    },
    {
      id: "2",
      listId: "12",
      title: "Review Acme PDF",
    },
    {
      id: "3",
      listId: "13",
      title: "Social media posts for Acme",
    },
    {
      id: "4",
      listId: "13",
      title: "Facebook Campaign",
    },
    {
      id: "5",
      listId: "13",
      title: "Tiktok profile setup",
    },
    {
      id: "6",
      listId: "13",
      title: "Marketing list",
    },
    {
      id: "7",
      listId: "13",
      title: "Company Video",
    },
  ],
  activeTaskId: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TasksState, action: PayloadAction<AddTaskPayload>) => ({
      ...state,
      allTasks: [...state.allTasks, action.payload.task],
    }),
    setActiveTaskId: (
      state: TasksState,
      action: PayloadAction<SetActiveTaskIdPayload>,
    ) => {
      return {
        ...state,
        activeTaskId: String(action.payload.id),
      };
    },
    resetActiveTaskId: (state: TasksState) => ({
      ...state,
      activeTaskId: initialState.activeTaskId,
    }),
    setTaskListId: (
      state: TasksState,
      action: PayloadAction<SetTaskListIdPayload>,
    ) => {
      const { id: taskId, listId: newListId } = action.payload;
      return {
        ...state,
        allTasks: state.allTasks.map((task) =>
          task.id === taskId ? { ...task, listId: String(newListId) } : task,
        ),
      };
    },
    setTasks: (state: TasksState, action: PayloadAction<SetTasksPayload>) => {
      return {
        ...state,
        allTasks: action.payload.allTasks,
      };
    },
  },
});

export const {
  addTask,
  setActiveTaskId,
  setTaskListId,
  resetActiveTaskId,
  setTasks,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
