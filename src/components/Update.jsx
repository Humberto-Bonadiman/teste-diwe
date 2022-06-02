import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import HeaderWeb from './HeaderWeb';
import fetch from '../services/fetchApi';
import ContactsContext from '../context/ContactsContext';

function Update() {
  const { id } = useParams();
  const {contact, setContact, userToken } = useContext(ContactsContext);
  const [isGreaterThan600px, setIsGreaterThan600px] = useState(false);
  const [contactEmail, setEmail] = useState(contact.email);
  const [contactName, setName] = useState(contact.name);
  const [contactMobile, setMobile] = useState(contact.mobile);
  const navigate = useNavigate();
  const text = 'Cadastrar um novo contato';
  const link = '/contacts';

  const handleClick = async () => {
    const result = await fetch.fetchUpdateContactById(
      id,
      userToken.token,
      contactName,
      contactEmail,
      contactMobile
    );
    const OK = 200;
    if (result.status === OK) {
      await result.json();
      setContact({ contactEmail, contactName, contactMobile })
      navigate('/contacts');
    };
  };

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

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setMobile(contact.mobile);
  }, [id, setContact, contact]);

  return (
    <div>
      { !isGreaterThan600px && <Header text={ text } link={ link } /> }
      { isGreaterThan600px && <HeaderWeb link={ link } /> }
      <form>
        { isGreaterThan600px && <p data-testid="registration-text">Cadastre um novo contato</p> }
        <p data-testid="info-text">Preencha as informações para cadastrar um novo contato</p>
        <label htmlFor="name">
          Nome
          <br/>
          <input
            type="text"
            id="name"
            value={ contactName }
            data-testid="name-input-update"
            placeholder="Digite seu name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <br/>
        <label htmlFor="email">
          Email
          <br/>
          <input
            type="text"
            id="email"
            value={ contactEmail }
            data-testid="email-input-update"
            placeholder="Digite seu email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <br/>
        <label htmlFor="mobile">
          Celular
          <br/>
          <input
            type="text"
            id="mobile"
            value={ contactMobile }
            data-testid="mobile-input-update"
            placeholder="Digite seu mobile"
            onChange={ ({ target }) => setMobile(target.value) }
          />
        </label>
        <br/>
        <button
          type="button"
          data-testid="update-submit-btn"
          className="update-submit-btn"
          onClick={ handleClick }
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default Update;