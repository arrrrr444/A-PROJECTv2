let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Masukan kata', m)
  await m.reply('_Searching..._')
	axios.get(`http://zekais-api.herokuapp.com/yts?query=${kata}`).then ((res) => {
	 	let hasil = res.data.result.map(res=>`*➸ Judul: ${res.title}*\n*➸ Channel: ${res.channel}*\n*➸ Durasi: ${res.durasi}*\n*➸ Link: ${res.url}*`).join('\n\n')

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(ytsearch)$/i
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
