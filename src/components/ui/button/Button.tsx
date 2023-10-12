import "./Button.scss";

const ButtonVariants = {
  default: "button-default",
  primary: "button-primary",
  ghost: "button-ghost",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
