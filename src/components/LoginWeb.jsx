import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import fetch from '../services/fetchApi';
import Computer from '../images/Login.png';
import ContactsContext from '../context/ContactsContext';
import '../styles/loginWeb.css';

function LoginWeb() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setUserToken } = useContext(ContactsContext);
  const navigate = useNavigate();
  const MIN_LENGTH = 6;

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

  const alert = (
    <p className="alert">Email ou senha incorretos</p>
  );

  return (
    <div className="container">
      <div className="left-side">
        <div className="box">
          <img
            data-testid="image-login"
            src={ Computer }
            className="image-login"
            alt="Imagem com pessoa utilizando o computador"
          />
        </div>
      </div>
      <div className="right-side">
        <div className="box">
          <h2 className="welcome">Bem-vindo(a)!</h2>
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
                className="email-input"
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
              Fazer login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginWeb;