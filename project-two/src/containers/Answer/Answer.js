import React, { Component } from "react";

export default class Answer extends Component {
  render() {
    return (
      <div>
        <input id={this.props.id} type="radio" name="answer" />
        <label htmlFor={this.props.id}>{this.props.answer}</label>
      </div>
    );
  }
}
