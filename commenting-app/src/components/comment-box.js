import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }
  addComment(e) {
    e.preventDefault();

    const text = e.target.elements.text.value.trim();
    const username = e.target.elements.name.value.trim();
    let upvotes = 0;
    let downvotes = 0;

    if (username && text) {
      const commentObject = { username, text, upvotes, downvotes };

      this.props.handleAddComment(commentObject);

      e.target.elements.name.value = "";
      e.target.elements.text.value = "";
    }
  }

  render() {
    return (
      <div className="container jumbotron">
        <h1 className="title">Submit your comment below</h1>
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <input
                ref="username"
                type="text"
                className="form-control"
                name="name"
                placeholder="Type your name here..."
              />
            </div>
          </div>
          <div className="field">
            <div className="form-group">
              <textarea
                ref="text"
                type="text"
                className="form-control mt-2"
                name="text"
                placeholder="Type your comment here..."
              />
            </div>
          </div>
          <div className="field">
            <div className="form-group">
              <button type="submit" className="btn btn-primary float-right">
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
