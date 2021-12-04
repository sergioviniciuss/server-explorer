import React, { useState } from "react";
import styles from "./styles.scss";
import { getAuthToken } from "../../api";

export const LoginForm = () => {
  const username = useFormInput();
  const password = useFormInput();

  const handleLogin = async () => {
    const token = await getAuthToken({
      username: username.value,
      password: password.value,
    });
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
