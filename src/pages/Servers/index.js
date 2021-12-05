import React, { useEffect, useState } from "react";
import nordVPNLogo from "../../images/nordaccount-light.svg";
import styles from "./styles.scss";
import { getServersList } from "../../api";

const Servers = () => {
  const [serversList, setServersList] = useState([]);

  useEffect(async () => {
    const token = sessionStorage.getItem("token");
    const servers = await getServersList({ token });

    setServersList(servers);
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={nordVPNLogo} />
      {serversList.map((server) => {
        const { name, distance } = server;
        return (
          <div key={name}>
            <span>{name}</span> <span>{distance}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Servers;
