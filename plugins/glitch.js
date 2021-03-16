let handler = async (m, { conn, text }) => {
if (!text) throw '_Text nya mana tod?_'
let [atas, bawah] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.zeks.xyz', '/api/gtext', {
 text1: atas,
 text2: bawah,
 theme: 'gtext',
 apikey: 'apivinz'
}), 'error cuk', '_Nih tod dah jadi_\n_*@IG:https://bit.ly/3cuEdvz*_', m)
}
handler.command = /^glitch$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler
