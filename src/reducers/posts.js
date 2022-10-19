import { UPDATE_POSTS } from "../actions/actionType";

export default function posts(state = [], action) {
  // our current state looks like :-
  // { post : [] } array of psot
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts; //new state
    default:
      return state;
  }
}
