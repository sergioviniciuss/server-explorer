import React from "react";
import { Link } from "../Link";
import nordVPNLogo from "../../images/nordaccount-dark.svg";
import styles from "./styles.scss";

export const AuthenticatedHeader = () => {
  const handleLogout = () => window.location.reload();

  return (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={nordVPNLogo} />
      <span className={styles.greetings}>
        Hello there! <Link text="(logout)" onClick={handleLogout} />
      </span>
    </div>
  );
};
