export type ListType = {
  id: string;
  title: string;
  workspaceId: string;
};

export type ListState = {
  allLists: ListType[];
};

export interface AddListPayload {
  list: ListType;
}

export interface SetListNamePayload {
  id: string;
  title: string;
}

export interface RemoveListPayload {
  id: string;
}
