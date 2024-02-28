// By https://github.com/elrebelde21

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 𝗣𝗶𝗻𝗴𝘂𝗶 𝗙𝗿𝗮𝘀𝗲𝘀 〕┄⊱\n┊\n┊ *${pickRandom(global.narcisistas)}*\n┊\n╰━⊰ 𝗙𝗿𝗮𝘀𝗲𝘀 𝗗𝗲 𝗡𝗮𝗿𝗰𝗶𝘀𝗶𝘀𝘁𝗮𝘀 ⊱━დ`)
}
handler.tags = ['humor']
handler.command = ['narcisistas']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.narcisistas = ["Nunca encontrarás a alguien tan increíble como yo.", "Mis éxitos son simplemente inevitables.", "El mundo gira a mi alrededor.", "La gente debería agradecerme por estar cerca.", "Soy la persona más inteligente que conozco.", "El éxito me sigue a donde quiera que vaya.", "No puedo evitar ser el centro de atención.", "Mis logros son asombrosos, ¿verdad?", "La perfección es mi estado natural.", "El mundo sería aburrido sin mí.", "Nadie puede superarme en nada.", "La humildad es para los débiles.", "Siempre tengo razón, no importa qué.", "Nadie puede resistirse a mi encanto.", "Mis opiniones son las únicas que importan.", "Soy la persona más increíble que jamás haya existido.", "Mis logros son insuperables."]
