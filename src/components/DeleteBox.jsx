import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import fetch from '../services/fetchApi';

function DeleteBox({ show, setShow, idNumber, token, getAllContacts }) {

  const handleClose = () => setShow(false);

  const deleteAndClose = async () => {
    const result = await fetch.fetchDeleteContactById(idNumber, token);
    await JSON.parse(JSON.stringify(result));
    getAllContacts(token);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tem certeza que deseja excluir este contato?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Após excluir, não será possivel recuperar o contato.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={deleteAndClose}>
          Excluir contato
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Não excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteBox.propTypes = {
  token: PropTypes.string.isRequired,
  idNumber: PropTypes.number.isRequired,
  getAllContacts: PropTypes.func.isRequired,
  setShow: PropTypes.func,
  show: PropTypes.bool,
}

DeleteBox.defaultProps = {
  setShow: () => {},
  show: false,
};

export default DeleteBox;
