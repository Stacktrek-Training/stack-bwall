import React, { useEffect, useState } from "react";
import axios from "axios";

import "flowbite";

const GITHUB_TOKEN =
  "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"; // Replace with your GitHub token

const ActivityLog = () => {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const userNames = users.map((user) => user.username);
  console.log(userNames);
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const fetchedActivities = await Promise.all(
          userNames.map(async (user) => {
            try {
              const userResponse = await axios.get(
                `https://api.github.com/users/${user}`,
                {
                  headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                  },
                }
              );
              const userData = userResponse.data;
              const avatarUrl = userData.avatar_url;
              const name = userData.name;

              const eventsResponse = await axios.get(
                `https://api.github.com/users/${user}/events`,
                {
                  headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                  },
                }
              );
              const eventsData = eventsResponse.data;
              const commitEvents = eventsData.filter(
                (event) => event.type === "PushEvent"
              );
              const latestCommitEvents = commitEvents.slice(0, 1); // Retrieve the latest commit event
              if (latestCommitEvents.length > 0) {
                const latestCommitEvent = latestCommitEvents[0];
                const latestCommitMessage =
                  latestCommitEvent.payload.commits[0].message;
                const timestamp = new Date(latestCommitEvent.created_at);
                const date = timestamp.toLocaleDateString();
                const time = timestamp.toLocaleTimeString();
                return {
                  user,
                  repo: latestCommitEvent.repo.name,
                  commitMessage: latestCommitMessage,
                  date,
                  time,
                  avatarUrl,
                  name,
                };
              } else {
                return null;
              }
            } catch (error) {
              console.error("Error:", error);
              return null;
            }
          })
        );

        const sortedActivities = fetchedActivities
          .filter((activity) => activity !== null)
          .sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateB - dateA;
          })
          .slice(0, 10);

        setActivities(sortedActivities);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchActivities();
    // Set up interval to fetch new activities every 60 seconds (adjust the interval as needed)
    const interval = setInterval(fetchActivities, 60000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [users]);
  // Helper function to format the time measurement
  function formatTimeAgo(commitTime) {
    const currentTime = new Date();
    const timeDiff = Math.abs(currentTime - commitTime);
    const minutes = Math.floor(timeDiff / (1000 * 60));
    if (minutes < 1) {
      return "just now";
    } else if (minutes < 60) {
      return `${minutes} min ago`;
    } else {
      const hours = Math.floor(minutes / 60);
      return `${hours} hr ago`;
    }
  }

  return (
    <div className="max-w-lg mx-auto p-2">
      {loading ? (
        <div>Loading...</div>
      ) : activities.length === 0 ? (
        <div>No activities to display.</div>
      ) : (
        activities.map((commit, index) => {
          const user = users.find((user) => user.username === commit.user);
          const commitTime = new Date(commit.date + " " + commit.time); // Assuming date and time are in valid formats
          const timeAgo = formatTimeAgo(commitTime);
          return (
            <div
              key={index}
              className="relative flex items-center py-4 border-l border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 relative">
                <img
                  src={commit.avatarUrl}
                  alt={commit.user}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="ml-4"> {/* Add a margin-left of 4 units (adjust as needed) */}
                <div className="text-gray-500 text-sm mb-1">
                  {commit.date} | {timeAgo}
                </div>
                <div>
                  <div className="text-gray-900 font-bold">
                    {user.first_name} {user.last_name}
                  </div>
                  <div className="text-gray-600">@{user.username}</div>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Commit Message:
                </div>
                <div className="text-lg font-medium">
                  {commit.commitMessage}
                </div>
                <div className="text-gray-500">{commit.repo}</div>
              </div>
            </div>
          );
          
        })
      )}
    </div>
  );
};

export default ActivityLog;
