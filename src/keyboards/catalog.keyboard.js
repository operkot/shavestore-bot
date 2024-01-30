const { Keyboard } = require('grammy')

const WEB_APP_URL = process.env.WEB_APP_URL ?? ''

module.exports = username =>
  new Keyboard()
    .webApp('Каталог', `${WEB_APP_URL}?username=${username}`)
    .resized()
    .persistent()
