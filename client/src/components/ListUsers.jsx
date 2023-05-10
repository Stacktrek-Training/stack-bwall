import React, { Fragment, useEffect, useState } from "react";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users_favorites");
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>username</th>
            <th>class</th>
            <th>Favorites</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
              <td>{user.class}</td>
              <td>{user.favorite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListUsers;
