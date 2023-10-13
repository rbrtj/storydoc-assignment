import "./WorkspaceItem.scss";
import { LogoEmpty } from "../../../assets/icons";

interface WorkspaceItemNewProps {
  value: string;
  setValue: any;
  cancelNewItem: any;
}
export const WorkspaceItemNew = ({
  value,
  setValue,
  cancelNewItem,
}: WorkspaceItemNewProps) => {
  return (
    <div className="item item--new">
      <LogoEmpty onClick={cancelNewItem} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Workspace name"
        className="item__input"
        autoFocus={true}
      />
    </div>
  );
};
