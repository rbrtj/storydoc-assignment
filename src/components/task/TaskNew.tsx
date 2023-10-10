import "./Task.scss";
import { Check } from "../../assets/icons";
import { Button } from "../ui/button";

interface TaskNewProps {
  onSave: () => void;
  onCancel: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskNew = ({
  onSave,
  onCancel,
  value,
  onChange,
}: TaskNewProps) => {
  return (
    <div className="task">
      <input value={value} onChange={onChange} />
      <div className="task__actions">
        <Button onClick={onSave} variant="ghost">
          <Check />
        </Button>
        <Button onClick={onCancel} variant="ghost">
          x
        </Button>
      </div>
    </div>
  );
};
