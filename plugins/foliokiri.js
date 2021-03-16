let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter Text', m)
if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)
let link = 'http://zekais-api.herokuapp.com/foliokiri?text=' + text
conn.sendFile(m.chat, link, 'Ardi Ganz.png', '_Nih tod dah jadi_\n_*@IG:https://bit.ly/3cuEdvz*_', m)
conn.fakeReply(m.chat, '*_Sabar sedang membuat..._*','0@s.whatsapp.net','Tunggu bro:))')
}
handler.command = /^(foliokiri)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null
handler.exp = 0
handler.limit = true
module.exports = handler
