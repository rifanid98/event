import React from 'react'
import { Add, Dashboard, Home } from 'pages';

const notfound = () => {
  return (
    <p>Not Found!</p>
  )
}

const appRoutes = [

  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/home"
  },
  {
    name: "Add",
    component: Add,
    exact: true,
    path: "/add"
  },
  {
    name: "Dashboard",
    component: Dashboard,
    exact: true,
    path: "/dashboard"
  },
  {
    name: "Not Found",
    component: notfound,
    exact: false,
    path: "*"
  }
];

export default appRoutes;
