import PropTypes from 'prop-types';
import { Friend, IsOnline, Name, Foto } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Friend>
      <IsOnline isOnline={isOnline}></IsOnline>
      <Foto src={avatar} alt="foto" width="80px" height="80px"/>
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};