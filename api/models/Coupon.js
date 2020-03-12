// api/models/Coupon.js

module.exports = {
  attributes: {
    type: { type: 'string', required: true },
    discount: { type: 'string', required: true },
    usageLeft: { type: 'number' },
    cl:{
      collection:'client'
    }
  },
};
