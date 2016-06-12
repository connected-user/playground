import React from 'react';
import ReactStormpath,{LoginForm} from 'react-stormpath';
import FacebookButton from './FacebookButton';
import LoginButton from './LoginButton';
import Dropdown from 'react-simple-dropdown';
/**CREATED BY DYLAN MAY 10, 2916**/

class StormpathLoginForm extends React.Component {



 onFormSubmit(e, next) {


    next();
  }


render() {

  return (

    <ul className="account-dropdown__quick-links account-dropdown__segment ri-login-dropdown">
    <LoginForm>
                        <li className="account-dropdown__link ri-login-dropdown-segment dropdown-input-segment">
                            <input type="text" className="loginInput" id="loginEmail"  name="username"/>
                        </li>
                        <li className="account-dropdown__link ri-login-dropdown-segment dropdown-input-segment" id="ri-dropdown-pass-segment">
                            <input type="password" id="loginPass" className="formInput loginInput" name="password"/>
                        </li>
                        <li className="account-dropdown__link ri-login-dropdown-segment" id="dropdown-login-buttons">


							<LoginButton

							divId="ri-login-dropdown-email"
							btnId="ri-login-email-btn"
							btnClass=""
							text="LOGIN"

							/>


                            <FacebookButton 

                            divId="ri-login-dropdown-fb"
                            btnId="ri-login-fb-btn"
                            btnClass=""
                            iconClass="fa fa-facebook-official"
                            iconId="ri-login-icon-fb"
                            text="login with facebook"

                            />


                        </li>
                        {/*<li className="account-dropdown__link ri-login-dropdown-segment">
                            <a className="account-dropdown__link__anchor" href="#">
                                Help
                            </a>
                        </li>*/}

                        </LoginForm>
                    </ul>

  );

}


componentDidMount(){

}
   
}

export default StormpathLoginForm;