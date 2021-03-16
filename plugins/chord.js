const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
        let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Masukkan yang dicari_', m)
    new Promise((resolve, reject) => {
        axios.get(`https://ardhixsquerpants.herokuapp.com/api/chord?q=` + encodeURIComponent(text))
            .then((res) => {
                      
                const ardi = `*• Chord Lagu : ${text}*\n ${res.data.result}`
                conn.reply(m.chat, ardi, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^chord$/i
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
