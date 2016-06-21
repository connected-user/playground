import React from 'react';
import crs from 'country-region-selector/dist/crs.min.js';


class RebateLocationPicker extends React.Component {
  constructor() {
    

    super();
    
    this.state = {
      filterShouldHide : true
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      filterShouldHide: false
    });
  }
  

  render() {
    crs.init();
    return (
      <div id="location-container">
        <select className="crs-country locationSelect" data-region-id="ABC"/> 
        <select className="locationSelect" id="ABC" onChange={this.handleClick}/>
         {
          this.state.filterShouldHide
        ?
          null 
        :
        <span id="filter-button-container"> 
          <button id="location-filter-button">change location</button>
        </span>
      }
        </div>
    );
  }
};

export default RebateLocationPicker;

