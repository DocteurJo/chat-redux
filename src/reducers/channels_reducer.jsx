import { SELECTED_CHANNEL } from '../actions/index';

function ChannelsReducer(state = null, action) {
  switch (action.type) {
    case SELECTED_CHANNEL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default ChannelsReducer;
