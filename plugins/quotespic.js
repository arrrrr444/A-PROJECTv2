let handler = async(m, { conn, text }) => {

    let link = 'http://api.lolhuman.xyz/api/random/quotesimage?apikey=b5ca61b0c4c12d316ab1fce8'

    conn.sendFile(m.chat, link, 'bokehtext.png', '➸ *NIH TOD*', m)
    conn.fakeReply(m.chat, '*_Sedang mengirim quotes pic_*','0@s.whatsapp.net',
'cieee nungguin ya...:))')
}
handler.command = /^quotespic$/i
handler.register = true

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
