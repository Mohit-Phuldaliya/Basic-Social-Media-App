import { UPDATE_POSTS } from "./actionType";

//applied Middleware Thunk in store to handle below code
export function fetchPosts() {
  return function (dispatch) {
    const url = "http://codeial.com:8000/api/v2/posts?page=1&limit=5";
    fetch(url)
      .then((response) => {
        console.log("response", response); // not json //therefore convert response to json
        return response.json();
      })
      .then((apidata) => {
        console.log(apidata);
        dispatch(updatePosts(apidata.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    // posts:posts,
    posts, // sending all posts
  };
}
