import PropTypes from "prop-types";

import styles from "../../css/Statistics/Title.module.css";

const defaultTitle = "Upload stats";
export const Title = (props) => {
    if(props.title)
        return (
            <h2 className={styles.title}>{ props.title || defaultTitle}</h2>
        );
};

Title.protoType = {
    title: PropTypes.string
};