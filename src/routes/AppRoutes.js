import React from 'react';
import { BrowserRouter as Router, Navigate, useRoutes } from "react-router-dom";
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import CreateContact from '../pages/CreateContact';
import UpdateContact from '../pages/UpdateContact';

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Navigate to='/login' /> },
    { path: "/login", element: <Login /> },
    { path: "/contacts", element: <Contacts /> },
    { path: "/create", element: <CreateContact /> },
    { path: "/update/:id", element: <UpdateContact /> }
  ]);
  return routes;
};

function AppRoutes() {
  return (
    <Router>
      <App />
    </Router>
  );
};


export default AppRoutes;
