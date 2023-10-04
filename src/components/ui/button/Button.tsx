import "./Button.scss";
import { Plus } from "../../../assets/icons";
export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button">
      <Plus />
      Create workspace
    </button>
  );
};
