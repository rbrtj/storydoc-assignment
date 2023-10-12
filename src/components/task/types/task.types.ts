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
