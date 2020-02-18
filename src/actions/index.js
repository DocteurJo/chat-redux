const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POSTED_MESSAGE = 'POSTED_MESSAGE';
export const SELECTED_CHANNEL = 'SELECTED_CHANNEL';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author, content };

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POSTED_MESSAGE,
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: SELECTED_CHANNEL,
    payload: channel
  };
}
