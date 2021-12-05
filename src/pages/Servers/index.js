import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import lodashOrderBy from "lodash/orderBy";
import nordVPNLogo from "../../images/nordaccount-light.svg";
import { ServerCard } from "../../components/ServerCard";
import styles from "./styles.scss";
import { getServersList } from "../../api";
import { ROUTES } from "../../routes";

export const Servers = () => {
  const history = useHistory();
  const [serversList, setServersList] = useState([]);

  const sortByName = useCallback(
    (e) => {
      e.preventDefault();
      const sortedList = lodashOrderBy(serversList, ["name"], ["asc"]);
      setServersList(sortedList);
    },
    [serversList]
  );

  const sortByDistance = (e) => {
    e.preventDefault();
    const sortedList = lodashOrderBy(serversList, ["distance"], ["asc"]);
    setServersList(sortedList);
  };

  const getData = async () => {
    try {
      const servers = await getServersList();
      setServersList(servers);
    } catch (error) {
      if (error.message === "Missing token") {
        history.push(ROUTES.LOGIN);
      }
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderList = () =>
    serversList.map(({ name, distance }) => (
      <ServerCard key={`${name}-${distance}`} name={name} distance={distance} />
    ));

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={nordVPNLogo} />
      <div className={styles.filters}>
        <button onClick={sortByName}>sort by name</button>
        <button onClick={sortByDistance}>sort by distance</button>
      </div>
      {renderList()}
    </div>
  );
};
