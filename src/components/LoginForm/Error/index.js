import React from "react";
import styles from "./styles.scss";

export const Error = ({ error }) => {
  return (
    <>
      <span className={styles.error}>{error}</span>
    </>
  );
};
