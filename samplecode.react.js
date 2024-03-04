import React, { useState, useEffect } from 'react';

const UserProfile = ({ politechUser }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUserData(politechUser)
      .then(userData => {
        setUser(userData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [politechUser]);

  const fetchUserData = async () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockUserData = {
          id: politechUser,
          name: 'John Doe',
          email: 'john.doe@example.com',
        };
        resolve(mockUserData);
      }, 1000);
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading user profile...</p>
      ) : user ? (
        <div>
          <h2>User Profile</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserProfile;
