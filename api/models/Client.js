// api/models/Client.js

module.exports = {
  attributes: {
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    validated: { type: 'boolean' },
  },
};
