import React from "react";
import "./style.scss";
import logo from "../../images/nordaccount-light.svg";

export const App = ({ title }) => {
  return (
    <div>
      <img src={logo} className="app-logo" alt="logo" />
      <h1>{title}</h1>
    </div>
  );
};
