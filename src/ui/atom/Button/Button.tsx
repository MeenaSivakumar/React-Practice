import { ButtonProps } from "./Button.types";

export const Button = ({ label, color,onClick }: ButtonProps) => {
  return (
    <div>
      <button style={{backgroundColor:color}} onClick={onClick} >{label}</button>
    </div>
  );
};
