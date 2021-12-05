import React from "react";
import Login from "./pages/Login";
import Servers from "./pages/Servers";

export const ROUTES = {
  LOGIN: '/login',
  SERVERS: '/servers'
}

export const routesConfig = [
  {
    id: "1",
    url: ROUTES.LOGIN,
    component: Login,
  },
  {
    id: "2",
    url: ROUTES.SERVERS,
    component: Servers,
  },
];
