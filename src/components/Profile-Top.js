import React from 'react';
import ReactStormpath,{Authenticated} from 'react-stormpath';
import StormpathResetPassword from './StormpathResetPassword.js';

class ProfileTop extends React.Component {

render() {

  return (

<div id="ri-profile-top">

  <div id="profile-pic">
{/*TO DO: LINK MAVEN WITH CLOUDINARY OR LINK STORMPATH WITH CLOUDINARY FOR USER PICTURES THAT AREN'T FACEBOOK*/} 
<img src="https://scontent.xx.fbcdn.net/v/t1.0-1/p120x120/13221500_10153561898672452_3459637915444863391_n.jpg?oh=f2b592832c49d32ef7c096a6eb565521&oe=57C36FC2" id="profile-pic-missing"/>
  </div>

    
  <div id="profile-name">
     <Authenticated>{this.context.user.givenName} {this.context.user.surname}</Authenticated>
    <div id="profile-follow"><StormpathResetPassword/></div>
  </div>





</div>
  );

}

/***INVOKED AFTER INITIAL RENDERING ***/
componentDidMount(){

  
}
   
}
ProfileTop.contextTypes = {
    user: React.PropTypes.object
  };
export default ProfileTop;