/**
 * Created by Dylan on 09/05/2016.
 */
import React from 'react';
import IconButton from './IconButton';

class FacebookButton extends React.Component {
constructor(){
super();

this.fbLogin = this.fbLogin.bind(this);


}
   

/*FB LOGIN USING OAUTH*/
fbLogin(){
  /*OAUTH INITIALIZE*/
  OAuth.initialize('06xEp9h-x2w58YbIALBrQWD-UJw');

  OAuth.popup('facebook').done(function(result) {
    /*HANDLE RESULT*/
      console.log(result)
  

    result.me().done(function(data) {
      console.log(data.name);
      console.log(data.location);
      console.log(data.email);
})
})
}

render() {
       var{text,btnClass,btnId,divId,iconClass,iconId} = this.props;
        return (
          
          
         <IconButton 
         btnClass={btnClass} 
         btnId={btnId} 
         divId={divId} 
         iconClass={iconClass} 
         iconId={iconId} 
         text={text} 
         onClick={this.fbLogin} 
         />
         
        );
    }



}
export default FacebookButton;


