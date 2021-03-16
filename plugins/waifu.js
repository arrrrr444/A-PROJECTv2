let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/waifu')
 let { desc, image, name, source } = await res.json()
 let hasil = `*DESC :* ${desc}\n*NAMA :* ${name}\n*URL :* ${source}`
 conn.sendFile(m.chat, image, 'image.png', hasil, m)
}
handler.command = /^waifu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
