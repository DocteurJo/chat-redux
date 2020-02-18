import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <div className="notification">
          <div className="notification-content">
            <p className="author">
              {this.props.message.author} - <small>{this.props.message.created_at}</small>
            </p>
            <p>{this.props.message.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
