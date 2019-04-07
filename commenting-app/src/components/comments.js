import React, { Component } from "react";
import CommentItem from "./comment";

class CommentList extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      /// A bug to fix here
      console.log(this.props.commentslist);
    }
  }
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
              onDelete={this.props.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
