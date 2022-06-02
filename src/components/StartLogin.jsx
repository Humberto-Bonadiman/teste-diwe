import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Computer from '../images/Login.png';
import Header from './Header';
import fetch from '../services/fetchApi';
import '../styles/startLogin.css';
import ContactsContext from '../context/ContactsContext';

function StartLogin() {
  const [start, setStart] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setUserToken } = useContext(ContactsContext);
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
    const result = await fetch.fetchPostLogin(email, password);
    const ERROR = 400;
    const OK = 200;
    if (result.status === ERROR) {
      setError(true);
      setTimeout(() => { setError(false) }, 5000);
    }
    if (result.status === OK) {
      const body = await result.json();
      const { token, type } = body;
      setUserToken({ token, type });
      localStorage.setItem('token', JSON.stringify({ token, type }));
      navigate('/contacts');
    }
  };

  const firstVision = (
    <div className="container-mobile-first">
      <img
        data-testid="image-login"
        src={Computer}
        className="image-login"
        alt="Imagem com pessoa utilizando o computador"
      />
      <div className="welcome-box">
        <h2 className="welcome-text">Bem-vindo! É hora de começar uma nova experiência</h2>
        <p className="before-login">
          Para ter acesso a todas as funcionalidades que podemos oferecer, faça
          login ou crie uma nova conta.
        </p>
        <button
          type="button"
          className="button-start"
          onClick={() => setStart(false)}
        >
          Começar
        </button>
      </div>
    </div>
  );

  const alert = (
    <p className="alert">Email ou senha incorretos</p>
  );

  const secondVision = (
    <div div className="container-mobile">
      <Header text={text} link={link} />
      <div className="box-mobile">
        <div className="box-text">
          <p className="welcome-mobile">Bem-vindo(a)!</p>
          <p className="make-login-text">Faça login para acessar nossa plataforma</p>
        </div>
        <form className="form-login">
          <div className="div-inputs">
            <label className="label-email" htmlFor="email">
              Email
              <br />
              <input
                type="text"
                id="email"
                data-testid="email-input"
                placeholder="Digite seu email"
                className="email-input-mobile"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className="label-password" htmlFor="password">
              Senha
              <br />
              <input
                type="password"
                id="password"
                data-testid="password-input"
                placeholder="Digite sua senha"
                className="password-input-mobile"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            {error && alert}
          </div>
          <button
            type="button"
            data-testid="login-submit-btn"
            className="login-submit-btn-mobile"
            onClick={handleClick}
            disabled={!(isEmailValid(email) && password.length >= MIN_LENGTH)}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {start && firstVision}
      {!start && secondVision}
    </>
  );
}

export default StartLogin;
