let handler = async function(m, { conn ,args}) {

  let users = m.sender
  const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//  conn.reply(m.chat, `[ *Grup Link Detector* ] _sayonaraaaaaa......._`, m)
  conn.fakeReply(m.chat,'_*Selamat tinggal kawan semoga amal ibadah mu di terima di sisinya..*_' ,'0@s.whatsapp.net', '*「❗」GROUP LINK DETECTOR「❗」*','1@broadcast')
  await sleep(1000)
await conn.groupRemove(m.chat, [users])
}
 
handler.customPrefix = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.command = new RegExp
handler.group = true
handler.admin = false
handler.botAdmin = true
handler.fail = null 

module.exports = handler
