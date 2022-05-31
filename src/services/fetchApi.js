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
}

/* export const fetchApiCreateOrder = async (order, token) => {
  const fetchCreateOrder = fetch(`http://${URL}:${PORT}/customer/orders`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      Authorization: token,
    },
    body: JSON.stringify({
      user_id: order.userId,
      seller_id: order.sellerId,
      total_price: order.totalPrice,
      delivery_address: order.deliveryAddress,
      delivery_number: order.deliveryNumber,
      status: order.status,
    }),
  });
  const response = await fetchCreateOrder;
  return response;
}; */

export default {
  fetchPostLogin,
  fetchGetAllContacts,
};