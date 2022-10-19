import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// import { fetchPosts } from "../actions/posts";
import PostsList from "./PostsList";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchPosts());
  // }

  render() {
    // console.log("PROPS", this.props);
    const { posts } = this.props;

    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/201/201634.png"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>

        <PostsList posts={posts} />
      </div>
    );
  }
}

//connecting APP to Store
function mapStateToProps(state) {
  //mapping all our state in the redux store
  return {
    posts: state.posts,
  };
}

// App.PropTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(App);
