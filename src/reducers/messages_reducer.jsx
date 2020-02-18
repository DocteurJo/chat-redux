import { FETCH_MESSAGES, POSTED_MESSAGE } from '../actions/index';

function MessagesReducer(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }

    case POSTED_MESSAGE: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }

    default: {
      return state;
    }
  }
}

export default MessagesReducer;

