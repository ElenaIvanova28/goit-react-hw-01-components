import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
}
