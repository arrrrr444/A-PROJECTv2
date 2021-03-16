const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
        let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Masukkan yang dicari_', m)
    new Promise((resolve, reject) => {
        axios.get(`https://ardi30.herokuapp.com/api/v1/lirik?l=` + encodeURIComponent(text))
            .then((res) => {
                      
                const ardi = `*• Lirik Lagu :* ${res.data.data}`
                conn.reply(m.chat, ardi, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^lirik$/i
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
