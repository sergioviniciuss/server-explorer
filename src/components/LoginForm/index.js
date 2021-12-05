import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.scss";
import { getAuthToken } from "../../api";
import { Error } from "./Error";
import { ROUTES } from "../../routes";

export const LoginForm = () => {
  const username = useFormInput();
  const password = useFormInput();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await getAuthToken({
        username: username.value,
        password: password.value,
      });

      history.push(ROUTES.SERVERS);
    } catch (error) {
      console.error(error?.message);
      const msg = error?.message || "An error ocurred. Please try again...";

      setError(msg);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleLogin}>
        {error && <Error error={error} />}
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
        <button className={styles.cta} type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
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
