let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Masukan kata', m)
  await m.reply('_Searching..._')
	axios.get(`https://api.zeks.xyz/api/film/2?q=${kata}&apikey=apivinz`).then ((res) => {
	 	let hasil = res.data.result.map(res=>`*➸ Judul: ${res.title}*\n*➸ Link: ${res.url}*\n*➸ Img: ${res.thumb}*`).join('\n\n')

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(film)$/i
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
