import {FETCH_ADS} from '../actions/index';

const initialState = {
  posts: 42
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ADS:
    return action.payload.data;
  }

  return state;

}
