import React, { Component } from "react";
import CommentItem from "./comment";

class CommentList extends Component {
  render() {
    return (
      <div className="container list-group list-group-flush">
        {this.props.commentslist.map((comment, index) => {
          return (
            <CommentItem
              key={index}
              comment={comment}
              onUpvote={this.props.onUpvote}
              onDownvote={this.props.onDownvote}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
