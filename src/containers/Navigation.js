import React from 'react';
import { IndexLink, Link } from 'react-router';
import FontAwesomeIcon from '../components/FontAwesomeIcon';
import NavLogin from '../components/NavLogin';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ri-search-bar">
        <span className="icon-search"></span>
        <input className="search-input" type="text"/>
      </div>
    )
  }
}


class ProfileControlPanel extends React.Component {


  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      loggedin: false
      /*MORE STATES NEEDED FOR FUCTIONALITY*/
                };
  }


 handleClick() {

    /*TO DO (DROPDOWN FUNCTIONALITY)*/

  }


render() {

    return (
      <div className="ri-profile-cntrlpanel">
        
        {(this.state.loggedin) ? 
                                <div id="ri-logged-in">
                                 <FontAwesomeIcon className="fa fa-user" id="icon-profile"/>
                                 <HamburgerButton onClick={this.handleClick}/>
                                </div>
                               : 
                                 <NavLogin/>}
      </div>
    )

  }

}




const HamburgerButton = () => {
   
  return (
    <div className="btn-hamburger">
      <span className="btn-bar top-bar"></span>
      <span className="btn-bar middle-bar"></span>
      <span className="btn-bar bottom-bar"></span>
    </div>
  )
};


class Navigation extends React.Component {
  render() {
    return (
        <div className="ri-top-navigation">

          <IndexLink to="/" className="ri-logo" />
          <ul>
            <li><Link to="photos" activeClassName="active" >Get Inspired</Link></li>
            <li><Link to="rebates" activeClassName="active" >Start Saving</Link></li>
            <li><Link to="articles" activeClassName="active" >Expert Insight</Link></li>
          </ul>
<ProfileControlPanel />
          <SearchBar />

      </div>
    )
  }
}

export default Navigation;