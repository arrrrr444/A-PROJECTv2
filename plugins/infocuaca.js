const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
	let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Masukkan yang dicari_', m)
    new Promise((resolve, reject) => {
        axios.get(`http://api-iam.herokuapp.com/api/cuaca?q=` + encodeURIComponent(text))
            .then((res) => {
                        
                const teks = `• *KOTA : ${res.data.result.tempat}*\n• *SUHU : ${res.data.result.suhu}*\n• *KELEMBAPAN : ${res.data.result.kelembapan}*\n• *UDARA : ${res.data.result.udara}*\n• *ANGIN : ${res.data.result.angin}*\n• *CUACA : ${res.data.result.cuaca}*\n• *DESK : ${res.data.result.desk}*`
                conn.reply(m.chat, teks, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^(infocuaca|cuaca)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 1
handler.limit = false

module.exports = handler
