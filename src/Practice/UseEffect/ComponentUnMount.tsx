import { useEffect } from "react";

export const ComponentUnMount = ({}) => {
  useEffect(() => {
    return () => {
      console.log("Unmounted");
    };
  },[]);
  return <p>child component is visible</p>;
};
