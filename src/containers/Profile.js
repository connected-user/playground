import React from 'react';
import ProfileTop from '../components/Profile-Top.js';
import ProfileBody from '../components/ProfileBody.js';

class Profile extends React.Component {
  render() {
    return (
      <div id = "ri-profile-page">
        <ProfileTop/>
        <ProfileBody/>
      </div>
    );
  }
}

export default Profile;