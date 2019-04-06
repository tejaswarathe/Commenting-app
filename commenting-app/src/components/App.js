import React, { Component } from "react";
import CommentBox from "./comment-box";
import CommentList from "./comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.state = {
      commentslist: [
        {
          id: 1,
          username: "Tejas",
          text: "this is my comment",
          upvotes: 0,
          downvotes: 0
        },
        {
          id: 2,
          username: "Tejas",
          text: "this is my comment",
          upvotes: 0,
          downvotes: 0
        }
      ]
    };
  }

  componentDidMount() {
    //HTTP request here to get data
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        commentlist: prevState.commentslist.concat(comment)
      };
    });
  }

  handleUpvote(comment) {
    const commentslist = [...this.state.commentslist];
    const index = commentslist.indexOf(comment);
    commentslist[index] = { ...comment };
    commentslist[index].upvotes += 1;
    this.setState({ commentslist });
  }

  handleDownvote(comment) {
    const commentslist = [...this.state.commentslist];
    const index = commentslist.indexOf(comment);
    commentslist[index] = { ...comment };
    commentslist[index].downvotes += 1;
    this.setState({ commentslist });
  }

  render() {
    return (
      <div className="App container">
        <CommentBox />
        <CommentList
          commentslist={this.state.commentslist}
          handleAddComment={this.handleAddComment}
          onUpvote={this.handleUpvote}
          onDownvote={this.handleDownvote}
        />
      </div>
    );
  }
}

export default App;
