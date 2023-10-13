import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setListName } from "../../store/list.slice.ts";

export const useListTitleEdit = (initialTitle: string, listId: string) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);

  const editListName = (listId: string, newName: string) => {
    dispatch(setListName({ id: listId, title: newName }));
  };

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

  return {
    title,
    isEditing,
    startEditing,
    stopEditing,
    handleChange,
  };
};
