import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactsContext from './ContactsContext';

function ContactsProvider({ children }) {
  const [check, setCheck] = useState(false);
  const [contact, setContact] = useState({});
  const [userToken, setUserToken] = useState({
    token: '',
    type: ''
  });
  const context = React.useMemo(() => ({
    userToken,
    setUserToken,
    check,
    setCheck,
    contact,
    setContact
  }), [check, setCheck, userToken, setUserToken, contact, setContact]);

  return (
    <ContactsContext.Provider value={ context }>
      {children}
    </ContactsContext.Provider>
  );
}

ContactsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactsProvider;