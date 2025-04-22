import { useState } from "react";
import { ComponentUnMount } from "../UseEffect/ComponentUnMount";

export const ToggleButton = ({}) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = (e: any) => {
    setIsOn(isOn ? false : true);
  };
  return (
    <>
      <button type="submit" onClick={(e) => handleClick(e)}>
        {isOn ? "on" : "off"}
      </button>
      {isOn?<ComponentUnMount isOnOrOff={isOn} />:null}
      
    </>
  );
};
