import { useState } from "react";
import classes from "../style/Birthday-reminder.module.css";
import data from "./data";
import List from "./List";

function Birth() {
  const [people, setPeople] = useState(data);
  return (
    <main className={classes.main}>
      <section className={`${classes.section} ${classes.container}`}>
        <h3 className={classes.fontStyle}>{people.length} birtdays today</h3>
        <List people={people} />
        <button className={classes.button} onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default Birth;
