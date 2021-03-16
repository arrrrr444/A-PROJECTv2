let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn ,usedPrefix: _p }) => {
	let user = global.DATABASE._data.users[m.sender]
//  if (user.registered === false) throw `malesss....lu siapa?`
      let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let link = 'https://i.imgur.com/5hJCG2f.jpg'
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
➣ ❏ Lib: Baileys
➣ ❏ Prefix: *「 ${_p} 」*
┏━━━━━━━━━━━━━━━━━━━━┓
┃➸ *NAMA : ${name}!👋*
┃➸ *OWNER : 6288294052009*
┃➸ *++ : info del owner*
┃➸ *https://tinyurl.com/ycv6dozc*
┃➸ *ɑᵣDₕᵢ-Bₒₜ.in*
│────────────────────
┃➸ *Tanggal:* _${week},${date}_
┃➸ *Waktu:* _${time}_
┃➸ *Uptime:* _${uptime}_ _*Muptime:* _${muptime}_
┃➸ *XP:* _${exp}_
┃➸ *Limit:* _${limit}_
┃➸ *Total User:* _${rtotalreg}_ of _${totalreg}_
┃➸ *NOTE:* _BERI BOT JEDAL 5 DETIK_
┗━━━━━━━━━━━━━━━━━━━
      ❍━━━━━━━━━━━━━❍
         *「-•4尺り1-乃のｲ•-」*
      ❍━━━━━━━━━━━━━❍
╔━❉ *《MAKER》* ❉━━
╠➭ *${_p}stiker* <TagGambar>
╠➭ *${_p}sticker <url>*
╠➭ *${_p}toimg* (TagStiker)
╠➭ *${_p}burnpaper* [Text]
╠➭ *${_p}glitch* [Text1|Text2]
╠➭ *${_p}blackpink* [Text]
╠➭ *${_p}phtext* [Text1|Text2]
╠➭ *${_p}jokerlogo* [Text]
╠➭ *${_p}glow* [Text]
╠➭ *${_p}thunder* [Text]
╠➭ *${_p}magernulis* [Text]
╠➭ *${_p}magernulis2* [Text]
╠➭ *${_p}ttp* [teks]
╠➭ *${_p}attp* [teks]
╠➭ *${_p}hilih* [teks]
╠➭ *${_p}halah* [Text]
╠➭ *${_p}huluh* [Text]
╠➭ *${_p}heleh* [Text]
╠➭ *${_p}holoh* [Text]
╠➭ *${_p}tahta* [teks]
╠➭ *${_p}nulis* [teks]
╠➭ *${_p}qr* [teks]
╠➭ *${_p}readmore* [teks|teks]
╠➭ *${_p}style* [text]
╠➭ *${_p}tts* <lang/id> [teks]
╠➭ *${_p}textpro <effect> [text]|text2]
║
╠━❉ *《RANDOM》* ❉━
╠➭ *${_p}waifu*
╠➭ *${_p}nekonime*
╠➭ *${_p}neko*
╠➭ *${_p}hentai*
╠➭ *${_p}pussy*
╠➭ *${_p}trapnime*
╠➭ *${_p}husbu*
╠➭ *${_p}husbu2*
╠➭ *${_p}loli*
╠➭ *${_p}shota*
╠➭ *${_p}kpop*
║
╠━❉ *《GABUTZ:V》* ❉━
╠➭ *apakah* [Text]?
╠➭ *kapan* [Text]?
╠➭ *kapankah* [Text]?
╠➭ *${_p}apakah <pertanyaan>*
╠➭ *${_p}kapan <pertanyaan>*
╠➭ *${_p}kapankah <pertanyaan>*
╠➭ *${_p}brainly* <soal>
╠➭ *${_p}run* (Limit)
╠➭ *${_p}bucin*
╠➭ *${_p}simi*
╠➭ *${_p}afk* <alasan>
║
╠━━❉ *《OTHER》* ❉━━
╠➭ *${_p}owner*
╠➭ *${_p}igstalk* <username>
╠➭ *${_p}donasi*
╠➭ *${_p}grouplist*
╠➭ *${_p}ping*
╠➭ *${_p}info*
╠➭ *${_p}profile* <@user>
╠➭ *${_p}fetch* <url>
╠➭ *${_p}get* <url>
╠➭ *${_p}google* <pencarian>
╠➭ *${_p}googlef* <pencarian>
╠➭ *${_p}ss* <url>
╠➭ *${_p}ssf* <url>
╠➭ *${_p}base64*
╠➭ *${_p}infocuaca* [Kota]
╠➭ *${_p}infogempa*
╠➭ *${_p}calc* <expression>
╠➭ *${_p}mention* [Text]
╠➭ *${_p}del* <Tag>
║
╠━❉ *《DOWNLOAD》* ❉━━
╠➭ *${_p}ig* <url>
╠➭ *${_p}igstory* <username>
╠➭ *${_p}play* <pencarian> (Limit)
╠➭ *${_p}ytmp3* <url> (Limit)
╠➭ *${_p}ytmp4* <url> (Limit)
╠➭ *${_p}yt* <url>  (Limit)
║
╠━❉ *《EXP & LIMIT》* ❉━
╠➭ *${_p}buy* <jumlah limit>
╠➭ *${_p}buyall*
╠➭ *${_p}daily*
╠➭ *${_p}claim*
╠➭ *${_p}leaderboard* [jumlah user]
╠➭ *${_p}pay* @user <amount>
║
╠━━❉  *「MEMBER」*  ❉━━
╠➭ *${_p}linkgroup*
╠➭ *${_p}listonline*
╠➭ *${_p}hidetag* [Teks] (Limit)
║
╠━━━❉ *「ADMIN」* ❉━━━━
╠➭ *${_p}enable* <option>
╠➭ *${_p}disable* <option>
╠➭ *${_p}add* [Nomor]
╠➭ *${_p}demote* {@user}
╠➭ *${_p}promote* {@user}
╠➭ *${_p}kick* {@user}
║
╠━❉ *《OWNER》* ❉━
╠➭ *${_p}addprems* <Tag>
╠➭ *${_p}banchat*
╠➭ *${_p}unbanchat*
╠➭ *${_p}bc* [Text]
╠➭ *${_p}bcgc* [Text]
╠➭ *${_p}bcbot* [Text]
╠➭ *${_p}getcode*
╠➭ *${_p}jadibot* (Limit)
╠➭ *${_p}stopjb*
╠➭ *${_p}update*
╠➭ *${_p}reset*
╠➭ *${_p}paylimit* @user <amount>
╠➭ *${_p}deletechat*
╠➭ *${_p}deletechat group*
╠➭ *${_p}mutechat*
╠➭ *${_p}mutechat group*
╠➭ *${_p}oadd* [Nomor]
╠➭ *${_p}opromote* {@user}
╠➭ *${_p}odemote* {@user}
╠➭ *${_p}okick* {@user}
╠➭ *${_p}ohidetag* [Text]
╠➭ *${_p}setbye* [Text]
╠➭ *${_p}setmenu* [Text]
╠➭ *${_p}setmenubefore* [Text]
╠➭ *${_p}setwelcome* [Text]
╰━━━━━━━━━━━━━━━━━━━
🔰 -----[ *POWERED BY ARDHI* ]----- 🔰
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat,link,'.jpg',str, m, false, { contextInfo: { mentionedJid }})
conn.fakeReply(m.chat, '_*Loading...*_','0@s.whatsapp.net',
'ARDHI BOTz VERIFIED')

}
//handler.command = /^(menu|help)$/i
handler.owner = false
handler.register = true

handler.fail = null
handler.exp = 3

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
