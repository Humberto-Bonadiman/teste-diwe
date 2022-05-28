import React from 'react';
import PropTypes from 'prop-types';
import ContactsContext from './ContactsContext';

function ContactsProvider({ children }) {
  const context = React.useMemo(() => ({}), []);

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