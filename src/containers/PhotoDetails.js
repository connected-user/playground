import React from 'react';
import PhotoFeed from '../components/PhotoFeed';
import PhotoComments from '../components/PhotoComments';
import LikeIcon from '../components/LikeIcon';

class PhotosDetails extends React.Component {

  constructor() {
    super();
    this.state = { data: {author:{},comments:{},stats:{}} };
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
    var target = "https://risedevapi1.herokuapp.com/feed/" + id;

    /*console.log(target);*/

	fetch(target)
        .then((response) => response.json())
        .then((data) => {

         this.setState({data: data});
        })
        .catch((error) => console.warn(error));

  	}

  render() {

  	var leftPhotoStyle = {
		height:'100%',
		width: 'auto'
	};

	var rightPhotoStyle = {
		width: '100%'
	};
  	
  	const info = this.state.data;
    console.log(info);
    console.log(info.stats.likeCount);
  	const id = this.getId();
  	var commentsArray = info.comments;
    var likes = "";
    console.log("Here comes the id");
    console.log(info.id);

    if(info.stats.likeCount >1 || info.stats.likeCount == 0) likes = "likes"; else likes = "like";
    
    return (
      <div className="photo-details-wrap">

        <div className="photo-details-left"><img style={leftPhotoStyle} src={info.imageUrl}/></div>

        <div className="photo-details-right">

        	<div className="photo-title">
        		{info.title}
            {/**/}
            <span className="photo-likes">
            {info.stats.likeCount} {likes}
            <LikeIcon className="photo-details-like fa fa-heart" favoriteData={this.id}/>
            </span>

        	</div>
      
        	<div className="author-details">

        		<div className="author-photo">
        			<img style={rightPhotoStyle} src="http://designgear.in/demo/eve/demo/images/speaker3-140x140.png"/>
        		</div>

        		<div className="author-name">
        			{info.author.displayName}
        		</div>

        	</div>

        	<div className="photo-description">
        		{info.description}
        	</div>

        	<div className="comments-container">
        		<PhotoComments idNumber={info.id} comments={commentsArray}/>
        	</div>

        </div>
      </div>
    );
  }
}

export default PhotosDetails;