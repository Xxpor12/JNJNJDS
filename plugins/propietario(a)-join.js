let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `🐧 *Ingrese el enlace de un grupo.*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`𝗣𝗶𝗻𝗴𝘂𝗶 𝗕𝗼𝘁 𝗦𝗲 𝗨𝗻𝗶𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲 𝗔𝗹 𝗚𝗿𝘂𝗽𝗼 🐧

𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮 𝗤𝘂𝗲 𝗦𝗶 𝗘𝗹 𝗕𝗼𝘁 𝗡𝗼 𝗦𝗲 𝗘𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗘𝗻 𝗘𝗹 𝗚𝗿𝘂𝗽𝗼 𝗣𝗿𝗼𝗯𝗮𝗯𝗹𝗲𝗺𝗲𝗻𝘁𝗲 𝗟𝗼 𝗛𝗮𝘆𝗮𝗻 𝗦𝗮𝗰𝗮𝗱𝗼 𝗢 𝗘𝗹 𝗚𝗿𝘂𝗽𝗼 𝗘𝘀𝘁𝗲 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝗱𝗼 𝗣𝗮𝗿𝗮 𝗔𝗰𝗲𝗽𝘁𝗮𝗿 𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀 🐧`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊*\n┃ 📧 *𝙂𝙍𝙊𝙐𝙋 𝙍𝙀𝙌𝙐𝙀𝙎𝙏*\n╰══•───────────────•══╯\n\n*👤 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙉𝙏𝙀 | 𝘼𝙋𝙋𝙇𝙄𝘾𝘼𝙉𝙏*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆*\n ' + link, jid)

m.reply(`${ag}*✅ TU ENLACE SE ENVIO A MI PROPIETARIO*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *SU GRUPO SERÁ EVALUADO Y QUEDARÁ A DE MI PROPIETARIO SI ${gt} SE UNE A TU GRUPO*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n *❕ES POSIBLE QUE SU SOLICITUD DE UNIR AL BOT A TU GRUPO SEA RECHAZADA POR LAS SIGUIENTES CAUSAS:*\n*1️⃣ El Bot está Saturado.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario(a).*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
