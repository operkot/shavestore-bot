const { formatRubPrice } = require('./currecy.utils')

const orderItemTemplate = ({ title, quantity, price }) =>
  `${quantity} x ${title} - <b>${formatRubPrice(price * quantity)}</b>\n`

const createOrderItemsString = order =>
  order.reduce((html, item) => html + orderItemTemplate(item), '')

module.exports = { createOrderItemsString }
