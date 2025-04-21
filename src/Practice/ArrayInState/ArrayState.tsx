import { useState } from "react";

export const ArrayState = ({}) => {
  const [list, setList] = useState<string[]>([]);
  const [item, setItem] = useState<string>("");
  const handleClick = (item: string) => {
    setList([...list, item]);
    console.log("added");
  };

  return (
    <>
      <div>
        <input
          placeholder="click button to add item to the list:"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" onClick={() => handleClick(item)}>
          add
        </button>
      </div>

      {list.map((l, index) => (
        <h1 key={index}>{l}</h1>
      ))}
    </>
  );
};
