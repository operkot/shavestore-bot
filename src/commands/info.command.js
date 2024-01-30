const { Composer } = require('grammy')
const { COMMANDS } = require('../constants/commands.constants')

const composer = new Composer()

composer.command(
  COMMANDS.INFO,
  async ctx => await ctx.reply(ctx.t('info'), { parse_mode: 'HTML' })
)

module.exports = composer
