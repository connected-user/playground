import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';


class IconButton extends React.Component {
  render() {
    var {onClick,text,btnClass, btnId, divId, iconClass, iconId} = this.props;
    return (
    <div id={divId}>
      <button id={btnId} className={btnClass} onClick={onClick}>
        {text} <FontAwesomeIcon className={iconClass} id={iconId}/>
      </button>
      </div>
    );
  }
}

export default IconButton;