/**
 * Created by Dylan on 09/05/2016.
 */
import React from 'react';
import ReactStormpath from 'react-stormpath';
import EmailSignupButton from './EmailSignupButton';


class SignUpSplash extends React.Component {
componentDidMount(){
document.getElementById('emailButton').innerHTML += "";
}
    render() {
       
        return (
          
        <div id="signup">
        <EmailSignupButton/>
        </div>
        );




    }


}

export default SignUpSplash;