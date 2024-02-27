let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'🐧 𝗣𝗶𝗻𝗴𝘂𝗶 𝗔𝘃𝗶𝘀𝗼 🐧\n\n𝗘𝘆 𝗡𝗼 𝗠𝗲 𝗘𝘀𝘁𝗲𝘀 𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮𝗻𝗱𝗼 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗦𝗮𝗯𝗲𝗿 𝗔𝗹𝗴𝗼 𝗗𝗲 𝗠𝗶 𝗛𝗮𝗯𝗹𝗮 𝗔 𝗠𝗶 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 𝗚𝗿𝗮𝗰𝗶𝗮𝘀 ❤️\n𝗙𝗯 :https://web.facebook.com/profile.php?id=100094780575612\n𝗜𝗴 :https://www.instagram.com/cristoferrojasph/\n🐧 𝗣𝗶𝗻𝗴𝘂𝗶 𝗕𝗼𝘁 𝗠𝗱 🐧'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@573112811966/i
export default handler
