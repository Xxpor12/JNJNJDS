let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝘓𝘐𝘚𝘛𝘈 𝘔𝘈𝘚𝘊❤️‍🔥•: ${pesan}`
let teks = `╭┈┈ ๑👻๑ •• ${oi} ๑👻๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}❤️‍🔥`}
teks += `ㅤ
│
│         🐧 𝗣𝗶𝗻𝗴𝘂𝗶𝗕𝗼𝘁-𝗠𝗗 🐧
│        ₊˚🔥🔥🔥🔥🔥🔥🔥˚ ‧₊
│
│       𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥@:
│       👺𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⌗ 23 🇵🇪 ⌇ 00 🇨🇱 ⌇ 01 🇦🇷      
│
│ㅤㅤʚ 𔘓  𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴:
│ㅤ❤️‍🔥• 
│ㅤ❤️‍🔥• 
│ㅤ❤️‍🔥• 
│  ❤️‍🔥•
│   ㅤㅤ
│ㅤㅤʚ 𔘓 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
│ㅤ❤️‍🔥•
│ㅤ❤️‍🔥•
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳 𝘥𝘦 𝘴𝘢𝘭𝘢: 
│
╰───────────────•`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsm23 <mesaje>','masc23 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsm23|masc23)$/i
export default handler
