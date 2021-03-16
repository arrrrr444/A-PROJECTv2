const axios = require('axios')
let handler = async function(m, { conn, text }) {
	let user = global.DATABASE._data.users[m.sender]
  const ranquran = await axios.get('https://api.zeks.xyz/api/randomquran')
                const auquran = `${ranquran.data.result.audio}`
               
                await this.reply(m.chat, `    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*: ${ranquran.data.result.keterangan}`, m)
await this.sendFile(m.chat,ranquran.data.result.audio,'quran.mp3',m)

}
handler.command = /^randomquran/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
