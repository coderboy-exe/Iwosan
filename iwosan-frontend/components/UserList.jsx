import { useEffect, useState } from 'react';
import { getUsers, createUser } from '../api/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        console.log(usersData)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
        <ul className="grid grid-cols-3 gap-4">
            {users.map((user, index) => (
                <li key={index} className="bg-gray-200 text-red=800 p-4 rounded">
                    <h2>{user.username}</h2>
                </li>
            ))}
        </ul>
    
  );
};

export default UserList;