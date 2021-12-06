import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import lodashOrderBy from "lodash/orderBy";
import { ServerCard } from "../../components/ServerCard";
import { AuthenticatedHeader } from "../../components/AuthenticatedHeader";
import styles from "./styles.scss";
import { getServersList } from "../../api";
import { ROUTES } from "../../routes";

export const Servers = () => {
  const history = useHistory();
  const [serversList, setServersList] = useState([]);

  const sortBy = useCallback(
    (value) => (e) => {
      e.preventDefault();
      const sortedList = lodashOrderBy(serversList, [value], ["asc"]);
      setServersList(sortedList);
    },
    [serversList]
  );

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
      <AuthenticatedHeader />
      <div className={styles.filters}>
        <button onClick={sortBy("name")}>sort by name</button>
        <button onClick={sortBy("distance")}>sort by distance</button>
      </div>
      {renderList()}
    </div>
  );
};
