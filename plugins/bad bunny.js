/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* 〕┄⊱\n┊\n┊ *${pickRandom(global.conejo)}*\n┊\n╰━⊰ 𝗕𝗮𝗱 𝗕𝘂𝗻𝗻𝘆 ⊱━დ`)
}
handler.tags = ['frases']
handler.command = ['conejo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.conejo = ["Yo estoy activo 24/7. Conmigo no hacen falta los juguetes", "Ella se cansó de novio pero no de perrear, ahora no quiere parar", "Con ella me caso aunque no sea por lo católico", "Que si quiero comerte, obvio, vas a ver las estrellas sin telescopio", "El amor a medias se ha vuelto moderno", "Me va mucho mejor así soltero: jangueo, bebo, fumo, hago to' lo que yo quiero", "Tú criticando y yo creando mi legado, amén", "Una baby exclusiva, no con cualquiera pega", "Mi alma está en guerra, es terreno sirio", "Criticar sin dar ejemplo, que jodía manía", "El yerno favorito de tu mai", "Quisiera ser como tú, sin sentimientos", "Parece un nokia, en el perreo no se agota", "Si hay sol, hay playa. Si hay playa, hay alcohol. Si hay alcohol, hay sexo. Si es contigo, mejor"]
