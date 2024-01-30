const { Composer } = require('grammy')
const { COMMANDS } = require('../constants/commands.constants')

const composer = new Composer()

composer.command(
  COMMANDS.CONTACTS,
  async ctx => await ctx.reply(ctx.t('contacts'), { parse_mode: 'HTML' })
)

module.exports = composer
