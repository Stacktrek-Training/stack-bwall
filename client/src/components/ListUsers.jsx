import React, { useEffect, useState } from "react";
import axios from "axios";

const GITHUB_TOKEN = "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"; // Replace with your GitHub token

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users_favorites");
      const jsonData = response.data;
      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const incrementFavorite = async (userId) => {
    try {
      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            favorite: user.favorite + 1,
          };
        }
        return user;
      });

      setUsers(updatedUsers);

      await axios.post("http://localhost:5000/update_user_favorite", { userId });
      console.log("User favorite updated in PostgreSQL successfully.");
    } catch (error) {
      console.error("Error updating user favorite in PostgreSQL:", error);
    }
  };

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
        user.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.last_name &&
          user.last_name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => a.first_name.localeCompare(b.first_name));

  return (
    <div>
      <a href="/
      ">
         <button
        
        className="absolute  top-14 left-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      </a>
      
      <h1 className="text-center font-bold text-xl mt-6 items-center justify-center leading-none text-orange-500  dark:text-white">
        Vote for Favorite Campers
      </h1>

      <div className="mx-auto sticky mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
       
        <div className="user-cards grid gap-2 sm:grid-cols-4 mt-5  rounded-lg">
          {filteredUsers.map((user) => (
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-3"
              key={user.id}
              style={{ maxWidth: "500px", border: "1px solid #ccc" }}
            >
              <div className="flex items-start">
                <div>
                  {user.avatarUrl && (
                    <img
                      src={user.avatarUrl}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                </div>
                <div className="ml-2">
                  <div className="text-gray-900 font-bold">
                    <strong></strong>{" "}
                    {`${user.first_name} ${
                      user.last_name ? user.last_name : " "
                    }`}
                  </div>
                  <div>
                    <strong></strong> {user.class}
                  </div>
                  <div className="mt-2">
                    <strong>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="blue"
                        viewBox="0 0 24 24"
                        strokeWidth=".3"
                        stroke="currentColor"
                        className="w-7 h-7 inline-block align-middle"
                        style={{ marginRight: "4px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>{" "}
                    </strong>{" "}
                    {user.favorite}
                    <button
                      onClick={() => incrementFavorite(user.id)}
                      className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
