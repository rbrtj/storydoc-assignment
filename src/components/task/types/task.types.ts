import { UniqueIdentifier } from "@dnd-kit/core";

export type TaskType = {
  id: string;
  listId: string;
  title: string;
};

export type TasksState = {
  allTasks: TaskType[];
  activeTaskId: string;
};
export interface AddTaskPayload {
  task: TaskType;
}

export interface SetActiveTaskIdPayload {
  id: UniqueIdentifier;
}

export interface SetTaskListIdPayload {
  id: UniqueIdentifier;
  listId: UniqueIdentifier;
}

export interface SetTasksPayload {
  allTasks: TaskType[];
}
