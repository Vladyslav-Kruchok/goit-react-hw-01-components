import PropTypes from "prop-types";

import { Title } from "./Title";
import { StatList } from "./StatList";

import styles from "../../css/Statistics/Statistics.module.css";

export const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            <Title title={title}/>
            <StatList stats={stats}/>
        </section>
    );
};

Statistics.protoType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf()
};