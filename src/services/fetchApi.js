// const appJson = 'application/json';
// const credentials = btoa('EMAIL:PASSWORD');
// const auth = { "Authorization" : `Basic ${credentials}` };

const fetchPostLogin = async (email, password) => {
  const fecthLogin = fetch('https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await fecthLogin;
  return response;
};

/* const fetchPostLogin = async (email, password) => {
  const fecthLogin = fetch('https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login', {
    method: 'POST',
    headers: {Authentication: 'Bearer Token'},
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await fecthLogin;
  return response;
}; */

export default fetchPostLogin;