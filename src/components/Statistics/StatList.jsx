import PropTypes from "prop-types";

import styles from "../../css/Statistics/StatList.module.css";

const defaultText = "empty";
export const StatList = (props) => {
    return (
        <ul className={styles.statList}>
            {props.stats.map(({id, label, percentage}) =>
                <li className={styles.item}
                    style={{backgroundColor: getRandomHexColor()}}
                    key={id}>
                    
                    <span className={styles.label}>{label || defaultText}</span>
                    <span className={styles.percentage}>{percentage  || defaultText}%</span>
                </li>
            )}
        </ul>);
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatList.protoType = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
};