import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.scss";
import { getAuthToken } from "../../api";
import { ROUTES } from "../../routes";

export const LoginForm = () => {
  const username = useFormInput();
  const password = useFormInput();
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await getAuthToken({
        username: username.value,
        password: password.value,
      });

      history.push(ROUTES.SERVERS);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleLogin}>
        <input
          className={styles.textField}
          type="text"
          placeholder="username"
          {...username}
          autoComplete="new-password"
        />
        <input
          className={styles.textField}
          type="password"
          placeholder="password"
          {...password}
          autoComplete="new-password"
        />
        <button className={styles.cta} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
