let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* 〕┄⊱\n┊\n┊ *${pickRandom(global.ferxxo)}*\n┊\n╰━⊰ 𝗙𝗲𝗿𝘅𝘅𝗼 ⊱━დ`)
}
handler.tags = ['frases']
handler.command = ['ferxxo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.ferxxo = ["He querido borrarte, pero sueño contigo", "Tómate algo, vamos a perrear, a hacer de todo", "Te lo di todo, to’a la noche yo te pienso cuando tomo", "Que yo esté pensándote, para mí, es normal", "Solo le caen hombres, ya no le caen lágrimas", "To’ mis sentido’, mami, hoy te celan, porque, cuando estoy borracho, por mi mente, recorre’", "Y repetirlo, mami, yo quisiera, yo sé que tú no va’ a olvidar mi nombre", "¿Se te olvidó que tú y yo nos dimos un beso después de habernos despedido?", "Otra madrugada viendo mi cel’, pero tú no me escribes nada", "Baby, perdón, pero el tiempo que no estoy contigo es tiempo perdido", "Soltarte o no soltarte, es mi disputa", "Yo solo quiero que me pienses, estés donde estés", "No quiere saber más de amores, quiere otras cosas mejores", "Conmigo olvidarás tus penas, no importa si tú eres ajena"]
