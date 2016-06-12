import React from 'react';
import AppStyles from './resources/less/App.less';
import Navigation from './src/containers/Navigation';
import Modal from './src/components/Modal';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    const nextIsModal = this.isModalRoute(nextProps);
    const routeTypeChanged = this.isModalRoute(this.props) !== nextIsModal;
    this.previousChildren = nextIsModal && routeTypeChanged ? this.props.children : this.previousChildren;
  }

  isModalRoute(props) {
    const { location } = props;
    const { query } = location;
    return Boolean(query && query.modal);
  }

  render() {
    const isModal = this.isModalRoute(this.props);
    const modalView = isModal ? (<Modal {...this.props} isOpen = {isModal}>{this.props.children}</Modal>) : undefined;
    return (
      <div className="ri-app-container">
        <Navigation />
        <div className = "ri-content">
          {isModal ? this.previousChildren : this.props.children}
        </div>
        {modalView}
      </div>
    );
  }
}

export default App;