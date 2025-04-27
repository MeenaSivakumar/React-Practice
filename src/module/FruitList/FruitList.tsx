import { useEffect, useState } from "react";
import { Button } from "../../ui/atom/Button";
import { Table } from "./Components/Table";

export const FruitList = ({}) => {
  const [fruitsList, setFruitsList] = useState<string[]>(["apple"]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input) {
      setFruitsList((pre) => [...pre, input]);
      setInput("");
    }
  };
  const handleUpdate = (updatedList: string[]) => {
    setFruitsList([...updatedList]);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter the fruit name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <Button
          label="add"
          onClick={handleAdd}
          color="yellow"
          
        />
      </div>

      <Table fruitsList={fruitsList} onUpdate={handleUpdate} />
    </div>
  );
};
