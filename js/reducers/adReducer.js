import {FETCH_ANY, FETCH_ONLY} from '../actions/index';

const initialState = {
  posts: 42
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ANY:
    return action.payload.data
    break;
    case FETCH_ONLY:
    return action.payload.data;
  }

  return state;

}
