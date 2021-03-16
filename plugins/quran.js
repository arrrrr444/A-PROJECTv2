let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.DATABASE._data.users[m.sender]
  if (!text) throw 'masukkan nomor surah contoh #quran 2?'
  let res = await fetch(global.API('vinz', '/api/quran', { no: text }, 'apikey'))
  let { surah, asma, no, type, ket, audio, jumlah_ayat, ayat } = await res.json()
  let surahq = `*${surah}*`
						for (let i = 0; i < ayat.length; i++) {
						 surahq +=  `\n➸ *Ayat*: ${ayat[i].number}\n➸ *Surah*: \n${ayat[i].text}\n➸ *Arti*: ${ayat[i].translation_id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=`
			} 
  await this.reply(m.chat, `=> Surah : ${surah}\n=> No : ${no}\n=> Asma : ${asma}\n=> Diturunkan di : ${type}\n=> Keterangan : ${ket}`, m)
  await this.reply(m.chat, surahq,m)
  await this.sendFile(m.chat, audio, 'audio.mp3',m)
  

}
handler.command = /^quran$/i
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
