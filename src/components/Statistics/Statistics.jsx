import { Title } from "./Title";
import { StatList } from "./StatList";

import styles from "../../css/Statistics/Statistics.module.css";

export const Statistics = (props) => {
    return (
        <section className={styles.statistics}>
            <Title title={ props.title}/>
            <StatList stats={ props.stats}/>
        </section>
    );
};