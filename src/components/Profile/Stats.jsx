import styles from "../../css/Profile/Stats.module.css";
import PropTypes from "prop-types";

export const Stats = ({ stats: {followers, views, likes}}) => { 
    return (
        <ul className={styles.stats}>
            <li>
                <span className={styles.label}>Followers: </span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views: </span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li>
                <span className={styles.label}>Likes: </span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    );
};

Stats.protoType = {
stats: PropTypes.objectOf(PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
    }))
};
