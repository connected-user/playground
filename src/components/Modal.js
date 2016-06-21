import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
const ANIMATION_DELAY = 300;

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false};
    this.triggerClose = this.triggerClose.bind(this);
  }

  componentDidMount() {
    $(document.body).css("overflow","hidden");
    setTimeout(() => {
      this.setState({ active: true });
    }, 100);
    
  }

  triggerClose() {
    this.setState({ active: false });
    setTimeout(() => {
      window.history.back();
    }, ANIMATION_DELAY);
  }

 

  componentWillUnmount(){

    $(document.body).css("overflow","initial");

  }

  render() {
    
    const { active } = this.state;
    const modalClass = active ? 'modal active' : 'modal';
    
    return (
      <div className={modalClass}>
        <div className="modal-content">{this.props.children}</div>
        <button className="modal-close" onClick={this.triggerClose}>+</button>
      </div>
    );

  }

}

export default Modal;