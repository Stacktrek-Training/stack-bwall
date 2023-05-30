import React, { useState, useEffect } from "react";
import "flowbite";
import axios from "axios";

const GITHUB_TOKEN =
  "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"; // Replace with your GitHub token

const TopCamper = () => {
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
              console.error(
                `Error fetching avatar URL for user ${user.username}:`,
                error
              );
              return user; // Return the user object without the avatarUrl
            }
          })
        );
        setUsers(updatedUsers);
      } catch (error) {
        console.error("Error fetching avatar URLs:", error);
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
    .slice(0, 1);
    return (
      <div className="overflow-x-auto">
        <div className="flex">
          {filteredUsers.map((user) => (
            <div key={user.id} className="flex flex-col items-center p-4">
              <img
                src={user.avatarUrl}
                alt="Avatar"
                className="w-10 h-10 rounded-full mb-2"
              />
              <div className="text-base font-bold clamp-2 text-center">
                {`${user.first_name} ${user.last_name ? user.last_name : ""}`}
              </div>
              <div className="text-gray-600 text-sm clamp-2 text-center">
                {user.username}
              </div>
              <div className="text-sm font-bold clamp-2 text-center">
                {user.class}
              </div>
              <div className="mt-2 flex items-center justify-center">
                <span>{user.favorite}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 24 24"
                  strokeWidth="0.3"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block align-middle ml-1"
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
      </div>
    );
    
    
    
    
            
};

export default TopCamper;
