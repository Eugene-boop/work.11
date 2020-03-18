const calc = () => {
  if (location.pathname === '/index.html' || location.pathname === '/') {
    const prices = {
      'mozaika': {
        1: 1999,
        6: 9900,
        9: 13900,
        12: 19900,
      },
      'schelkovo': {
        1: 2999,
        6: 14990,
        9: 21990,
        12: 24990,
      }
    },
    discount = [
      ['ТЕЛО2019', '30'],
    ]
    document.querySelector('#card_order').addEventListener('input', e => {
      const target = e.target,
        promocode = document.querySelector('#card_order input[name="promocode"]').value,
        clubName = document.querySelector('input[name="club-name"]:checked').value,
        clubMonth =  document.querySelector('input[name="card-type"]:checked').value;

      if (target.matches('#card_check')) return;

      let discountedPrice =  prices[clubName][clubMonth];
      discount.forEach(promo => {
        if ((new RegExp(promo[0], 'i')).test(promocode)) discountedPrice = Math.ceil((discountedPrice * (100 - promo[1])/100) / 10) * 10;
      })
      document.querySelector('#card_order input[name="price"]').value = discountedPrice;
      document.querySelector('#price-total').textContent = discountedPrice;
    });
  }
};

export default calc;