/**
 * Created by Dylan on 09/05/2016.
 */
import React from 'react';

class LoginButton extends React.Component {
constructor(){
super();

this.emailLogin = this.emailLogin.bind(this);


}
   

/*EMAIL LOGIN*/
emailLogin(){
  /*TO DO EMAIL LOGIN FUNCTIONALITY*/
 


}

render() {
       var{text,btnClass,btnId,divId} = this.props;
        return (
          
          
         <Button 
         btnClass={btnClass} 
         btnId={btnId} 
         divId={divId}
         text={text} 
         onclick={this.emailLogin} 
         />
         
        );
    }



}
class Button extends React.Component {
  render() {
    var {onclick,text,btnClass, btnId, divId} = this.props;
    return (
    <div id={divId}>
      <button id={btnId} className={btnClass} onClick={onclick}>
        {text} 
      </button>
      </div>
    );
  }
}



export default LoginButton;