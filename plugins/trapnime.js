let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://waifu.pics/api/nsfw/trap')
  let ardiganz = await url.json()
  let hasil = `_*➸ Link ${ardiganz.url} Kali aja di butuhin*_`
  conn.fakeReply(m.chat, '*_Sabar sedang mengirim hentai..._*','0@s.whatsapp.net','Orang sabar di sayang mantan:)')
conn.sendFile(m.chat, ardiganz.url, 'filename', hasil)
}
handler.command = /^hentai$/i
handler.register = true
handler.limit = true

module.exports = handler
