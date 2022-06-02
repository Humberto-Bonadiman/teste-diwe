import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import ContactsContext from '../context/ContactsContext';
import DeleteBox from './DeleteBox';
import Header from './Header';
import fetch from '../services/fetchApi';
import Delete from '../images/trash-2.svg';
import Mobile from '../images/smartphone.svg';
import Check from '../images/check.svg';

function ContactsMobile() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [show, setShow] = useState(false);
  const { userToken, setUserToken, check, setCheck, setContact } = useContext(ContactsContext);
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
    const dataStorage = JSON.parse(localStorage.getItem('token'));
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

  const alertCreateMessage = (
    <Alert
      data-testid="create-alert-message"
    >
      <img src={Check} alt="imagem de check" /> Contato cadastrado com sucesso!
    </Alert>
  );

  const editUser = async (id) => {
    const result = await fetch.fetchGetContactById(id, userToken.token);
    const data = await result.json();
    setContact(data);
  };

  const deleteAlert = (number) => {
    setIdNumber(number);
    setShow(true);
  };

  return (
    <div>
      { !check && <Header text={ text } link={ link } />}
      { check && alertCreateMessage}
      { show && <DeleteBox
        show={ show }
        setShow={ setShow }
        idNumber={ idNumber }
        token={ userToken.token }
        getAllContacts={ getAllContacts }
      /> }
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
      { contacts.map((user, index) => (
        <div className="card">
          <div className="card-left">
            <p
              data-testid={ `${index}-item-user-name` }
            >{user.name}</p>
            <p
              data-testid={ `${index}-item-user-email` }
            >{user.email}</p>
            <p
              data-testid={ `${index}-item-user-mobile` }
            >{imageMobile}{numberMobile(user.mobile)}</p>
          </div>
          <div data-testid={ `${index}-item-user-buttons` } className="card-right">
          <Link to={ `/update/${user.id}` } onClick={ () => editUser(user.id)}>
              Editar
            </Link>
            <button type="button" onClick={ () => deleteAlert(user.id) }>
              <img src={ Delete } alt="botão para excluir usuário"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsMobile;