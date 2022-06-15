import PropTypes from "prop-types";
import styles from "../../css/Profile/Profile.module.css";

import { Description } from "./Description";
import { Stats } from "./Stats";

export const Profile = ({ username, tag, location, avatar, stats}) => { 
    return (
        <section className={styles.sectionProfile} >
            <div className={styles.profile}>
                <Description
                    username={username}
                    tag={tag}
                    location={location}
                    avatar={avatar} />
                <Stats stats={stats} />
            </div>
        </section>
    );
};

Profile.protoType = {
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
stats: PropTypes.arrayOf(PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
    }))
}