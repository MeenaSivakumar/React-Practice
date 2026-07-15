import { useState } from "react";

export const TaskList = ({isEditTrue,isDeleteTask,list,handleComplete,handleActive,setIsDeleteTask,setIsEditTrue,setEditIndex,setDeleteIndex, setTask})=>{

    
    return(
        <div>
        
               {list?.map((task, index) => (
          <div key={index}>
            {task.isDone ? <s>{task.title}</s> : <div>{task.title}</div>}
            <button onClick={() => {setIsDeleteTask(!isDeleteTask);setDeleteIndex(index)}}>delete</button>
            <button
              onClick={() => {
                setIsEditTrue(!isEditTrue);
                setEditIndex(index);
                setTask(task.title);
              }}
            >
              update
            </button>
            <button onClick={() => handleComplete(index)}>
              {!task.isDone ? "mark as completed" : "mark as undone"}
            </button>
            <button onClick={() => handleActive(index)}>
              {task.isActive ? "active" : "inActive"}
            </button>
          </div>
        ))}
        </div>
    )
}