import PropTypes from "prop-types";
import style from "../../css/FriendList/FriendItem.module.css";

export const FriendItem = ({status, avatar, name}) => { 
    return (
        <li className={style.item}>
            <span className={isOnline(status)}></span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="100" />
            <p className={style.name}>{name}</p>
        </li>
    );
};
const isOnline = (res) =>
{
    return res ? `${style.status} ${style.onLine}` : `${style.status}`;
}

FriendItem.protoType = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
