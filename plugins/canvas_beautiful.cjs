const uploadImage = require('../lib/uploadImage.cjs')
const uploadFile = require('../lib/uploadFile.cjs')
const { sticker } = require('../lib/sticker.cjs')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
   if (!text && m.mentionedJid.length == 0) return m.reply('Tag member cewek yang ada pp kak, contoh *#beautiful @member*')
try {
a = await conn.getProfilePicture(m.mentionedJid[0])
b = await require('node-fetch')(a).then(v => v.buffer())
c = await uploadImage(b).catch(e => uploadFile(b))
d = await (await fetch('https://tessyy-api.herokuapp.com/canvas/bautiful?url='+encodeURIComponent(c) )).buffer()
  m.reply('_Tunggu Sebentar. . ._')
  conn.sendFile(m.chat, d, 'image.png' , 'cakep bener lu', m)
 } catch (e) {
   m.reply('Error || Mungkin foto profile orang tersebut depresi!')
  }
}
handler.help = ['beautiful (@tag)']
handler.tags = ['canvascord']
handler.command = /^beautiful|cantik$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
