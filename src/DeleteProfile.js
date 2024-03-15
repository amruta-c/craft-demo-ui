import React from 'react';

const DeleteProfile = ({ profile, deleteProfile }) => {
  const handleDelete = () => {
    deleteProfile(profile.id);
  };

  return (
    <div>
      <h2>Delete Profile</h2>
      <p>Are you sure you want to delete the profile?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProfile;
