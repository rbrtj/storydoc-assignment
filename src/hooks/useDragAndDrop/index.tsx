// import { useDispatch, useSelector } from "react-redux";
// import {
//   DragEndEvent,
//   DragOverEvent,
//   DragStartEvent,
//   UniqueIdentifier,
// } from "@dnd-kit/core";
// import { useState } from "react";
// import { extractSourceIdentifiers } from "../../utils/util.ts";
// import { RootState } from "../../store/store.ts";
// import { moveTask } from "../../store";
//
// export const useDragAndDrop = () => {
//   const dispatch = useDispatch();
//   const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
//   const board = useSelector((state: RootState) =>
//     state.board.find((board) => board.isActive),
//   );
//   const handleDragStart = (event: DragStartEvent) => {
//     const { active } = event;
//     const { id } = active;
//     setActiveId(id);
//   };
//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (active.id && over && over.id) {
//       console.log("active: ", active);
//       console.log("active Id: ", active.id);
//     }
//   };
//
//   const handleDragOver = (event: DragOverEvent) => {
//     // const lists = board!.lists;
//     // const { active, over } = event;
//     // const { id } = active;
//     // console.log("Over: ", over);
//     // const activeList = lists.find((list) =>
//     //   list.tasks.some((task) => task.id === id),
//     // );
//     // const overList = lists.find((list) =>
//     //   list.tasks.some((task) => task.id === over!.id),
//     // );
//     //
//     // if (!activeList || !overList || activeList === overList) return;
//     //
//     // // Find the index of the task in the overList
//     // const destinationTaskIndex = overList.tasks.findIndex(
//     //   (task) => task.id === over!.id,
//     // );
//     //
//     // dispatch(
//     //   moveTask({
//     //     sourceTaskId: active.id,
//     //     destinationListId: overList.id,
//     //     destinationTaskIndex: destinationTaskIndex,
//     //   }),
//     // );
//   };
//
//   // return { handleDragEnd, handleDragStart, handleDragOver };
// };
