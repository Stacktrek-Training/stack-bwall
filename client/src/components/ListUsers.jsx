import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const GITHUB_TOKEN =
  "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"; // Replace with your GitHub token

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users_favorites");
      const jsonData = response.data;

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users
    .filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.last_name &&
          user.last_name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => b.favorite - a.favorite);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchAvatarUrl = async (username) => {
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        }
      );
      const userData = userResponse.data;
      return userData.avatar_url;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAvatarUrls = async () => {
      const updatedUsers = await Promise.all(
        users.map(async (user) => {
          const avatarUrl = await fetchAvatarUrl(user.username);
          return {
            ...user,
            avatarUrl,
          };
        })
      );
      setUsers(updatedUsers);
    };

    fetchAvatarUrls();
  }, [users]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by username, first name, or last name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="user-cards grid gap-4 md:grid-cols-2">
        {filteredUsers.map((user) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-6"
            key={user.id}
          >
            <div className="flex items-start py-4">
              <div>
                {user.avatarUrl && (
                  <img
                    src={user.avatarUrl}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </div>
              <div className="ml-4">
                <div>
                  <strong>Name:</strong>{" "}
                  {`${user.first_name} ${
                    user.last_name ? user.last_name : "N/A"
                  }`}
                </div>
                <div>
                  <strong>Username:</strong> {user.username}
                </div>
              </div>
              <div className="ml-auto">
                <div>
                  <strong>Favorites:</strong> {user.favorite}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
