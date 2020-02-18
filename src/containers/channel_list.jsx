import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(this.props.selectedChannel);
    }
  }

  handleChangeSelection = (channel) => {
    this.props.selectChannel(channel);
  }

  addSelectedClass = (channel) => {
    let classes = "";
    if (this.props.selectedChannel === channel) {
      classes = "listSelectedChannel";
    } else {
      classes = "";
    }
    return classes;
  }

  render() {
    return (
      <ul className="channel-list" >
        {this.props.channels.map((channel) => {
          return (
            <li
              className={this.addSelectedClass(channel)}
              onClick={() => this.handleChangeSelection(channel)}
              key={channel}
              role="presentation"
            >
              # { channel }
            </li>
          );
        })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
