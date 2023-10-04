import './WorkspacesHeader.scss';
import {Button} from "../ui/button";
import {Logo} from "../../assets/icons";
export const WorkspacesHeader = () => {
    return (
        <div className="workspaces-header-container">
            <div className="workspaces-header-content">
                <Logo />
            Acme Corp workspace
            </div>
            <Button />
        </div>
    )
}