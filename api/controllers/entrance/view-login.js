module.exports = {


  friendlyName: 'View login',


  description: 'Display "Login" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/login',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },


  fn: async function () {
    //this.res.json({'hello': 'hello'})
    if (this.req.me) {
      throw {redirect: '/'};
    }

    return {};

  }


};
