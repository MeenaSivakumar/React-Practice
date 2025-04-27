import { useState } from "react";
import { Button } from "../../../../Practice/ReusableBuuton";
import { TableProps } from "./Table.types";

export const Table = ({ fruitsList, onUpdate }: TableProps) => {
  console.log("rececive", fruitsList);

  const handleEdit = (index: number) => {
    const newFruit = prompt("Enter the fruit name:", fruitsList[index]);
    if (newFruit !== null) {
      const updatedList = [...fruitsList];
      updatedList[index] = newFruit;
      onUpdate(updatedList);
    }
  };
  const handleDelete = (index: number) => {
    const updateList = [...fruitsList];
    updateList.splice(index, 1);
    console.log(updateList);
    onUpdate(updateList);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fruit Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruitsList.map((fruit, index) => (
            <tr key={index}>
              <td>{fruit}</td>
              <td>
                <Button
                  label="edit"
                  onClick={() => handleEdit(index)}
                  color="green"
                />
                <Button
                  label="delete"
                  onClick={() => handleDelete(index)}
                  color="red"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
