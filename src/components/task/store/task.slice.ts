import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTaskPayload, TasksState } from "../types/task.types.ts";

const initialState: TasksState = {
  allTasks: [
    {
      id: "1",
      listId: "1",
      title: "Create a video for Acme",
    },
    {
      id: "2",
      listId: "1",
      title: "Reviee Acme PDF",
    },
    {
      id: "3",
      listId: "2",
      title: "Social media posts for Acme",
    },
    {
      id: "4",
      listId: "2",
      title: "Facebook Campaign",
    },
    {
      id: "5",
      listId: "2",
      title: "Tiktok profile setup",
    },
    {
      id: "6",
      listId: "2",
      title: "Marketing list",
    },
    {
      id: "7",
      listId: "2",
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
  },
});

export const { addTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
