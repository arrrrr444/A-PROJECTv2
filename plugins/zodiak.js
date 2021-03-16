let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [nama, lahir] = text.split `|`

    if (!nama) return conn.reply(m.chat, 'Silahkan masukan namamu', m)
    if (!lahir) return conn.reply(m.chat, 'Masukan Ultahmu dengan benar!\n\nContoh : /zodiak Ardi|11-6-2004', m)

  await m.reply('Searching...')
	axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=${nama}&tgl-bln-thn=${lahir}`).then ((res) => {
	 	let hasil = `*INFO ZODIAK*\n\nLahir : ${res.data.lahir}*\nUltah : ${res.data.ultah}\nUsia : ${res.data.usia}\nZodiak : ${res.data.zodiak}️`

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(zodiak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
