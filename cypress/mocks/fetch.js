const contactsList = require('./contactsList');

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === `https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/1`)
      return Promise.resolve(contactsList[0]);
    return Promise.resolve(contactsList);
  },
});

module.exports = fetch;