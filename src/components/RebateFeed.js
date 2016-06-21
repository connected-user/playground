import React from 'react';
import { Link } from 'react-router';
import MOCK_DATA from '../mock/MockRebateFeedData.js';
const FeedItem = ({ data }) =>{
 var testData = {
id:data.id
};
var style = {
"width":"100%",
"padding": "10px",
"font-family":"'Yantramanav'"
};
  return (
    <div className="ri-rebate-feed-item">
      <div className="logo-wrapper"><img style={style}src={data.imgUrl}/></div>
      <div className="company-details">
        <div className="company-title">{data.title}</div>
        <div className="rebate-description">{data.description}</div>
    </div>
    </div>
  );

};


class RebateFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      data: []
    }
  }

  initMasonry(){
    $('.ri-rebate-feed').masonry({
      itemSelector: '.ri-rebate-feed-item',
      //columnWidth: 300,
      gutter:30,
      isFitWidth:true
    }).css({opacity:1});
  }

  refreshMasonry(){
    $('.ri-rebate-feed').masonry();
    this.setState({isVisible: true});
  }

  componentDidMount() {
    //setTimeout( () =>{
    // this.refreshMasonry();
    //}, 100);

    // TODO - use imageLoad instead
    //this.refreshTimer1 = setTimeout( () =>{ this.refreshMasonry(); }, 800);
    //this.refreshTimer2 = setTimeout( () =>{ this.refreshMasonry(); }, 3000);
    //this.refreshTimer3 = setTimeout( () =>{ this.refreshMasonry(); }, 1000);

  
  }

  componentWillUnmount() {
    clearTimeout(this.refreshTimer1);
    clearTimeout(this.refreshTimer2);
    clearTimeout(this.refreshTimer3);
  }

  render() {
   
    const feedClass = this.state.isVisible ? 'ri-rebate-feed is-visible' : 'ri-rebate-feed';
     const feed = MOCK_DATA;
    return (
      <div className={feedClass}>
      {
        feed.map((item, index) => {
          return <FeedItem key={index} data={item} />
        })

      }
      </div>
    );
  }
}
export default RebateFeed;
