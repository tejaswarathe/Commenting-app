import React, { Component } from "react";
import CommentBox from "./comment-box";
import CommentList from "./comments";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      commentslist: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      axios.get("https://commentingapp.herokuapp.com/comments").then(res => {
        this.setState({
          isLoaded: true,
          commentslist: res.data
        });
      });
      console.log("refresh");
    }, 2000);
  }

  handleAddComment(comment) {
    axios
      .post("https://commentingapp.herokuapp.com/comments", comment)
      .then(res => console.log(`comment added succesfully`))
      .catch(err => console.log(err));

    this.setState(prevState => {
      return {
        commentslist: prevState.commentslist.concat(comment)
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
  handleDelete(comment) {
    axios.delete(`https://commentingapp.herokuapp.com/comments/${comment._id}`);
    const commentslist = [...this.state.commentslist];
    const index = commentslist.indexOf(comment);
    commentslist.splice(index, 1);
    return this.setState({ commentslist });
  }

  render() {
    return (
      <div className="App container-fluid">
        <CommentBox handleAddComment={this.handleAddComment} />
        <CommentList
          commentslist={this.state.commentslist}
          onUpvote={this.handleUpvote}
          onDownvote={this.handleDownvote}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
