import { useEffect, useState } from "react";

export const UpdateTitle = ({}) => {
  const [count, setCount] = useState(50);
  const handleSubmit = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = "Hello React" + count;
  }, [count]);
  return (
    <>
      <h1>Click to increment the count</h1>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};
