import React from 'react';
import IconButton from './IconButton';
import ReactStormpath from 'react-stormpath';
import StormpathRegistrationForm from './StormpathRegistrationForm';
import FacebookLandingButton from './FacebookLandingButton';

/***SIGNUP FORM THAT RENDERS WHEN USER CLICKS EMAIL SIGNUP BUTTON***/


/***SIGNUP WITH EMAIL BUTTON***/
class Button extends React.Component {
  render() {
    var {onClick} = this.props;
    return (


      <IconButton 

        divId="emailContainer"
        btnId="emailButton"
        iconClass="fa fa-pencil mediumIcon"
        iconId="landingIconEmail"
        text="Sign Up."
        onClick={onClick}
        /> 

    );
  }  
}

/***COMPOSITION OF FORM AND BUTTON, THIS COMPONENT GETS EXPORTED***/
class EmailSignup extends React.Component {
  constructor() {
    super();
    
    this.state = {
      clicked: false,
      shouldHide: false
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      clicked: true,
      shouldHide: true
    });
  }
  
  render() {
    return (
      <div>
        {
          this.state.shouldHide 
        ?
          null 
        : 
        <div id="landingHeader">YOUR HOME, BUILT WITH PURPOSE. 
          <Button onClick={this.handleClick} />
          </div>
       }


        {
          (this.state.shouldHide)
        ?
        <div id="ri-signup-container">
          <StormpathRegistrationForm />     
          <FacebookLandingButton/> 
        </div>
        : 
          null
        }
      </div>
    );
  }
};

export default EmailSignup;

