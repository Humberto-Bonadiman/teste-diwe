import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Computer from '../images/Login.png';
import Header from './Header';
import fetchPostLogin from '../services/fetchApi';
import '../styles/startLogin.css';

function StartLogin() {
  const [start, setStart] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const MIN_LENGTH = 6;
  const text = 'Login';
  const link = '/';

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await fetchPostLogin(email, password);
    const ERROR = 400;
    if (result.status === ERROR) {
      setError(true);
      setTimeout(() => { setError(false) }, 5000);
    } else {
      const body = await result.json();
      localStorage.setItem('user', JSON.stringify(body));
      navigate('/contacts');
    }
  };

  const firstVision = (
    <div>
      <img
        data-testid="image-login"
        src={ Computer }
        alt="Imagem com pessoa utilizando o computador"
      />
      <p className="welcome-text">Bem-vindo! É hora de começar uma nova experiência</p>
      <p className="before-login">
        Para ter acesso a todas as funcionalidades que podemos oferecer, faça
        login ou crie uma nova conta.
      </p>
      <button
        type="button"
        className="button-start"
        onClick={ () => setStart(false) }
      >
        Começar
      </button>
    </div>
  );

  const alert = (
    <p className="alert">Email ou senha incorretos</p>
  );

  const secondVision = (
    <div>
      <Header text={ text } link={ link } />
      <p className="welcome">Bem-vindo(a)!</p>
      <p className="make-login-text">Faça login para acessar nossa plataforma</p>
      <form>
        <label htmlFor="email">
          Email
          <br/>
          <input
            type="text"
            id="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <br/>
        <label htmlFor="password">
          Senha
          <br/>
          <input
            type="password"
            id="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            className="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <br/>
        { error && alert }
        <button
          type="button"
          data-testid="login-submit-btn"
          className="login-submit-btn"
          onClick={ handleClick }
          disabled={ !(isEmailValid(email) && password.length >= MIN_LENGTH) }
        >
          Entrar
        </button>
      </form>
    </div>
  );

  return (
    <>
      { start && firstVision }
      { !start && secondVision }
    </>
  );
}

export default StartLogin;
