require('dotenv').config()
const { Bot, GrammyError, HttpError } = require('grammy')
const { I18n } = require('@grammyjs/i18n')
const { COMMANDS } = require('./constants/commands.constants')
const { EVENTS } = require('./constants/events.constants')

const { TG_BOT_TOKEN } = process.env
const bot = new Bot(TG_BOT_TOKEN)
const i18n = new I18n({
  defaultLocale: 'ru',
  directory: 'src/locales',
})

// Config bot commands menu
bot.api.setMyCommands([
  { command: COMMANDS.START, description: 'Начало работы с ботом' },
  { command: COMMANDS.INFO, description: 'Информация о доставке и оплате' },
  { command: COMMANDS.CONTACTS, description: 'Наши контакты' },
])

// Middlewares
bot.use(i18n)

// Commands handlers
bot.command(COMMANDS.START, require('./commands/start.command'))
bot.command(COMMANDS.INFO, require('./commands/info.command'))
bot.command(COMMANDS.CONTACTS, require('./commands/contacts.command'))

// Events handlers
bot.on(EVENTS.WEBAPP, require('./handlers/webapp.handler'))

// Error handling
bot.catch(err => {
  const ctx = err.ctx
  console.error(`Error while handling update ${ctx.update.update_id}:`)
  const e = err.error
  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description)
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e)
  } else {
    console.error('Unknown error:', e)
  }
})

// Bot start
bot.start()
