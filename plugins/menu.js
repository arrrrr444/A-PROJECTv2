let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
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
    let tags = {
      'ardi': 'Ardi Ganz',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
*┏◈「 ${conn.user.name} 」◈┓*
▶  _*Hai, %name!👋*_  ◀
*┗◈「 ɑ-ₚᵣₒⱼₑcₜ.in 」◈┛*
┏━━━━━━━━━━━━━━━━━━➤
┣➣ *XP:* _%exp_
┣➣ *Limit:* _%limit_
┣➣ *Tanggal:* _%week, %date_
┣➣ *Jam:* _%time_
┣➣ *Uptime:* _%uptime (%muptime)_
┣➣ *Database:* _%rtotalreg of %totalreg_
┣➣ *Youtube:* _%github_
┗➤
%readmore

╔━❉ *《 MAKER 》* ❉━━
╠➥ *${_p}stiker*
╠➥ *${_p}attp <teks>*
╠➥ *${_p}sticker <url>*
╠➥ *${_p}3d [Text]*
╠➥ *${_p}3dbox [Text]*
╠➥ *${_p}goldyt [Text]*
╠➥ *${_p}silveryt [Text]*
╠➥ *${_p}comunis [linkgmbr]*
╠➥ *${_p}sandw [Text]*
╠➥ *${_p}logoff [Text]*
╠➥ *${_p}naruto [Text]*
╠➥ *${_p}coffee [Text]*
╠➥ *${_p}coffee2 [Text]*
╠➥ *${_p}mugflow [Text]*
╠➥ *${_p}burnpaper [Text]*
╠➥ *${_p}shadow [Text]*
╠➥ *${_p}glowneon [Text]*
╠➥ *${_p}firework [Text]*
╠➥ *${_p}ahserti [Text]*
╠➥ *${_p}ffserti [Text]*
╠➥ *${_p}mlserti [Text]*
╠➥ *${_p}pubgserti [Text]*
╠➥ *${_p}hekerserti [Text]*
╠➥ *${_p}blackpink [Text]*
╠➥ *${_p}phlogo [Text1|Text2]*
╠➥ *${_p}glitch [Text1|Text2]*
╠➥ *${_p}foliokanan [Teks]*
╠➥ *${_p}foliokiri [Teks]*
╠➥ *${_p}nulis [Teks]*
╠➥ *${_p}magernulis [Teks]*
╠➥ *${_p}magernulis2 [Teks]*
╠➥ *${_p}toimg (TagStiker)*
╠➥ *${_p}ttp [Teks]*
╠➥ *${_p}customtahta [t/t/t]*
╠➥ *${_p}tahta [Teks] (Limit)*
╠➥ *${_p}tahta2 [Teks]*
╠➥ *${_p}qr [Teks]*
╠➥ *${_p}readmore [Teks|Teks]*
╠➥ *${_p}style [Text]*
╠➥ *${_p}textpro <effect> [text]|text2]*
╠➥ *${_p}tts <lang> [Teks]*
║
╠━❉ *《 RANDOM 》* ❉━
╠➥ *${_p}hentai*
╠➥ *${_p}husbu*
╠➥ *${_p}loli*
╠➥ *${_p}pussy*
╠➥ *${_p}trapnime*
╠➥ *${_p}kpop*
╠➥ *${_p}waifu*
╠➥ *${_p}quotespic*
╠➥ *${_p}darkjokes*
║
╠━❉ *《 EXP&LIMIT 》* ❉━
╠➥ *${_p}buy <jumlah limit>*
╠➥ *${_p}claim*
╠➥ *${_p}leaderboard [jumlah user]*
╠➥ *${_p}pay @user <amount>*
╠➥ *${_p}paylimit @user <amount>*
║
╠━❉ *《 GABUTz:V 》* ❉━
╠➥ *apakah <teks>?*
╠➥ *kapankah <text>?*
╠➥ *${_p}apakah <pertanyaan>*
╠➥ *${_p}kapankah <pertanyaan>*
╠➥ *${_p}afk [alasan]*
╠➥ *${_p}bucin*
╠➥ *${_p}katacinta*
╠➥ *${_p}cerpen*
╠➥ *${_p}cersex*
╠➥ *${_p}simi [Teks]*
╠➥ *${_p}brainly <soal>*
╠➥ *${_p}halah <teks>*
╠➥ *${_p}hilih <teks>*
╠➥ *${_p}huluh <teks>*
╠➥ *${_p}heleh <teks>*
╠➥ *${_p}holoh <teks>*
╠➥ *${_p}nulis <teks>*
║
╠━❉ *《 OTHER 》* ❉━
╠➥ *${_p}igstalk <username>*
╠➥ *${_p}profile [@user]*
╠➥ *${_p}get <url>*
╠➥ *${_p}film <pencarian>*
╠➥ *${_p}bacakomik <pencarian>*
╠➥ *${_p}playstore <pencarian>*
╠➥ *${_p}ytsearch <pencarian>*
╠➥ *${_p}google <pencarian>*
╠➥ *${_p}googlef <pencarian>*
╠➥ *${_p}ss <url>*
╠➥ *${_p}ssf <url>*
╠➥ *${_p}base64*
╠➥ *${_p}calc <expression>*
╠➥ *${_p}mention <teks>*
╠➥ *${_p}nickff*
╠➥ *${_p}translate [Text|lang]*
╠➥ *${_p}run (Limit)*
╠➥ *${_p}del*
╠➥ *${_p}grouplist*
╠➥ *${_p}owner*
╠➥ *${_p}info*
╠➥ *${_p}ping*
╠➥ *${_p}kusonime [Nime]*
╠➥ *${_p}zodiak [Nama|Umur]*
╠➥ *${_p}infocuaca [Kota]*
╠➥ *${_p}kbbi [Search]*
╠➥ *${_p}wiki [Search]*
╠➥ *${_p}lirik [Judul Lagu]*
╠➥ *${_p}chord [Judul Lagu]*
╠➥ *${_p}artinama [Nama]*
╠➥ *${_p}artimimpi [Jenis]*
╠➥ *${_p}tgljadian [tgl-bln-thn]*
╠➥ *${_p}kisahnabi [Nabi]*
╠➥ *${_p}quran*
╠➥ *${_p}randomquran*
║
╠━❉ *《 DOWNLOAD 》* ❉━
╠➥ *${_p}ig <url>*
╠➥ *${_p}igstory <username>*
╠➥ *${_p}ytmp3 <url> (Limit)*
╠➥ *${_p}ytmp4 <url> (Limit)*
║
╠━❉ *《 ADMIN 》* ❉━
╠➥ *${_p}add (Limit)*
╠➥ *${_p}demote (Tag)*
╠➥ *${_p}enable <option>*
╠➥ *${_p}disable <option>*
╠➥ *${_p}tagall [Nama|Text]*
╠➥ *${_p}hidetag [teks] (Limit)*
╠➥ *${_p}kick @user (Limit)*
╠➥ *${_p}promote @user*
║
╠━❉ *《 MEMBER 》* ❉━
╠➥ *${_p}linkgroup*
║
╠━❉ *《 JADI BOT 》* ❉━
╠➥ *${_p}jadibot (Limit)*
╠➥ *${_p}bcjadibot [Text]*
╠➥ *${_p}getcode*
║
╠━❉ *《 OWNER 》* ❉━
╠➥ *${_p}addprems <nomor>*
╠➥ *${_p}banchat*
╠➥ *${_p}unbanchat*
╠➥ *${_p}bc [Text]*
╠➥ *${_p}bcgc [Text]*
╠➥ *${_p}deletechat*
╠➥ *${_p}mutechat*
╠➥ *${_p}oadd @user*
╠➥ *${_p}demote @user*
╠➥ *${_p}okick @user*
╠➥ *${_p}ohidetag [teks]*
╠➥ *${_p}opromote @user*
╠➥ *${_p}reset*
╠➥ *${_p}setbye [Teks]*
╠➥ *${_p}setmenu <teks>*
╠➥ *${_p}setmenubefore <teks>*
╠➥ *${_p}setwelcome [Teks]*
╠➥ *${_p}stopjadibot*
┗━━━━━━
🔰-[ *POWERED BY A PROJECT* ]-🔰`
    let header = conn.menu.header || '╔━❉ *《 %category 》* ❉━━'
    let body   = conn.menu.body   || '╠➭ *%cmd%islimit*'
    let footer = conn.menu.footer || '┗━━━━━━\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `*%npmdesc*\n*%npmname@^%version*\n\`\`\`\%github\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + ''
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.fakeReply(m.chat, text.trim(),'0@s.whatsapp.net', 'BOTz VERIFIED','status@broadcast')
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
