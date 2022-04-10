import PropTypes from 'prop-types';
import {OurFriends} from './FriendList.styled.js'
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';

export const FriendList = ({friends}) => {
  return (
  <OurFriends>
    {friends.map(({ avatar, name, isOnline, id}) => (
      <FriendListItem
        avatar = {avatar}
        name = {name}
        isOnline = {isOnline}
        key = {id}
      />
    ))}
  </OurFriends>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
};