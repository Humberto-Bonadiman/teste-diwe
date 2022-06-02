import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import HeaderWeb from './HeaderWeb';
import DeleteBox from './DeleteBox';
import Edit from '../images/edit.svg';
import Delete from '../images/trash-2.svg';
import Down from '../images/down-icon.png';
import ContactsContext from '../context/ContactsContext';
import fetch from '../services/fetchApi';

function ContactsWeb() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const { userToken, setUserToken, setCheck, setContact } = useContext(ContactsContext);
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
      { show && <DeleteBox
        show={ show }
        setShow={ setShow }
        idNumber={ idNumber }
        token={ userToken.token }
        getAllContacts={ getAllContacts }
      /> }
      <HeaderWeb link={ link } />
      <h3>Listagem de contatos</h3>
      <button
        type="button"
        data-testid="redirect-button"
        className="redirect-button"
        onClick={ navigateToCreateUser }
      >
        Adicionar novo contato
      </button>
      <table>
        <thead>
          <tr className="text-center">
            <th>
              <span>#</span>
              <button type="button">
                <img src={ Down } alt="botão que ordena pelo id do usuário"/>
              </button>
            </th>
            <th>
              <span>Nome</span>
              <button type="button">
                <img src={ Down } alt="botão que ordena pelo nome do usuário"/>
              </button>
            </th>
            <th>
              <span>Celular</span>
              <button type="button">
                <img src={ Down } alt="botão que ordena pelo número de celular do usuário"/>
              </button>
            </th>
            <th>
              <span>Email</span>
              <button type="button">
                <img src={ Down } alt="botão que ordena pelo email do usuário"/>
              </button>
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { contacts.length ? contacts.map((user, index) => (
            <tr key={ user.id }>
              <td
                className="text-center"
                data-testid={ `${index}-item-user-id` }
              >
                { user.id }
              </td>
              <td
                className="text-center"
                data-testid={ `${index}-item-user-name` }
              >
                { user.name }
              </td>
              <td
                className="text-center"
                data-testid={ `${index}-item-user-mobile` }
              >
                { user.mobile }
              </td>
              <td
                className="text-center"
                data-testid={ `${index}-item-user-email` }
              >
                { user.email }
              </td>
              <td
                className="text-center"
                key={ user.id }
                data-testid={ `${index}-item-user-buttons` }
              >
                <Link to={ `/update/${user.id}` } onClick={ () => editUser(user.id)}>
                  <img src={ Edit } alt="botão que direciona para a página que edita os dados do usuário"/>
                  Editar
                </Link>
                <button type="button" onClick={ () => deleteAlert(user.id) }>
                  <img src={ Delete } alt="botão para excluir usuário"/>
                  Excluir
                </button>
              </td>
            </tr>
          )) : <p>Nenhum contato cadastrado</p> }
        </tbody>
      </table>
    </div>
  );
};

export default ContactsWeb;
