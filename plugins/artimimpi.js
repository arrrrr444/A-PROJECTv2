const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
        let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, 'Masukkan yang dicari', m)
    new Promise((resolve, reject) => {
        axios.get(`https://videfikri.com/api/primbon/artimimpi/?mimpi=` + encodeURIComponent(text))
            .then((res) => {
                        // console.log(res.data.result.result)
                const teks = `*• Arti Mimpi ${text}:* _${res.data.result.artimimpi}_`
                conn.reply(m.chat, teks, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^artimimpi$/i
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
