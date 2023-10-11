interface Task {
  name: string;
  id: string;
}

export interface TList {
  name: string;
  tasks: Task[];
  id: string;
}
export interface BoardInterface {
  name: string;
  isActive: boolean;
  lists: TList[];
}
