export const extractSourceIdentifiers = (id: string) => {
  const [taskId, listId] = id.split("-").slice(1);
  return {
    taskIndex: parseInt(taskId),
    listIndex: parseInt(listId),
  };
};

export const extractDestinationIdentifiers = (id: string) => {
  const [listId] = id.split("-").slice(1);
  return {
    listIndex: parseInt(listId),
  };
};
