import PropTypes from "prop-types";
import styles from "../../css/TransactionHistory/THeadRowTH.module.css";
export const THeadRowTH = ({hType, hAmount, hCurrency}) => {
    return (
        <tr className={styles.headRow}>
            <th>{hType}</th>
            <th>{hAmount}</th>
            <th>{hCurrency}</th>
        </tr>
    );
};

THeadRowTH.protoType = {
    hType: PropTypes.string.isRequired,
    hAmount: PropTypes.string.isRequired,
    hCurrency: PropTypes.string.isRequired
};