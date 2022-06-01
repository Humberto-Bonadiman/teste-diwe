import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from '../images/chevron-left.svg';

function Header({ text, link }) {
  return (
    <header>
      <Link to={ link } onClick={ () => localStorage.removeItem('user') }>
        <img
          data-testid="left-side-image"
          src={ LeftSide }
          alt="botão para voltar para a página anterior"
        />
      </Link>
      <p
        data-testid="text-header"
      >{ text }</p>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Header;
