import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";

const initialState: BoardInterface[] = [
  {
    name: "Acme Corp workspace",
    // TODO - add icon
    isActive: true,
    columns: [],
  },
  {
    name: "Test workspace",
    isActive: false,
    columns: [],
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
        columns: [],
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
  },
});

export const { addBoard, setBoardActive } = boardSlice.actions;
