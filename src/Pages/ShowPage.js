import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TweetComponents from '../Components/Tweets';
import UserComponents from '../Components/Users';
import ShowActions from '../Redux/Actions/showActions';
import TweetActions from '../Redux/Actions/tweetActions';

const ShowPage = props => {
  const dispatch = useDispatch();
  const currentUserID = useSelector(state => state.currentUser.id);
  const showUser = useSelector(state =>
    state.showUser.id ? state.showUser : ''
  );
  const tweets = useSelector(state => state.tweets);

  useEffect(() => {
    const userId = props.match.params.id;
    dispatch(ShowActions.getShowUserFromDB(userId));
    dispatch(TweetActions.fetchShowUserTweets(userId));
  }, [dispatch, props.match.params.id]);

  const renderTweets = () => {
    // debugger;
    if (tweets) {
      return tweets.map(tweet =>
        tweet.rt ? (
          <TweetComponents.Retweet
            key={`rt-timeline-${tweet.user_id}-${tweet.id}`}
            {...tweet}
          />
        ) : (
          <TweetComponents.SingleTweet
            key={`timeline-${tweet.user_id}-${tweet.id}`}
            {...tweet}
          />
        )
      );
    }
  };

  //////////////////////////////////////////////////////////////////////////////

  const handleFollow = () => {
    const { match } = props;
    const followeeId = match.params.id;
    dispatch(ShowActions.followUpdateToDB(followeeId));
  };

  const followButton = () => {
    if (showUser.followers) {
      const follower = showUser.followers.find(
        user => user.id === currentUserID
      );
      return follower ? (
        <button onClick={handleFollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      );
    }
  };

  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <UserComponents.ProfileCard {...showUser} />
      <h2>Tweets</h2>
      {renderTweets()}
    </div>
  );
};

export default ShowPage;

// class ShowPage extends Component {
//   componentDidMount() {
//     const userId = this.props.match.params.id;
//     const { getShowUserFromDB, fetchShowUserTweets } = this.props;
//     getShowUserFromDB(userId);
//     fetchShowUserTweets(userId);
//   }

//   handleFollow = () => {
//     const { match, followUpdateToDB } = this.props;
//     const followeeId = match.params.id;
//     followUpdateToDB(followeeId);
//   };

//   followButton = () => {
//     const { showUser, currentUser } = this.props;
//     if (showUser.followers) {
//       const follower = showUser.followers.find(
//         user => user.id === currentUser.id
//       );
//       return follower ? (
//         <button onClick={this.handleFollow}>Unfollow</button>
//       ) : (
//         <button onClick={this.handleFollow}>Follow</button>
//       );
//     }
//   };

//   renderTweets = () => {
//     const { showUser, tweets } = this.props;
//     if (showUser.tweets) {
//       return tweets.map(tweet => {
//         return (
//           <TweetComponents.SingleTweet key={`show-${tweet.id}`} {...tweet} />
//         );
//       });
//     }
//   };

//   render() {
//     const { showUser } = this.props;
//     return (
//       <div>
//         <h2>{showUser.username}</h2>
//         {this.followButton()}
//         <h2>Tweets</h2>
//         {this.renderTweets()}
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   getShowUserFromDB: ShowActions.getShowUserFromDB,
//   followUpdateToDB: ShowActions.followUpdateToDB,
//   fetchShowUserTweets: TweetActions.fetchShowUserTweets
// };
// const mapStateToProps = state => ({
//   currentUser: state.currentUser,
//   showUser: state.showUser,
//   tweets: state.tweets
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ShowPage);
