import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateProfile from './CreateProfile';
import ReadProfile from './ReadProfile';
import UpdateProfile from './UpdateProfile';
import DeleteProfile from './DeleteProfile';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    // Add profile logic
    // Update state with setProfiles([...profiles, profile]);
  };

  const updateProfile = (updatedProfile) => {
    // Update profile logic
    // Update state with setProfiles([...updatedProfiles]);
  };

  const deleteProfile = (profileId) => {
    // Delete profile logic
    // Update state with setProfiles([...remainingProfiles]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Read</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<CreateProfile addProfile={addProfile} />}>
          </Route>
          <Route path="/update/:id" element={<UpdateProfile profiles={profiles} updateProfile={updateProfile} />}>
          </Route>
          <Route path="/delete/:id" element={<DeleteProfile profiles={profiles} deleteProfile={deleteProfile} />}>
          </Route>
          <Route path="/" element= {<ReadProfile profiles={profiles} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
