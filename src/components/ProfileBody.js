import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import Footer from './Footer.js';

/**CREATED BY DYLAN MAY 10, 2916**/
class ProfileBody extends React.Component {

render() {

  return (

<div id="ri-profile-body">

{/*TODO: SET AND FETCH TEXT FOR Info/Bio FROM MAVEN*/}
	<div id="profile-info">
		<span id="quote-left">&#8220;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
 		ut labore et dolore magna aliqua.<span id="quote-right">&#8221;</span>
 			</div>

	<ul id="profile-data">
{/*TODO: SET AND FETCH TEXT FOR Country FROM MAVEN*/}
		<li id="profile-data-item">
			<span id="profile-data-title">country: </span> <p id="profile-data-value">Canada</p>
		</li>

		<li id="profile-data-item">
			
		</li>

{/*TODO: SET AND FETCH TEXT FOR Favourites FROM MAVEN*/}
		<li id="profile-data-item">
			<span id="profile-data-title">favourites: <FontAwesomeIcon id="profile-favorite-icon" className="fa fa-heart"/> </span>
			<div id="profile-favorites">
			<div className="profile-favorite-item">
			</div>
			<div className="profile-favorite-item">
			</div>
			<div className="profile-favorite-item">
			</div>
			</div>
		</li>

	</ul>

</div>
  );

}

/***INVOKED AFTER INITIAL RENDERING ***/
componentDidMount(){
 
}
   
}

export default ProfileBody;