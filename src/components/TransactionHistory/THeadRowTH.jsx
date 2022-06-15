import PropTypes from "prop-types";
import styles from "../../css/TransactionHistory/THeadRowTH.module.css";
export const THeadRowTH = (props) => {
    return (
        <tr className={styles.headRow}>
            <th>{props.hType}</th>
            <th>{props.hAmount}</th>
            <th>{props.hCurrency}</th>
        </tr>
    );
};

THeadRowTH.protoType = {
    hType: PropTypes.string.isRequired,
    hAmount: PropTypes.string.isRequired,
    hCurrency: PropTypes.string.isRequired
};