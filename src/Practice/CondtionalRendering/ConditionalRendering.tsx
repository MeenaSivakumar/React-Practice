import { useState } from "react";
import { ToggleButton } from "../ToggleButton";

type props = {
  shown: boolean;
};
export const ConditionalRendoring = ({ shown }: props) => {
  const [isShown, setIsShown] = useState(shown);
  return (
    <>
      {isShown ? (
        <ToggleButton />
      ) : (
        <>
          <h4>click to view component</h4>
          <button onClick={() => setIsShown(true)}>click</button>
        </>
      )}
    </>
  );
};
