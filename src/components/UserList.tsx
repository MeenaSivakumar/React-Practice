import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import { useState } from "react";

const UserList = () => {
  const [showUsers, setShowUsers] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled: false, 
  });

  const handleClick = async () => {
    setShowUsers(true);
    await refetch(); 
  };

  return (
    <div>
      <button onClick={handleClick}>Show Users</button>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {(error as Error).message}</p>}

      {showUsers && data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
