import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import ContactsContext from '../context/ContactsContext';
import Header from './Header';
import fetch from '../services/fetchApi';
import Delete from '../images/trash-2.svg';
import Mobile from '../images/smartphone.svg';
import Check from '../images/check.svg';

function ContactsMobile() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const { setUserToken, check, setCheck } = useContext(ContactsContext);
  const text = 'Listagem de usuários';
  const link = '/';

  const navigateToCreateUser = () => {
    navigate('/create');
  };

  const getAllContacts = async (token) => {
    const response = await fetch.fetchGetAllContacts(token);
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('user'));
    if (dataStorage) {
      const { token, type } = dataStorage;
      setUserToken({ token, type });
      getAllContacts(token);
    };
    setTimeout(() => { setCheck(false) }, 5000);
  }, []);

  const numberContacs = contacts.length;

  const numberMobile = (mobile) => {
    const ddd = mobile.substring(0, 2);
    const firstPart = mobile.substring(2,7);
    const secondPart = mobile.substring(7);
    const joinNumbers = `(${ddd}) ${firstPart}-${secondPart}`;
    return joinNumbers;
  };

  const imageMobile = (
    <img src={Mobile} alt="pequeno smartphone" />
  );

  const checkImage = (
    <img src={Check} alt="imagem de check" />
  )

  const deleteAlert = () => true;

  return (
    <div>
      { !check && <Header text={ text } link={ link } />}
      { check && <Alert>{checkImage} Contato cadastrado com sucesso!</Alert>}
      <button
        type="button"
        data-testid="redirect-button"
        className="redirect-button"
        onClick={ navigateToCreateUser }
      >
        Cadastrar contato
      </button>
      <p>{`Total: ${numberContacs} usuários`}</p>
      <Link to='/contacts'>Ver todos</Link>
      { contacts.map((contact, index) => (
        <div className="card">
          <div className="card-left">
            <p
              data-testid={ `${index}-item-user-name` }
            >{contact.name}</p>
            <p
              data-testid={ `${index}-item-user-email` }
            >{contact.email}</p>
            <p
              data-testid={ `${index}-item-user-mobile` }
            >{imageMobile}{numberMobile(contact.mobile)}</p>
          </div>
          <div data-testid={ `${index}-item-user-buttons` } className="card-right">
            <Link to={ `/update/${contact.id}` }>
              Editar
            </Link>
            <button type="button" onClick={ deleteAlert }>
              <img src={ Delete } alt="botão para excluir usuário"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsMobile;