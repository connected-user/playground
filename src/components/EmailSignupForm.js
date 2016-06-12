import React from 'react';

/**CREATED BY DYLAN MAY 10, 2916**/
class EmailSignupForm extends React.Component {

render() {

  return (
      <form className="bg panel" name="signupForm" id="signupForm">

      {/***ELEVATOR PITCH ON TOP OF FORM***/}
      <p className="formTitle">Sign up with <span className="standout">Rise</span> to start saving today.</p>

      {/***FORM INPUTS***/}
        <p className="formLabel">First Name:</p>
          <input id="formName" type="text" className="formInput" name="signupFirstName"/>

        <p className="formLabel">Last Name:</p>
          <input type="text" className="formInput" name="signupLastName"/>

        <p className="formLabel">Email:</p>
          <input type="email" className="formInput" name="signupEmail"/>

        <p className="formLabel">Password:</p>
          <input type="password" className="formInput" name="signupPassword"/>

        <p className="formLabel">Confirm Password:</p>
          <input type="password" className="formInput" name="signupConfirmPassword"/>

        <p className="formLabel">Postal Code:</p>
          <input  type="text" id="postal" className="formInput" name="signupPostalCode"/><br/>
      {/***RECAPTCHA***/}

        <div ref="recaptchaTarget"></div>
      {/***SUBMIT BUTTON***/} 
          <button type="submit" className="formButton" value="SIGNUP"><span>SIGNUP</span></button>
    
      </form>

  );

}

/***INVOKED AFTER INITIAL RENDERING ***/
componentDidMount(){
  /***EXPLICITLY RENDER THE RECAPTCHA PLUGIN ON FORMLOAD***/
    grecaptcha.render(this.refs.recaptchaTarget.getDOMNode(), {sitekey: '6Ld7lB8TAAAAAEA_LQ6VTB-d0pKHYjMef4acAUQv'});

  /***BLUR BACKGROUND BEHIND FORM***/
  $('.slick-slider .slick-track ').css('transform','none');
    $('#slider').css('-webkit-filter','blur(10px)')
                .css('transition', 'all 0.2s ease-out');
      
}
   
}

export default EmailSignupForm;