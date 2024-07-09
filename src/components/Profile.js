import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-lg">NIM: {user.nim}</p>
    </div>
  );
}

export default Profile;
