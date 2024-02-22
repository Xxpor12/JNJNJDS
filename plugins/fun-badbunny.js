let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat,`╭━━━━━[ *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* ]━━━━━⬣`, m)}
/*conn.sendHydrated(m.chat, `╭━━━━━[ *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* ]━━━━━⬣`, wm, null, md, '*𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁*', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🧐', `${usedPrefix}reto`],
['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `${usedPrefix}menu`]
], m,)*/

handler.help = ['reto']
handler.tags = ['reto']
handler.command = /^reto/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bunny = [
"Yo estoy activo 24/7. Conmigo no hacen falta los juguetes", 
"Ella se cansó de novio pero no de perrear, ahora no quiere parar", 
"Con ella me caso aunque no sea por lo católico", 
"Que si quiero comerte, obvio, vas a ver las estrellas sin telescopio", 
"El amor a medias se ha vuelto moderno", 
"Me va mucho mejor así soltero: jangueo, bebo, fumo, hago to' lo que yo quiero", 
"Tú criticando y yo creando mi legado, amén", 
"Una baby exclusiva, no con cualquiera pega", 
"Mi alma está en guerra, es terreno sirio", 
"Criticar sin dar ejemplo, que jodía manía", 
"El yerno favorito de tu mai", 
"Quisiera ser como tú, sin sentimientos", 
"Parece un nokia, en el perreo no se agota", 
"Si hay sol, hay playa. Si hay playa, hay alcohol. Si hay alcohol, hay sexo. Si es contigo, mejor"
] 
