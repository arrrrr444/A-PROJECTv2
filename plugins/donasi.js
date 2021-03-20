let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
╭───❉ *「  DONASI 」 * ❉─────•>
╠➥ *PULSA : *
╠➥ *DANA :  *
╠➥ *GOPAY : *
╰──────────────•>
┏━❉ *《HELP》* ❉━┓
╠➠ *${_p}owner*
┗━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^donasi$/i

module.exports = handler
