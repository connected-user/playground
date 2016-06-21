/**
 * Created by Dylan on 16/05/2016.
 */
import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';


class LikeIcon extends React.Component {

constructor(){
super();
this.handleClick = this.handleClick.bind(this);
}

  handleClick(favoriteData) {


 var id = this.props.favoriteData.id;
   //console.log("this.props:)))");
  //console.log(this.props.favoriteData.id);

   //var username = "dylan@myrise.house"
  //var encodedUsername = window.btoa(username);

var http = new XMLHttpRequest();
var url = "http://risedevapi1.herokuapp.com/feed/"+id+"/likes";
//var params = "FeedItemID="+id+"&username="+encodedUsername;
//console.log("URL :)");console.log(url);
//console.log("PARAMS");console.log(params);

var daata = {
"user" :
{
"username" : "dylantest"
}
};
var json = JSON.stringify(daata);
console.log(json);
console.log("2");
http.open("POST", url, true);

//Send the proper header information along with the request


http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
http.setRequestHeader("Access-Control-Allow-Origin", "*");
http.send(json);


}
 

    render() {
       var{favoriteData,className} = this.props;
       
        return (
          
          
          <FontAwesomeIcon onClick={() => { this.handleClick({favoriteData}) }} className={this.props.className} id="photo-control-favorite"/>
        );
    }
}

export default LikeIcon;