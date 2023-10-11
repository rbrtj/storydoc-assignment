import "./Main.scss";
import { Board, Home, Profile, Search } from "../../../assets/icons";

const navItems = [
  {
    icon: <Home />,
    text: "Dashboard",
    active: false,
  },
  {
    icon: <Board />,
    text: "Boards",
    active: true,
  },
  {
    icon: <Profile />,
    text: "Profile",
    active: false,
  },
  {
    icon: <Search />,
    text: "Search",
    active: false,
  },
];
export const Main = () => {
  return (
    <div className="main-container">
      {navItems.map((item, index) => (
        <div key={index} className={`main-item ${item.active ? "active" : ""}`}>
          {item.icon}
          {item.text}
        </div>
      ))}
    </div>
  );
};
