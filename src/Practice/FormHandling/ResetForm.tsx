import { FormProps } from "react-router-dom";
type props = {
  onReset: () => void;
};
export const ResetForm = ({ onReset }: props) => {
  return (
    <div>
      <button type="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
