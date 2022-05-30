import './App.css';
import ContactsProvider from './context/ContactsProvider';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ContactsProvider>
      <AppRoutes />
    </ContactsProvider>
  );
};

export default App;
