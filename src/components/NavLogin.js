import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import FacebookButton from './FacebookButton';
import LoginButton from './LoginButton';
import EmailSignup from './EmailSignupButton';
import StormpathLoginForm from './StormpathLoginForm';
import ReactStormpath, {Authenticated,NotAuthenticated,LogoutLink} from 'react-stormpath';



class NavLogin extends React.Component {

constructor(){

  super();
this.handleClick = this.handleClick.bind(this);
              }

handleClick() {
    /*TO DO (LOGIN FUNCTIONALITY)*/
  }
typePass(){

            $('#fakePass').hide();
            $('#loginPass').show();
            $('#loginPass').focus();
            

}
typeEmail(){

$('#loginEmail').attr('value', "");
	
}
signUp(){


return(<EmailSignup/>);



}
render(){
	
return(

<div id="ri-profile-login" onClick={this.handleClick}>
	<Dropdown className="account-dropdown">
    
        <DropdownTrigger>
           <NotAuthenticated> LOGIN  / <span onClick={this.signUp}>SIGN UP</span> </NotAuthenticated></DropdownTrigger>

            <Authenticated><LogoutLink>LOGOUT</LogoutLink></Authenticated> 
            
    <NotAuthenticated>
                <DropdownContent>
                  
                    <StormpathLoginForm/>
                  
                </DropdownContent>
    </NotAuthenticated>            
            </Dropdown>

            </div>
      )
        }
                                    }






export default NavLogin;