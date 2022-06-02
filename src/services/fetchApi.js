const appJson = 'application/json';

const fetchPostLogin = async (email, password) => {
  const fecthLogin = fetch('https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login', {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await fecthLogin;
  return response;
};

const fetchGetAllContacts = async (token) => {
  const fetchContacts = fetch('https://contacts-api.prd.parceirodaconstrucao.com.br/contacts', {
    method: 'GET',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      'Authorization': `Bearer ${token}`,
    }
  });
  const response = await fetchContacts;
  return response;
};

const fetchGetContactById = async (id, token) => {
  const fetchContacts = fetch(`https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`, {
    method: 'GET',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      'Authorization': `Bearer ${token}`,
    }
  });
  const response = await fetchContacts;
  return response;
};

const fetchCreateContact = async (token, name, email, mobile) => {
  const fetchContacts = fetch('https://contacts-api.prd.parceirodaconstrucao.com.br/contacts', {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      email,
      mobile,
    }),
  });
  const response = await fetchContacts;
  return response;
};

const fetchUpdateContactById = async (id, token, name, email, mobile) => {
  const fetchContacts = fetch(`https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`, {
    method: 'PUT',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      email,
      mobile,
    }),
  });
  const response = await fetchContacts;
  return response;
};

const fetchDeleteContactById = async (idNumber, token) => {
  const fetchContacts = fetch(`https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${idNumber}`, {
    method: 'DELETE',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      'Authorization': `Bearer ${token}`,
    }
  });
  const response = await fetchContacts;
  return response;
};

export default {
  fetchPostLogin,
  fetchGetAllContacts,
  fetchGetContactById,
  fetchCreateContact,
  fetchUpdateContactById,
  fetchDeleteContactById,
};