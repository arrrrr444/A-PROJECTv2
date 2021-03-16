let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA')
 let { result } = await res.json()
 let hasil = `*NIH TOD TRAPNIME/WARIA:V NYA*`
 conn.sendFile(m.chat, result, 'result.jpg', hasil, m)
}
handler.command = /^trapnime$/i
handler.group = true
handler.fail = null
handler.limit = true

module.exports = handler
