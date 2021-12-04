import React from "react";
import { LoginForm } from "../../components/LoginForm";
import nordVPNLogo from "../../images/nordaccount-light.svg";
import styles from "./styles.scss";

const Login = () => (
  <div className={styles.container}>
    <img className={styles.logo} src={nordVPNLogo} />
    <LoginForm />
  </div>
);

export default Login;
