const { Composer } = require('grammy')
const { EVENTS } = require('../constants/events.constants')
const { formatRubPrice } = require('../utils/currecy.utils')
const { createOrderItemsString } = require('../utils/order.utils')

const composer = new Composer()

composer.on(EVENTS.WEBAPP, async ctx => {
  const data = JSON.parse(ctx.message.web_app_data.data)
  const orderItems = createOrderItemsString(data.items)
  const orderTotal = formatRubPrice(data.total)

  await ctx.reply(
    ctx.t('order-success', { order: orderItems, total: orderTotal }),
    { parse_mode: 'HTML' }
  )
})

module.exports = composer
