let handler = function (m) {
  conn.sendFile(m.chat, './src/getpp.jpeg', 'filename', '```ɑᵣdᵢ.id```\n\n=========\n*➸ NAMA: ARDI*\n*➸ ASKOT: BOGOR*\n=========\n_*CONTACT*_\n*➸ IG: https://tinyurl.com/ycv6dozc*\n*➸ WA: https://bit.ly/2NqH9RB*\n*➸ FB: https://tinyurl.com/y7rsvf8x*\n=========\n*SUBREK CHANNEL A PROJECT*\n```https://bit.ly/3vnDrJo```')
}
handler.command = /^ardiganz$/i

module.exports = handler
