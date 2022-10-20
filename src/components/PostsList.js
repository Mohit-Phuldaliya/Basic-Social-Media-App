import React, { Component } from "react";
// import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    // console.log(posts);
    return (
      <div className="posts-list">
        {/* {posts.map((post) => ( */}
        <div className="post-wrapper" /*key={post._id}*/>
          <div className="post-header">
            <div className="post-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
                alt="user-pic"
              />
              <div>
                <span className="post-author">{/*post.user.name*/}Mack</span>
                <span className="post-time">a minute ago</span>
              </div>
            </div>
            <div className="post-content">{/*post.content*/}HelLo Guys!!</div>
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/535/535285.png"
                  alt="likes-icon"
                />
                <span>{/*post.likes.length*/}222</span>
              </div>
              <div className="post-comments-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3193/3193015.png"
                  alt="comments-icon"
                />
                <span>{/*post.comments.length*/}50</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">Bill</span>
                  <span className="post-comment-time">a minute ago</span>
                  <span className="post-comment-likes">22</span>
                </div>
                <div className="post-comment-content">Random comment</div>
              </div>
            </div>
          </div>
        </div>

        <div className="post-wrapper" /*key={post._id}*/>
          <div className="post-header">
            <div className="post-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt="user-pic"
              />
              <div>
                <span className="post-author">{/*post.user.name*/}Subodh</span>
                <span className="post-time">1 Hour ago</span>
              </div>
            </div>
            <div className="post-content">{/*post.content*/}Hey there !!</div>
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/535/535285.png"
                  alt="likes-icon"
                />
                <span>{/*post.likes.length*/}150</span>
              </div>
              <div className="post-comments-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3193/3193015.png"
                  alt="comments-icon"
                />
                <span>{/*post.comments.length*/}25</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">satish</span>
                  <span className="post-comment-time">25 minute ago</span>
                  <span className="post-comment-likes">22</span>
                </div>
                <div className="post-comment-content">Random comment</div>
              </div>
            </div>
          </div>
        </div>

        <div className="post-wrapper" /*key={post._id}*/>
          <div className="post-header">
            <div className="post-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/128/201/201634.png"
                alt="user-pic"
              />
              <div>
                <span className="post-author">{/*post.user.name*/}Aditi</span>
                <span className="post-time">50 minute ago</span>
              </div>
            </div>
            <div className="post-content">
              {/*post.content*/}feeling Good !!
            </div>
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/535/535285.png"
                  alt="likes-icon"
                />
                <span>{/*post.likes.length*/}310</span>
              </div>
              <div className="post-comments-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3193/3193015.png"
                  alt="comments-icon"
                />
                <span>{/*post.comments.length*/}78</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">paul</span>
                  <span className="post-comment-time">40 minute ago</span>
                  <span className="post-comment-likes">22</span>
                </div>
                <div className="post-comment-content">Random comment</div>
              </div>
            </div>
          </div>
        </div>

        <div className="post-wrapper" /*key={post._id}*/>
          <div className="post-header">
            <div className="post-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
                alt="user-pic"
              />
              <div>
                <span className="post-author">{/*post.user.name*/}Mohak</span>
                <span className="post-time">2 hour ago</span>
              </div>
            </div>
            <div className="post-content">{/*post.content*/}damn !!</div>
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/535/535285.png"
                  alt="likes-icon"
                />
                <span>{/*post.likes.length*/}289</span>
              </div>
              <div className="post-comments-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3193/3193015.png"
                  alt="comments-icon"
                />
                <span>{/*post.comments.length*/}24</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">Bill</span>
                  <span className="post-comment-time">a minute ago</span>
                  <span className="post-comment-likes">22</span>
                </div>
                <div className="post-comment-content">Random comment</div>
              </div>
            </div>
          </div>
        </div>
        {/* ))}  */}
      </div>
    );
  }
}

// PostsList.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default PostsList;
