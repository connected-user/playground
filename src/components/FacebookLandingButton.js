import React from 'react';
import FacebookButton from './FacebookButton';

class FacebookLandingButton extends React.Component {

render(){
return (

<div id="ri-facebook-signup">
<FacebookButton
    btnClass="loginButton"
    btnId="facebookLandingButton" 
    divId="fbLandingContainer"
    text="Sign Up with Facebook"
    iconClass="fa fa-facebook-official mediumIcon"
    iconId="landingIconFacebook"/>
    <span id="or">OR</span> 
</div>

);

}


}
export default FacebookLandingButton;