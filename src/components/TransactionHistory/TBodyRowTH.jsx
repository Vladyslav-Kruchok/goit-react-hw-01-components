import PropTypes from "prop-types";
import styles from "../../css/TransactionHistory/TBodyRowTH.module.css"

export const TBodyRowTH = ({colorClass, type, amount, currency}) => { 
    return (
        <tr className={colorClass ? styles.colorSecond : styles.colorFirst}>
            <td className={styles.itemCenter}>{type}</td>
            <td className={styles.itemCenter}>{amount}</td>
            <td className={styles.itemCenter}>{currency}</td>
        </tr>
    );
};

TBodyRowTH.protoType = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    colorClass: PropTypes.string.isRequired
};