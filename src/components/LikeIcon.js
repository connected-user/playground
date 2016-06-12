/**
 * Created by Dylan on 16/05/2016.
 */
import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';


class LikeIcon extends React.Component {

constructor(){
super();
this.handleClick = this.handleClick.bind(this);
}

  handleClick(favoriteData) {
  
  console.log(favoriteData);
  }
 

    render() {
       var{favoriteData} = this.props;
       
        return (
          
          
          <FontAwesomeIcon onClick={() => { this.handleClick({favoriteData}) }} className="fa fa-heart" id="photo-control-favorite"/>
        );
    }
}

export default LikeIcon;