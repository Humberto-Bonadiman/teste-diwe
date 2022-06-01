import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import HeaderWeb from './HeaderWeb';
import fetch from '../services/fetchApi';

function Create() {
  const [isGreaterThan600px, setIsGreaterThan600px] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();
  const text = 'Cadastrar um novo contato';
  const link = '/contacts';

  const handleClick = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const result = await fetch.fetchCreateContact(token, name, email, mobile);
    const OK = 200;
    if (result.status === OK) {
      await result.json();
      navigate('/contacts');
    }
  }

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
            data-testid="name-input-create"
            placeholder="Digite seu name"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <br/>
        <label htmlFor="email">
          Email
          <br/>
          <input
            type="text"
            id="email"
            data-testid="email-input-create"
            placeholder="Digite seu email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <br/>
        <label htmlFor="mobile">
          Celular
          <br/>
          <input
            type="text"
            id="mobile"
            data-testid="mobile-input"
            placeholder="Digite seu mobile"
            onChange={ (e) => setMobile(e.target.value) }
          />
        </label>
        <br/>
        <button
          type="button"
          data-testid="login-submit-btn"
          className="login-submit-btn"
          onClick={ handleClick }
        >
          Fazer login
        </button>
      </form>
    </div>
  );
};

export default Create;