import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }


  componentDidMount() {
    window.setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(window.setInterval(this.fetchMessages, 5000));
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }


  render() {
    return (
      <div className="message-list">
        <div className="selectedChannel">
          #{this.props.selectedChannel.toUpperCase()}
        </div>
        <div className="channel-content" >
          {this.props.messages.map((message) => {
            return (
              <Message message={message} key={message.created_at} />
            );
          })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

