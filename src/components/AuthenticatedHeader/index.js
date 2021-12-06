import React from "react";
import nordVPNLogo from "../../images/nordaccount-dark.svg";
import styles from "./styles.scss";


export const AuthenticatedHeader = () => (
  <div className={styles.headerContainer}>
    <img className={styles.logo} src={nordVPNLogo} />
    <span className={styles.greetings}>Hello there!</span>
  </div>
);
