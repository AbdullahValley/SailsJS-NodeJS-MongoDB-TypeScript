module.exports = {


  friendlyName: 'Nomans AREA',


  description: 'Display "AREA" page.',


  exits: {

    // success: {
    //   viewTemplatePath: 'pages/area'
    // }

  },

  fn: async function () {
    return this.res.json({k: 'Hi Noman!'});
  }



};
