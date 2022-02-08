import PropTypes from "prop-types";
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className="item">
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: isOnline ? "green" : "red",
        }}
      ></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
