import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddListPayload,
  ListState,
  ListType,
  RemoveListPayload,
  SetListNamePayload,
} from "../types/list.types.ts";

const initialState: ListState = {
  allLists: [
    {
      id: "12",
      title: "Working on",
      workspaceId: "321",
    },
    {
      id: "13",
      title: "Review",
      workspaceId: "321",
    },
  ],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state: ListState, action: PayloadAction<AddListPayload>) => {
      return {
        ...state,
        allLists: [...state.allLists, action.payload.list],
      };
    },
    setListName: (
      state: ListState,
      action: PayloadAction<SetListNamePayload>,
    ) => {
      return {
        ...state,
        allLists: state.allLists.map((list: ListType) => {
          if (list.id === action.payload.id) {
            return {
              ...list,
              title: action.payload.title,
            };
          }
          return list;
        }),
      };
    },
    removeList: (
      state: ListState,
      action: PayloadAction<RemoveListPayload>,
    ) => {
      return {
        ...state,
        allLists: state.allLists.filter(
          (list: ListType) => list.id !== action.payload.id,
        ),
      };
    },
  },
});

export const { addList, setListName, removeList } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
