import { useEffect, useState } from "react";
import { Count } from "../DisplayCount/Count";
import { DisplayCount } from "../DisplayCount/DisplayCount";

export const CountUpdate = ({}) => {
  const [count, setCount] = useState(50);
  useEffect(() => {
    console.log("count updated",count);
  },[count]);

  const handleSubmit = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Click to increment the count</h1>
      <button onClick={handleSubmit}>submit</button>
      <DisplayCount value={count} />
    </>
  );
};
