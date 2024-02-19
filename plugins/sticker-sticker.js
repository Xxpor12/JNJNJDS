import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('𝗢𝗲 𝗦𝗮𝗻𝗼/𝗮 𝗘𝗹 𝗩𝗶𝗱𝗲𝗼 𝗡𝗼 𝗗𝗲𝗯𝗲 𝗣𝗮𝘀𝗮𝗿 𝗗𝗲 𝟲 𝗦𝗲𝗴𝘂𝗻𝗱𝗼𝘀 𝗧𝗮𝗿𝗮𝗼')
      let img = await q.download?.()
      if (!img) throw `𝗕𝗮𝗯𝗼𝘀𝗼/𝗮 𝗗𝗲𝗯𝗲𝘀 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲𝗿  𝗔 𝗨𝗻𝗮 𝗜𝗺𝗮𝗴𝗲𝗻/𝘃𝗶𝗱𝗲𝗼 𝗢 𝗚𝗶𝗳 𝗣𝗮𝗿𝗮 𝗛𝗮𝗰𝗲𝗿 𝗘𝗹 𝗦𝘁𝗶𝗰𝗸𝗲𝗿`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, `𝗘𝘀𝗽𝗲𝗿𝗮 𝗖𝘁𝗺𝗿 𝗬𝗮 𝗧𝗲 𝗛𝗮𝗴𝗼 𝗧𝘂 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗧𝘀𝘀`, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
    else throw '𝗕𝗮𝗯𝗼𝘀𝗼/𝗮 𝗗𝗲𝗯𝗲𝘀 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲𝗿  𝗔 𝗨𝗻𝗮 𝗜𝗺𝗮𝗴𝗲𝗻/𝘃𝗶𝗱𝗲𝗼 𝗢 𝗚𝗶𝗳 𝗣𝗮𝗿𝗮 𝗛𝗮𝗰𝗲𝗿 𝗘𝗹 𝗦𝘁𝗶𝗰𝗸𝗲𝗿'
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
