import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Users } from './users';
import "flowbite";
const USERS = Users.map(user => user.username); // Specify the GitHub usernames you want to fetch
const GITHUB_TOKEN ="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"; // Replace with your GitHub token
const ActivityLog = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await Promise.all(
          USERS.map(async (user) => {
            try {
              const userResponse = await axios.get(`https://api.github.com/users/${user}`, {
                headers: {
                  Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
              });
              const userData = userResponse.data;
              const avatarUrl = userData.avatar_url;
              const name = userData.name;

              const eventsResponse = await axios.get(`https://api.github.com/users/${user}/events`, {
                headers: {
                  Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
              });
              const eventsData = eventsResponse.data;
              const commitEvents = eventsData.filter(event => event.type === 'PushEvent');
              const latestCommitEvents = commitEvents.slice(0, 1); // Retrieve the latest commit event
              if (latestCommitEvents.length > 0) {
                const latestCommitEvent = latestCommitEvents[0];
                const latestCommitMessage = latestCommitEvent.payload.commits[0].message;
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
              console.error('Error:', error);
              return null;
            }
          })
        );

        const sortedActivities = fetchedActivities
          .filter(activity => activity !== null)
          .sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateB - dateA;
          })
          .slice(0, 10);
        // Retrieve the activities of the top 10 users

        setActivities(sortedActivities);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Fetch activities initially
    fetchActivities();

    // Set up interval to fetch new activities every 10 seconds (adjust the interval as needed)
    const interval = setInterval(fetchActivities, 10000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className=" max-w-lg mx-auto p-2">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center py-4">
          <img src={activity.avatarUrl} alt={activity.user} className="w-10 h-10 rounded-full mr-4" />
          <div>
            <div className="text-gray-900 font-bold">{activity.name}</div>
            <div className="text-gray-600">{activity.user}</div>
            <div className="text-lg font-medium">{activity.commitMessage}</div>
            <div className="text-gray-500">{activity.repo}</div>
            <div className="text-gray-500 text-sm">{activity.date}</div>
            <div className="text-gray-500 text-sm">{activity.time}</div>
          </div>
        </div>
      ))}

    </div>
  );

};

export default ActivityLog;
