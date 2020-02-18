import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="left" style={{ "flex-grow": "1" }}>
        <div className="all-channels">ALL CHANNELS</div>
        <ChannelList />
      </div>
      <div className="right" style={{ "flex-grow": "2" }}>
        <MessageList />
      </div>
    </div>
  );
};

export default App;
