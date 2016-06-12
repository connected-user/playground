/**
 * Created by Dylan on 13/05/2016.
 */
import React from 'react';
import SignUpSplash from './SignUpSplash';
class LandingHeader extends React.Component {
 constructor() {
    super();
    
    this.state = {
      shouldHide: false
    };
}
    render() {
       var { className, id, text, onclick } = this.props;
        return (
          
          
         
    <div id="ri-header-container">
    <div id="ri-header-signup">
    <SignUpSplash/>
    </div>
    </div>
        );
    }
}

export default LandingHeader;