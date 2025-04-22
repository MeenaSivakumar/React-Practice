import { useEffect, useState } from "react";

export const EffectOnSpecific = ({}) => {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState<string[]>([]);
  const handleSubmit = (name: string) => {
    console.log("button clicked");
    setNameList([...nameList, name]);
    console.log("nmae include in list", nameList);
  };

  useEffect(() => {
    if (name === "meena") {
      return console.log(name);
    }
  }, [name]);
  return (
    <>
      <div>
        <h1>enter your name:</h1>
        <input
          placeholder="enter your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => handleSubmit(name)}>submit</button>
      </div>
    </>
  );
};
