import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import CreateContact from '../pages/CreateContact';
import UpdateContact from '../pages/UpdateContact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate to="/login" /> } />
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/contacts" element={ <Contacts /> } />
    <Route exact path="/create" element={ <CreateContact /> } />
    <Route exact path="/update/:id" element={ <UpdateContact />} />
  </Routes>
);

export default AppRoutes;
