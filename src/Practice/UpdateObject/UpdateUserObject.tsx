import { useState } from "react";

export const UpdateUserObject = ({}) => {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    age: number;
    email: string;
  }>({ name: "xx", age: 6, email: "demo@gmail.com" });

  const handleEdit = () => {
    setUserInfo({ ...userInfo, age: 67 });
  };

  return (
    <>
      <button onClick={handleEdit}>edit</button>
    </>
  );
};
