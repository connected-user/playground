import React from 'react';
import PhotoFeed from '../components/PhotoFeed';

class PhotosDetails extends React.Component {
  render() {
  	console.log(this.props);
    return (
      <div className="photo-details-wrap">
        <div className="photo-details-left"></div>
        <div className="photo-details-right"></div>
      </div>
    );
  }
}

export default PhotosDetails;