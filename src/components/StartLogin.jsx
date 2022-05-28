import React, { useState } from 'react';
import Computer from '../images/Login.png';
import Header from './Header';

function StartLogin() {
  const [start, setStart] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const MIN_LENGTH = 6;
  const text = 'Login';

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const handleClick = () => null

  const firstVision = (
    <div>
      <img src={ Computer } alt="Imagem com pessoa utilizando o computador"/>
      <p>Bem-vindo! É hora de começar uma nova experiência</p>
      <p>
        Para ter acesso a todas as funcionalidades que podemos oferecer, faça
        login ou crie uma nova conta.
      </p>
      <button type="button" onClick={ () => setStart(false) }>Começar</button>
    </div>
  );

  const secondVision = (
    <div>
      <Header text={ text } />
      <p>Bem-vindo(a)!</p>
      <p>Faça login para acessar nossa plataforma</p>
      <form>
        <label htmlFor="email">
          Email
          <br/>
          <input
            type="text"
            id="email"
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
            placeholder="Digite sua senha"
            className="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <br/>
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
