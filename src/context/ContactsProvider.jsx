import React from 'react';
import PropTypes from 'prop-types';
import ContactsContext from './ContactsContext';

const ContactsProvider = ({ children }) => {

  const context = {};
  return (
    <ContactsContext.Provider value={ context }>
      {children}
    </ContactsContext.Provider>
  );
};

ContactsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactsProvider;