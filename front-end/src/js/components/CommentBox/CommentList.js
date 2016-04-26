import React from "react";

import Comment from "./CommentList/Comment";

export default class CommentList extends React.Component {

  render() {

    // extract the comments
    var comments = this.props.data;
    var commentNodes = comments.map((comment) => {
      return (
        <Comment author={comment.author} key={comment._id} >
          {comment.text}
        </Comment>
      );
    });

    return (
      <div class="commentList">
        {commentNodes}
      </div>
    )
  }

}
