let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata, lang] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Masukan kata', m)
    if (!lang) return conn.reply(m.chat, 'Masukan kode negara', m)
  await m.reply('_Searching..._')
	axios.get(`http://zekais-api.herokuapp.com/translate?text=${kata}&lang=${lang}`).then ((res) => {
	 	let hasil = `*➸ Translate: ${res.data.text}*\n_➸ Negara: ${res.data.lang}_\n*➸ Hasil: ${res.data.result}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(translate)$/i
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
