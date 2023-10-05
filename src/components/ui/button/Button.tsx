import "./Button.scss";
import { Plus } from "../../../assets/icons";

const ButtonVariants = {
  default: "button-default",
  primary: "button-primary",
};

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: keyof typeof ButtonVariants;
  disabled?: boolean;
}
export const Button = ({
  onClick,
  children,
  variant,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button ${ButtonVariants[variant]} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
