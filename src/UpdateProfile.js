import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ profile, updateProfile }) => {
  const [formData, setFormData] = useState(profile);
  const history = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(formData);
    history.push('/');
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
        {/* Add other fields */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
