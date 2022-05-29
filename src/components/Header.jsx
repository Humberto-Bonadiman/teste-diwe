import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from '../images/chevron-left.svg';

function Header({ text, link }) {
  return (
    <header>
      <Link to={ link }>
        <img src={ LeftSide } alt="botão para voltar para a página anterior"/>
      </Link>
      <p>{ text }</p>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Header;
