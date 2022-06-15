import PropTypes from "prop-types";
import style from "../../css/FriendList/FriendItem.module.css";

export const FriendItem = (props) => { 
    return (
        <li className={style.item} key={props.id}>
            <span className={isOnline(props.status)}></span>
            <img className={style.avatar} src={ props.avatar} alt="User avatar" width="100" />
            <p className={style.name}>{ props.name}</p>
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
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};
