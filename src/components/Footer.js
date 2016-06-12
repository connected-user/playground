/**
 * Created by Dylan on 20/05/2016.
 */
import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import { IndexLink, Link } from 'react-router';

class Footer extends React.Component {

  render() {
  {/**If you need to edit footer items/titles, edit the appropriate section's variables**/}

    var firstSectionTitle ="COMPANY";
    var firstSectionItems = ["About Rise" , "Press Info" , "Careers" , "Contact Us" , "Terms & Privacy" , "Copyright & Trademark"];

    var secondSectionTitle = "EXPLORE RISE";
    var secondSectionItems = ["Advertise" , "For Professionals" , "Sell on Rise" , "FAQs"];

    var thirdSectionTitle="CONNECT WITH RISE";

    return (
    <div id="ri-footer">
    <FooterSection sectionTitle={firstSectionTitle} items={firstSectionItems}/>
    <FooterSection sectionTitle={secondSectionTitle} items={secondSectionItems}/>
    <SocialFooterSection sectionTitle={thirdSectionTitle}/>


    </div>
    );
  }
}

export default Footer;


/**TODO LINK FUNCTIONALITY w/ LINKTO PROPS NEEDED**/
class FooterSection extends React.Component{
render(){
var{sectionTitle,items} = this.props;

var itemList = items.map(function(item){return<Link to=""><li className="ri-footer-item">{item}</li></Link>;})
                        
                      

return(

<div className="ri-footer-section">
<ul className="ri-footer-list">
<div className="ri-footer-section-title">{sectionTitle}</div>

{itemList}

</ul>
</div>

);


}
}


/**TODO LINK FUNCTIONALITY w/ LINKTO PROPS NEEDED**/
class SocialFooterSection extends React.Component{

render(){

var{sectionTitle} = this.props;

return(


<div className="ri-footer-section">

<ul className="ri-footer-list">
<div className="ri-footer-section-title">{sectionTitle}</div>

<a href="https://www.facebook.com/risehomes/"><li className="ri-footer-social-item"><FontAwesomeIcon className="fa fa-facebook-official"/></li></a>
<a href="https://twitter.com/Rise_Homes"><li className="ri-footer-social-item"><FontAwesomeIcon className="fa fa-instagram"/></li></a>
<a href="https://www.instagram.com/rise_homes/"><li className="ri-footer-social-item"><FontAwesomeIcon className="fa fa-twitter-square"/></li></a>
<a href="https://www.linkedin.com/company/10065774?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10065774%2Cidx%3A2-1-2%2CtarId%3A1464095662661%2Ctas%3Arise%20home%20design"><li className="ri-footer-social-item"><FontAwesomeIcon className="fa fa-linkedin-square"/></li></a>
</ul>

</div>


);}}


