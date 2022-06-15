import styles from "../../css/Profile/Description.module.css";
import PropTypes from "prop-types";

export const Description = ({username, tag, location, avatar}) => {
    return (
        <div className={styles.description}>
            <img
                src={avatar}
                alt={userAvatar(username)}
                className={styles.avatar}
            />
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>
    );
};

const userAvatar = (user) => {
    return `${user} avatar`;
}

Description.protoType = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

