import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import HeaderWeb from './HeaderWeb';
import Edit from '../images/edit.svg';
import Delete from '../images/trash-2.svg';
import Down from '../images/down-icon.png';
import ContactsContext from '../context/ContactsContext';
import fetch from '../services/fetchApi';

function ContactsWeb() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const { setUserToken } = useContext(ContactsContext);
  // const [theToken, setTheToken] = useState({});
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
  }, []);

  return (
    <div>
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
                data-testid={
                  `user__element-user-table-item-id-${index}`
                }
              >
                { user.id }
              </td>
              <td
                className="text-center"
                data-testid={
                  `user__element-user-table-item-name-${index}`
                }
              >
                { user.name }
              </td>
              <td
                className="text-center"
                data-testid={
                  `user__element-user-table-item-mobile-${index}`
                }
              >
                { user.mobile }
              </td>
              <td
                className="text-center"
                data-testid={
                  `user__element-user-table-item-email-${index}`
                }
              >
                { user.email }
              </td>
              <td
                className="text-center"
                key={ user.id }
                data-testid={
                  `user__element-user-table-item-action-${index}`
                }
              >
                <Link to={ `/update/${user.id}` }>
                  <img src={ Edit } alt="botão que direciona para a página que edita os dados do usuário"/>
                  Editar
                </Link>
                <button type="button">
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
