import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value
    );
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

