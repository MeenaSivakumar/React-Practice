import { useState } from "react";
import { fetchUsers, User } from "../api/users"; 
const UsersInfo = () => {
     const [showUsers, setShowUsers] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);

  const handleClick = async () => {
    setShowUsers(true)
    const data = await fetchUsers(); 
    setUserList(data); 
  };

   const handleClose = ()=>{
    setShowUsers(false);
  }
  return (
    <div>
      <button onClick={handleClick}>Show List</button>
       <button onClick={handleClose}>close</button>
      {showUsers&& userList.length > 0 && (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersInfo;
