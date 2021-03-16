let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/nickepep?apikey=apivinz')
  let nickepep = await url.json()
let hasil = `_*➸ ${nickepep.result}*_`

  m.reply(hasil)
}
handler.command = /^nickff$/i
handler.register = true

module.exports = handler
