require('dotenv').config()
const ngrok = require('ngrok')
const nodemon = require('nodemon')

ngrok.connect({ authtoken: process.env.NGROK_TOKEN, addr: 5173 }).then(url => {
  nodemon({
    script: './src/app.js',
    ext: 'js json',
    verbose: true,
    exec: `set WEB_APP_URL=${url}&&node`,
  })
})
