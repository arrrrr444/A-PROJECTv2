let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA')
 let { result } = await res.json()
 let hasil = `*NIH TOD HENTAI NYA*`
 conn.sendFile(m.chat, result, 'result.png', hasil, m)
}
handler.command = /^hentai$/i
handler.group = true
handler.fail = null
handler.limit = true

module.exports = handler
