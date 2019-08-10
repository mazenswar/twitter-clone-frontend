import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersIndex = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(r => r.json())
      .then(usersArr => {
        setUsers(usersArr);
      });
  }, []);

  console.log(users);

  const renderUsers = () => {
    return users.map(user => (
      <Link key={user.id} to={`/users/${user.id}`}>
        {user.username}
      </Link>
    ));
  };

  return <div>{renderUsers()}</div>;
};
export default UsersIndex;
