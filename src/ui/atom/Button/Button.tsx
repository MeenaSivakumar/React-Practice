import { ButtonProps } from "./Button.types";

export const Button = ({ label, color,...props }: ButtonProps) => {
  return (
    <div>
      <button style={{backgroundColor:color}} {...props}>{label}</button>
    </div>
  );
};
