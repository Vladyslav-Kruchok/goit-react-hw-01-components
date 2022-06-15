import PropTypes from "prop-types";
import styles from "../../css/TransactionHistory/TBodyRowTH.module.css"

export const TBodyRowTH = (props) => { 
    return (
        <tr className={props.colorClass ? styles.colorSecond : styles.colorFirst} key={props.id}>
            <td className={styles.itemCenter}>{props.type}</td>
            <td className={styles.itemCenter}>{props.amount}</td>
            <td className={styles.itemCenter}>{props.currency}</td>
        </tr>
    );
};

TBodyRowTH.protoType = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    colorClass: PropTypes.string.isRequired
};