import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types";

// import { fetchPosts } from "../actions/posts";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
// import Page404 from "./Page404";
// import {Navbar,Home ,Login ,Page404,} from './';

// Dummy component

const Signup = () => <div>Signup</div>;

class App extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchPosts());
  // }

  render() {
    // console.log("PROPS", this.props);
    const { posts } = this.props;

    return (
      <Router>
        <div>
          <Navbar />
          <Home posts={posts} />
          {/* <Login /> */}

          {/* <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch> */}
        </div>
      </Router>
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
