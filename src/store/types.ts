interface Task {
  name: string;
}

export interface List {
  name: string;
  tasks: Task[];
}
export interface BoardInterface {
  name: string;
  isActive: boolean;
  lists: List[];
}
