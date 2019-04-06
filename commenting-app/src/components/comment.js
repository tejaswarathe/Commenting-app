import React, { Component } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

class CommentItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevprops", prevProps);
    console.log("prestates", prevState);
    if (prevProps.comment !== this.props.comment) {
      console.log("give PUT request");
      ////PUT request if changes
    }
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="d-flex flex-row container bg-light">
          <div className="d-flex flex-column container col-8">
            <h4>{this.props.comment.username}</h4>
            <p>{this.props.comment.text}</p>
          </div>

          <div className="d-flex flex-column container col-3">
            <h6>
              <button
                onClick={() => this.props.onUpvote(this.props.comment)}
                className="btn btn-success btn-sm mr-1 col-1.5"
              >
                <FaThumbsUp />
              </button>
              {this.props.comment.upvotes} Upvotes
            </h6>

            <h6>
              <button
                onClick={() => this.props.onDownvote(this.props.comment)}
                className="btn btn-danger btn-sm mr-1 col-1.5"
              >
                <FaThumbsDown />
              </button>
              {this.props.comment.downvotes} Downvotes
            </h6>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentItem;
