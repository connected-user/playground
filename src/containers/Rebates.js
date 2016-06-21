import React from 'react';
import RebateFeed from '../components/RebateFeed';
import RebateLocationPicker from '../components/RebateLocationPicker';

class Rebates extends React.Component {
  render() {
    return (
      <div className = "ri-page">
        <div className="page-title" id="page-title-rebates">Choose a location to view Rebate data for that area: <RebateLocationPicker/> </div>
        <RebateFeed/>
      </div>
    );
  }
}

export default Rebates;