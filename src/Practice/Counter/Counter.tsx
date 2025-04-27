import { useNavigate } from "react-router-dom";

type props = {
    value:number;
}
export const Counter = ({value}:props) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/display",{state:value})
  };

  return (
    <div>
      <h1>Click to view the Count value</h1>
      <button type="submit" onClick={handleSubmit}>
        Click
      </button>
     
    </div>
  );
};
