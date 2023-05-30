import React, { useState, useEffect } from "react";
import "flowbite";
import axios from "axios";

const GITHUB_TOKEN =
  "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"; // Replace with your GitHub token

const TopVote = () => {
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
    }
  };

  useEffect(() => {
    const fetchAvatarUrls = async () => {
      try {
        const updatedUsers = await Promise.all(
          users.map(async (user) => {
            try {
              const avatarUrl = await fetchAvatarUrl(user.username);
              return {
                ...user,
                avatarUrl,
              };
            } catch (error) {
              console.error(`Error fetching avatar URL for user ${user.username}:`, error);
              return user; // Return the user object without the avatarUrl
            }
          })
        );
        setUsers(updatedUsers);
      } catch (error) {
        console.error('Error fetching avatar URLs:', error);
      }
    };

    fetchAvatarUrls();
  }, [users]);
  const filteredUsers = users
    .filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.last_name &&
          user.last_name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => b.favorite - a.favorite)
    .slice(0, 3);
    return (
        <div>
          {filteredUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  {user.avatarUrl && (
                    <img
                      src={user.avatarUrl}
                      alt="Avatar"
                      className="w-7 h-7 rounded-full"
                    />
                  )}
                </div>
                <div className="ml-4 mt-2">
                  <div className="text-xs font-bold">
                    <strong></strong>{" "}
                    {`${user.first_name} ${
                      user.last_name ? user.last_name : "N/A"
                    }`}
                  </div>
                  <div className="text-gray-600 text-xs">
                    <strong></strong> {user.username}
                  </div>
                  <div className="text-xs">
                    <strong></strong> {user.class}
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center">
                <span>{user.favorite}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 24 24"
                  strokeWidth=".3"
                  stroke="currentColor"
                  className="w-7 h-7 inline-block align-middle"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      );
      
      
      
}

export default TopVote