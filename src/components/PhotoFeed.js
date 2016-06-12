import React from 'react';
import LikeIcon from './LikeIcon';
import MOCK_DATA from '../mock/MockPhotoFeedData.js';
import { Link } from 'react-router';

const FeedItem = ({ data }) =>{
 var testData = {
id:data.id
};

  return (
    <div className="ri-photo-feed-item">
      <div className="photo-wrapper">
      <div className="photo-controls"> <LikeIcon favoriteData={testData}/></div>
        <Link to={{pathname: `photos/${data.id}`, query: { modal: true }}}><img src={data.imageUrl} /></Link>
      </div>
      <div className="photo-details">
        <div className="photo-title">{data.title}</div>
        <div className="photo-description">{data.description}</div>
      </div>
      <div className="author-details">
        <div className="avatar"><img src={data.author.avatarUrl} /></div>
        <div className="info">
          <div className="author-name">{data.author.displayName}</div>
          <div className="author-location">{data.location}</div>
        </div>
      </div>
      <div className="photo-score">{data.stats && data.stats.likeCount}</div>
    </div>
  );

};


class PhotoFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      data: []
    }
  }

  initMasonry(){
    $('.ri-photo-feed').masonry({
      itemSelector: '.ri-photo-feed-item',
      //columnWidth: 300,
      gutter:30,
      isFitWidth:true
    }).css({opacity:1});
  }

  refreshMasonry(){
    $('.ri-photo-feed').masonry();
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

    fetch('http://risedevapi1.herokuapp.com/feed/')
        .then((response) => response.json())
        .then((data) => {
          this.setState({data: data.content});
          this.initMasonry();
        })
        .catch((error) => console.warn(error));
  }

  componentWillUnmount() {
    clearTimeout(this.refreshTimer1);
    clearTimeout(this.refreshTimer2);
    clearTimeout(this.refreshTimer3);
  }

  render() {
   
    const feedClass = this.state.isVisible ? 'ri-photo-feed is-visible' : 'ri-photo-feed';
    const feed = this.state.data;
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

export default PhotoFeed;
