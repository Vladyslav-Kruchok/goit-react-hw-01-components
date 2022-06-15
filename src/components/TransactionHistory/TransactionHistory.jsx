import PropTypes from "prop-types";
import styles from "../../css/TransactionHistory/TransactionHistory.module.css"

import { THeadRowTH } from "./THeadRowTH";
import { TBodyRowTH } from "./TBodyRowTH";

export const TransactionHistory = (props) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <THeadRowTH
                    hType={"Type"}
                    hAmount={"Amount"}
                    hCurrency={"Currency"} />
            </thead>
            <tbody>
            {
                    props.transactions.map(({id, type, amount, currency}, index) => {
                        const res = (index % 2 === 0 || index === 0) ? true : false;
                        return <TBodyRowTH
                                key={id}
                                type={type}
                                amount={amount}
                                currency={currency}
                                colorClass={res}
                        />
                    })
            }
            </tbody>
        </table>
    );
};

TransactionHistory.protoType = {
    transactions: PropTypes.arrayOf
    (PropTypes.shape({
        key: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        colorClass: PropTypes.string.isRequired
    }))
};