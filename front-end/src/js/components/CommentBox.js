import React from "react";
import axios from "axios";
import CommentList from "./CommentBox/CommentList";
import CommentForm from "./CommentBox/CommentForm";

export default class CommentBox extends React.Component {

  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    this.getComments();
    // setInterval(this.getComments.bind(this), this.props.pollInterval);
  }

  getComments() {
    axios.get(this.props.url)
      .then((data) => {
        this.setState({data: data.data})
      })
      .catch((err) => {
        console.log("Error getting comments");
        console.error(err);
      })
  }

  handleCommentSubmit(comment) {
    axios.post(this.props.url, comment)
      .then((data) => {
        this.setState({data: this.state.data.concat([data.data])})
      })
      .catch((err) => {
        console.log("Error handling the submission");
        console.error(err);
      });
  }

  render() {
    return (
      <div class="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    )
  }
}
