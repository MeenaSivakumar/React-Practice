import { useState } from "react";
import { Button } from "../../ui/atom/Button";

export const DynamicList = ({}) => {
  const [item, setItem] = useState<string>("");
  const [itemList, setItemList] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handleSubmit = () => {
    if (item.trim().length === 0) {
      alert("Enter a valid item name");
    } else {
      setItemList([ ...itemList,item]);
      setItem("");
    }
  };

  const handleEdit = (index: number, value: string) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleSave = () => {
    if (editIndex !== null && editValue.trim().length > 0) {
      const updatedList = [...itemList];
      updatedList[editIndex] = editValue;
      setItemList(updatedList);
      setEditIndex(null);
      setEditValue("");
    }
  };

  const handleDelete = (index:number)=>{
          const newList = itemList.filter((_,i)=> i !== index );
          setItemList(newList);
  }

  return (
    <div>
      <div>
        <input
          value={item}
          onChange={handleChange}
          placeholder="Enter the item"
          type="text"
        />
      </div>
      <div>
        <Button onClick={handleSubmit} label="Submit" color="grey" />
      </div>

      {itemList.length > 0 && (
        <ul>
          {itemList.map((i, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <Button
                    onClick={handleSave}
                    label="Save"
                    color="#FFD700"
                  />
                </>
              ) : (
                <>
                  {i} <Button
                    onClick={() => handleEdit(index, i)}
                    label="Edit"
                    color="#90EE90"
                  />
                  <Button onClick={()=>handleDelete(index)} label="Delete" color="red"/>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
