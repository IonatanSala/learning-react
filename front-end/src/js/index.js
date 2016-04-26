import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./components/CommentBox";

var app = document.getElementById("react-app");

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(<CommentBox url="http://localhost:3000/comments" pollInterval={2000} />, app)
