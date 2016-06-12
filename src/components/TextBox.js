/**
 * Created by Dylan on 12/05/2016.
 */
import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import { IndexLink, Link } from 'react-router';

class TextBox extends React.Component {

    render() {
       var {text, title,iconClass, onclick,link,activeClassName,id } = this.props;
        return (
          
          <div className="textBox panel" onClick={onclick}>

          <Link to={link} activeClassName={activeClassName} >
            <div className="descriptionBoxHeader">
              <h2>{title}</h2>
                <div className="">
                  <FontAwesomeIcon className={iconClass} id={id}/>
                </div>
            </div>
          <p className="textBoxText">{text}</p>
         </Link>
         </div>

        );

    }
    
}

export default TextBox;