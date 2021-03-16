let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi', { kata: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
  else throw json
}
handler.help = ['simi [Teks]']
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i
handler.register = true

module.exports = handler

