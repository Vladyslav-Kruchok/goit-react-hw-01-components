import PropTypes from "prop-types";

import { FriendItem } from "../FriendList/FriendItem";

import style from "../../css/FriendList/FriendList.module.css";

export const FriendList = (props) => {
    
    return (
        <ul className={style.friendList}>
            {
                props.friends.map(({isOnline, avatar, name, id}) =>
                    <FriendItem
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                        key={id} />
            )}
        </ul>
    );
};

FriendList.protoType = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        key: PropTypes.number.isRequired
    }))
};