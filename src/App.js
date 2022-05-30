import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsProvider from './context/ContactsProvider';

function App() {
  return (
    <ContactsProvider>
      <AppRoutes />
    </ContactsProvider>
  );
}

export default App;
