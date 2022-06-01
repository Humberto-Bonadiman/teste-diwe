import React, { useState, useEffect } from 'react';
import ContactsWeb from '../components/ContactsWeb';
import ContactsMobile from '../components/ContactsMobile';

function Contacts() {
  const [isGreaterThan600px, setIsGreaterThan600px] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setIsGreaterThan600px(true);
      } else {
        setIsGreaterThan600px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      { !isGreaterThan600px && <ContactsMobile /> }
      { isGreaterThan600px && <ContactsWeb /> }
    </div>
  );
};

export default Contacts;
