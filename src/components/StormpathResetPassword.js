import React from 'react';
import {ResetPasswordForm} from 'react-stormpath';
/**CREATED BY DYLAN JUNE 6, 2916**/

class StormpathResetPassword extends React.Component {
constructor() {
    super();
    
    this.state = {
      clicked: false,
      shouldHide: true
    };
    
    this.handleClick = this.handleClick.bind(this);
  }




  
  handleClick() {
    this.setState({
      clicked: true,
      shouldHide: false
    });
  }
  
  render() {
    return (
      <div id="profile-reset-container">
        {
          (this.state.shouldHide) 
        ?
        <p className="profile-reset-text" onClick={this.handleClick} >
        reset password
        </p>
        :
        <div id="reset-password"> 
        <p className="profile-reset-text" style={{borderRight:'1px solid #ffcc00',paddingRight:'5px'}}> 
        enter your email
          </p>
         <ResetPasswordForm>
         <input type="text" id="reset-input" name="email"/>
         <button type="submit">send reset email</button>
         </ResetPasswordForm> 
        </div>
       }

      </div>
    );
  }
}

   

export default StormpathResetPassword;