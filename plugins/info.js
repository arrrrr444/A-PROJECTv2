let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
┏━────────────━┓
      _*-•4尺 り 1-乃 の ｲ•-*_
┗──────────────┛
╭───❉ *「  INFO 」 * ❉─────•>
╠➥ *IG : https://tinyurl.com/ycv6dozc*
╠➥ *YT : https://bit.ly/3vnDrJo*
╠➥ *FB : https://tinyurl.com/y7rsvf8x*
╠➥ *Grup : https://tinyurl.com/yasz48oo*
╠➥ *Owner : Wa.me/6288294052009*
╠➥ *Author Sc : Nurutomo*
╰──────────────•>
┏━❉ *《HELP》* ❉━┓
╠➠ *${_p}owner*
╠➠ *${_p}donasi*
╠➠ *${_p}grouplist*
╠➠ *${_p}ping*
┗━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^info$/i

module.exports = handler
