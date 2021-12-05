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
      const token = await getAuthToken({
        username: username.value,
        password: password.value,
      });

      sessionStorage.setItem("token", token);
      history.push(ROUTES.SERVERS);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          {...username}
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="password"
          {...password}
          autoComplete="new-password"
        />
        <button type="submit">Submit</button>
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
