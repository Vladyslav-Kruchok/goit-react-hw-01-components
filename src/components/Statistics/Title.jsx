import PropTypes from "prop-types";

import styles from "../../css/Statistics/Title.module.css";

export const Title = ({title}) => {
    if(title)
        return (
            title && <h2 className={styles.title}>{title}</h2>
        );
};

Title.protoType = {
    title: PropTypes.string
};