let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.DATABASE._data.users[m.sender]
    if (!text) throw '_yg dicari apa_'
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json= await res.json()
  const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  const ardi =  `➸ *info:* ${json.info}\n\n➸ *link download:* ${json.link_dl}➸ *sinopsis:* ${json.sinopsis}\n\n➸ *judul* ${json.title}`
            
            
			await this.reply(m.chat, 'mengupload .......' ,m)
			await sleep(1000)
            this.sendFile(m.chat,json.thumb, 'image.jpg', ardi, m)
}
handler.command = /^kusonime$/i
handler.register = true

module.exports = handler
