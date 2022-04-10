// import PropTypes from 'prop-types';
import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList/FriendList";
import user from '../data/user.json'
import stats from '../data/statistic.json'
import friends from '../data/friends.json'

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistic 
        title = "UPLOAD STATS"
        stats = {stats}
      />
      <FriendList 
        friends={friends}
      />
    </>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.exact({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };

// Statistic.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage:PropTypes.number.isRequired
//     })
//   )
// };

// FriendList.protoType = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   )
// };