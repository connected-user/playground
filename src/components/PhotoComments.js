import React from 'react';



class PhotoComments extends React.Component {

    constructor(){
        super();
    }


  getId(){

    var str = this.props.location.pathname;
    var pos = str.lastIndexOf("/");
    pos++;
    var id = str.slice(pos);
    return id;

  }

    render() {
    
        var {comments,commentSubmit,idNumber} = this.props;

        


      
  

        return (

            <div id="photo-comments-wrapper">
                <SubmitCommentForm idNumber={idNumber}/>
                <CommentList comments={comments}/>
            </div>

        );
  }
}

export default PhotoComments;


class Comment extends React.Component{
    constructor(){
        super();
    }

    render(){      
        
        var text = this.props;

        return(

            <div className="photo-comment">

                <div className="comment-avatar">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/p120x120/13221500_10153561898672452_3459637915444863391_n.jpg?oh=f2b592832c49d32ef7c096a6eb565521&oe=57C36FC2" id="profile-pic-missing"/>
                </div>
                
                <div className="comment-arrow2">
                </div>

                 <div className="comment-arrow">
                </div>

                <div className="comment-date">
                    2 weeks ago
                </div>

                <div className="comment-content">  
                    
                    <div className="comment-author">
                        Dylan Paul
                    </div>

                    <div className="comment-text">
                        {this.props.text}
                    </div>

                </div>  

            </div>

        );
    }
}


class SubmitCommentForm extends React.Component{

constructor(){
super();
this.handleClick = this.handleClick.bind(this);
}
 handleClick(id,username) {


 
console.log("HELLO SUBMITCOMMENT CLICK");
console.log(id);
var http = new XMLHttpRequest();
var url = "https://risedevapi1.herokuapp.com/feed/"+id.idNumber+"/comments";
console.log(url);
var text = $('#commentSubmitForm').text();
console.log(text);
//var params = "FeedItemID="+id+"&username="+encodedUsername;
//console.log("URL :)");console.log(url);
//console.log("PARAMS");console.log(params);

var daata = {
 "text": text,
 "user": {
   "username": username
 }
};




var json = JSON.stringify(daata);
console.log(json);

http.open("POST", url, true);

//Send the proper header information along with the request


http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

http.send(json);


}

render(){        
var {idNumber,username} = this.props;

return(

<div className="photo-comment-submit">
    <span id="commentSubmitLabel">Write a comment:</span>
   <textarea  rows="3" id="commentSubmitForm"></textarea><button onClick={() => { this.handleClick({idNumber},"dylantest") }}
                                                                 id="commentSubmitButton"
                                                                 type="submit">
                                                                 submit
                                                                 </button>   
</div>

);
}
}

class CommentList extends React.Component{

    render(){

        var{comments} = this.props;

        var commentList = [];

        if(this.props.comments.length > 0){

            
            var commentList = this.props.comments.map(
                                function(comment){    
                                    return(<Comment avatar={comment.user.avatarUrl} key={comment.id} text={comment.text} />);
                                }
                               );
                console.log("HEY YOU GUYS");
                console.log(commentList);
        }

    return(
        <div className="photo-comment-list">
            {commentList}
        </div>
    );
    }
}


