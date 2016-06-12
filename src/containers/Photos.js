import React from 'react';
import PhotoFeed from '../components/PhotoFeed';

class Photos extends React.Component {
  render() {
    return (
      <div className = "ri-page ri-full-page">
        <PhotoFeed />
      </div>
    );
  }
}

export default Photos;