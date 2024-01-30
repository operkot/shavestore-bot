const { Composer } = require('grammy')
const { COMMANDS } = require('../constants/commands.constants')
const catalogKeyboard = require('../keyboards/catalog.keyboard')

const composer = new Composer()

composer.command(COMMANDS.START, async ctx => {
  const { first_name, username } = ctx.message.chat
  await ctx.reply(ctx.t('start', { first_name }), {
    parse_mode: 'HTML',
    reply_markup: catalogKeyboard(username),
  })
})

module.exports = composer
