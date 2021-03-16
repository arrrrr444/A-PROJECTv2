const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
        let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Masukkan yang dicari_', m)
    new Promise((resolve, reject) => {
        axios.get(`https://mnazria.herokuapp.com/api/kbbi?search=` + encodeURIComponent(text))
            .then((res) => {
                        // console.log(res.data.result.nabi)
                const teks = `• *Menurut KBBI :* ${res.data.result}`
                conn.reply(m.chat, teks, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^kbbi$/i
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
