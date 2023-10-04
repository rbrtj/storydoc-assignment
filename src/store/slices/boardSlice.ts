import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";
// import {Logo} from '../../assets/icons';
const initialState: BoardInterface[] | Record<string, never> = [
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
      const isActive = state.length > 0 ? false : true;
      const payload = action.payload;
      const board = {
        name: payload.name,
        isActive,
        columns: [],
      };
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

export const {} = boardSlice.actions;
