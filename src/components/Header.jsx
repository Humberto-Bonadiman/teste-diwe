import PropTypes from "prop-types"
import React from 'react';
import LeftSide from '../images/chevron-left.svg';

function Header({ text }) {
  return (
    <header>
      <img src={ LeftSide } alt="botão para voltar para a página anterior"/>
      <p>{ text }</p>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header;
