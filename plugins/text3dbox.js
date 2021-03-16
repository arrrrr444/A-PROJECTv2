let handler = async (m, { conn, text }) => {
if (!text) throw '_Text nya mana tod?_'
let [kiri] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.zeks.xyz', '/api/text3dbox', {
 text: kiri,
 theme: 'text3dbox',
 apikey: 'apivinz'
}), 'error cuk', '_Nih tod dah jadi_\n_*@IG:https://bit.ly/3cuEdvz*_', m)
}
handler.command = /^3dbox$/i
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
handler.limit = true

module.exports = handler
