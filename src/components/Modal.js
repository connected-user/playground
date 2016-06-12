import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
const ANIMATION_DELAY = 300;

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false,data: [] };
    this.triggerClose = this.triggerClose.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: true });
    }, 100);
    console.log(this.props.location.pathname)
  }

  triggerClose() {
    this.setState({ active: false });
    setTimeout(() => {
      window.history.back();
    }, ANIMATION_DELAY);
  }


  getId(){
  var str = this.props.location.pathname;
  var pos = str.lastIndexOf("/");
  pos++;
  var id = str.slice(pos);
  return id;
  }


  componentWillMount(){

    var id = this.getId();
    var target = "http://risedevapi1.herokuapp.com/feed/" + id;
    /*console.log(target);*/
fetch(target)
        .then((response) => response.json())
        .then((data) => {
          /*console.log(data);*/
         this.setState({data: data});
          
        })
        .catch((error) => console.warn(error));


  }

  render() {
    this.getId();
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