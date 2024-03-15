import React from 'react';

const ReadProfile = ({ profiles }) => {
  return (
    <div>
      <h2>Read Profile</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {/* Display profile details */}
            <p>Company Name: {profile.companyName}</p>
            {/* Display other details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadProfile;
