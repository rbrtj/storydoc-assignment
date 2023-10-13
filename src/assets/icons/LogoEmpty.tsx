import "./LogoEmpty.scss";

interface LogoEmptyProps {
  onClick: () => void;
}
export const LogoEmpty = ({ onClick }: LogoEmptyProps) => {
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        backgroundColor: "#B3C4D6",
        borderRadius: "8px",
        flexShrink: 0,
      }}
      onClick={onClick}
      className="logo-empty"
    >
      X
    </div>
  );
};
