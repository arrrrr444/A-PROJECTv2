let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://mhankbarbar.herokuapp.com/api/pussy')
 let { result } = await res.json()
 let hasil = `*Cie Mau Coli Ya?!!*`
 conn.sendFile(m.chat, result, 'result.jpg', hasil, m)
}
handler.command = /^pussy$/i
handler.group = true
handler.fail = null
handler.limit = true

module.exports = handler
