module.exports = {


  friendlyName: 'Nomans AREA',


  description: 'Display "AREA" page.',


  exits: {

    // success: {
    //   viewTemplatePath: 'pages/area'
    // }

  },

  fn: async function () {

    let client = await Client.create({email: 'Noman', password : 'naiBhai', validated : false}).fetch();

    let coupon = await Coupon.create({type: 'percentage', discount : '50', usageLeft : 100, }).fetch();

    let testRun = await Coupon.addToCollection(client.id, 'cls')
      .members([client.id]);

    // let users = await Client.find().populate('coupon');

    // let clientsWithCoupons = await Client.find({ name:'Noman' }).populate('coupon');


    return this.res.json({resultByNoman: 'OK Noman!'});
    //return this.res.ok();

  }



};
