import { useEffect, useState } from "react";

export const useListTitleEdit = (
  initialTitle: string,
  listId: string,
  editListName: (listId: string, listName: string) => void,
) => {
  const [title, setTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => {
    setIsEditing(false);
    editListName(listId, title);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  return { title, isEditing, startEditing, stopEditing, handleChange };
};
