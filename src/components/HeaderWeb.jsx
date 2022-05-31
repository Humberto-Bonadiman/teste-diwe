import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from '../images/arrow-left.svg';

function Header({ link }) {
  return (
    <header>
      <Link to={ link }>
        <img src={ LeftSide } alt="botão para voltar para a página anterior"/>
      </Link>
      <p>Voltar</p>
    </header>
  );
};

Header.propTypes = {
  link: PropTypes.string.isRequired
}

export default Header;
