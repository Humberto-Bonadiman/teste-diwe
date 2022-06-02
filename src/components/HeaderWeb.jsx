import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from '../images/arrow-left.svg';

function Header({ link }) {
  const onClick = () => {
    if (link === '/') {
      localStorage.removeItem('token')
    }
  };

  return (
    <header>
      <Link to={ link } onClick={ () => onClick() }>
        <img
          data-testid="left-side-image"
          src={ LeftSide }
          alt="botão para voltar para a página anterior"
        />
      </Link>
      <p
        data-testid="text-header"
      >Voltar</p>
    </header>
  );
};

Header.propTypes = {
  link: PropTypes.string.isRequired
}

export default Header;
