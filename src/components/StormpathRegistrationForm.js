import React from 'react';
import ReactStormpath,{RegistrationForm} from 'react-stormpath';

/**CREATED BY DYLAN MAY 10, 2916**/
ReactStormpath.init();
class StormpathRegistrationForm extends React.Component {



 onFormSubmit(e, next) {
  var cp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  var cn = /^[a-z ,.'-]+$/i;
  var p = e.data.password;
  var f = e.data.givenName;
  var l = e.data.surname;
  if(!cn.test(f) || !cn.test(l)){
return next(new Error('First or Last Names cannot contain numbers.'))

  }

if (p.length < 8) {
  return next(new Error('Password must be atleast 8 characters in length.'));    
    }

if (!cp.test(p)){

  return next(new Error('Password must contain an uppercase letter, a lowercase letter, and a number.'));
}

    
    // To return an error message, call next() as:
    // 

    // Or if you want to change the data being sent, call it as:
    // next(null, { myNewData: '123' });

    // If you call next without any arguments,
    // it will simply proceed processing the form.
    next();
  }


render() {

  return (
    <div className="bg panel" id="signupForm">
      <RegistrationForm onSubmit={this.onFormSubmit.bind(this)}>

      {/***ELEVATOR PITCH ON TOP OF FORM***/}
      <p className="formTitle">Sign up with <span className="standout">Rise</span> to start saving today.</p>

      {/***FORM INPUTS***/}
        <p className="formLabel">First Name:</p>
          <input id="formName" type="text" className="formInput" name="givenName"/>

        <p className="formLabel">Last Name:</p>
          <input type="text" className="formInput" name="surname"/>

        <p className="formLabel">Email:</p>
          <input type="email" className="formInput" name="email"/>

        <p className="formLabel">Password:</p>
          <input type="password" className="formInput" name="password"/>
        {/***
        <p className="formLabel">Confirm Password:</p>
          <input type="password" className="formInput" name="signupConfirmPassword"/>

        <p className="formLabel">Postal Code:</p>
          <input  type="text" id="postal" className="formInput" name="signupPostalCode"/><br/>
        ***/}
      {/***RECAPTCHA***/}

        <div ref="recaptchaTarget"></div>
      {/***SUBMIT BUTTON***/} 
      <p spIf="form.error" id="formError">
      <strong>Error:</strong><br />
      <span spBind="form.errorMessage" />
    </p>
          <button type="submit" className="formButton" value="Register">SIGN UP</button>
    
      </RegistrationForm>
      </div>

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

export default StormpathRegistrationForm;