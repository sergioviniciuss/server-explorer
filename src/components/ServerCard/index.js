import React from "react";
import styles from "./styles.scss";
import nordVPNIcon from "../../images/nordvpn-app-icon.svg";

export const ServerCard = ({ name, distance }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={nordVPNIcon} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.distance}>{distance}</div>
        </div>
      </div>
    </div>
  );
};
