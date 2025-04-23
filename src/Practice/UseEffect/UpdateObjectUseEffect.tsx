import { useEffect, useState } from "react";

export const UpdateObjectUseEffect = ({}) => {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    age: number;
    email: string;
  }>({ name: "xx", age: 6, email: "demo@gmail.com" });
   
  useEffect(()=>{
    if(userInfo.age === 67){
        setUserInfo({...userInfo,name:"harry",email:"demo1@gmail.com"})
    }

  },[userInfo.age])
//   const handleEdit = () => {
//     setUserInfo({ ...userInfo, age: 67 });
//   };

  return (
    <>
    <input type="number" value={userInfo.age} onChange={(e)=>setUserInfo({...userInfo,age:e.target.valueAsNumber})}/>
      {/* <button onClick={handleEdit}>edit</button> */}
    </>
  );
};
