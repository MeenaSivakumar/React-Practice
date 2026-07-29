import { useState } from "react";
import { TaskList } from "./TaskList";

export const ToDoAPP = () => {
  
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditTrue, setIsEditTrue] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const[isDeleteTask,setIsDeleteTask] = useState(false);
  const[deleteIndex,setDeleteIndex] = useState(0);

  const addTask = () => {
    setTaskList([{ title: task, isActive: false, isDone: false }, ...taskList]);
    console.log(taskList);
    setTask("");
  };

  const deleteTask = (index) => {
    setTaskList(taskList.filter((t, i) => i !== index));
    setTask("");
    setIsDeleteTask(false)
    console.log(taskList);
  };

  const updateTask = () => {
    setTaskList(
      taskList.map((t, i) => (i == editIndex ? { ...t, title: task } : t)),
    );
    setIsEditTrue(false);
    setEditIndex(0);
  };

  const handleComplete = (id) => {
    setTaskList(
      taskList.map((t, i) => (i == id ? { ...t, isDone: !t.isDone } : t)),
    );
  };

  const handleActive = (id) => {
    setTaskList(
      taskList.map((t, i) => (i == id ? { ...t, isActive: !t.isActive } : t)),
    );
  };

  const filiteredList =
    filter === "all"
      ? taskList
      : filter === "active"
        ? taskList.filter((task) => task.isActive)
        : taskList.filter((task) => task.isDone);

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>active</button>
        <button onClick={() => setFilter("completed")}>completed</button>
      </div>
      {!isEditTrue ? (
        <div>
          <input
            type="text"
            placeholder="Enter your task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
          />
          <button onClick={() => addTask()}>Add</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
          />
          <button onClick={() => updateTask()}>submit</button>
        </div>
      )}

      {!isEditTrue && (
        <TaskList
          isEditTrue={isEditTrue}
          isDeleteTask = {isDeleteTask}
          list={filiteredList}
          handleActive={handleActive}
          setIsDeleteTask = {setIsDeleteTask}
          setDeleteIndex = {setDeleteIndex}
          setEditIndex={setEditIndex}
          setIsEditTrue={setIsEditTrue}
          setTask={setTask}
          handleComplete={handleComplete}

        />
      )}
       <div>
      
    </div>
    {isDeleteTask && <div>
      <h3>Do you want to delete it?</h3>
      <button onClick={(()=>setIsDeleteTask(false))}>cancel</button>
      <button onClick={()=>deleteTask(deleteIndex)}>delete</button>
      </div>}
    </div>

   
  );
};
