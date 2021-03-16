let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA')
 let { result } = await res.json()
 let hasil = `*NIH TOD KPOP NYA*`
 conn.sendFile(m.chat, result, 'result.jpg', hasil, m)
}
handler.command = /^kpop$/i
handler.group = true
handler.fail = null
handler.limit = true

module.exports = handler
