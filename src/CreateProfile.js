import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionForm from './SubscriptionForm';


const CreateProfile = ({ addProfile }) => {
  const [formData, setFormData] = useState({});
  const history = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProfile(formData);
    history.push('/');
  };

  return (
    <React.Fragment>
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
      <h1>Subscription</h1>
      <SubscriptionForm />
        <button type="submit">Create</button>
      </form>
    </React.Fragment>
  );
};

export default CreateProfile;
