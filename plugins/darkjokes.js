let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
  let darkjokes = await url.json()
let hasil = `_*➸ Tunggu..*_`

  m.reply(hasil)
  conn.sendFile(m.chat, darkjokes.result, 'filename', '_*Nih tod Dark Jokes*_')
}
handler.command = /^darkjokes$/i
handler.register = true

module.exports = handler
