let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* 〕┄⊱\n┊\n┊ *${pickRandom(global.drago)}*\n┊\n╰━⊰ 𝗚𝗮𝗯𝗿𝗶𝗲𝗹 𝗗𝗿𝗮𝗴𝗼 ⊱━დ`)
}
handler.tags = ['frases']
handler.command = ['drago']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.drago = ["Ustedes buscan color como la bandera gay", "La prieta aprieta como tota de dieciséis", "Los plomazos como leche, todos van para tu face", "Te ponemos de rodillas, little nigga, start to pray", "Estoy comprando Louis V, ellos están comprando plays", "A veces visto tan caro que piеnsan que es ropa fake", "Tenga una puta pesa' pero no tanto como esta chain", "Roca pura como Dwayne, cocinando la cocaine", "El padre de todos estos, puta, Drago Gucci Mane, ey", "To' mi netos son serios, firme no hablamos bulto", "Si quieres problema, buscame, yo no me oculto", "Tú aguantando golpe, yo no aguanto ni un insulto", "Sigue hablando grueso, sé que te tenemos harto", "Mi alma y mis valores son dos cosas que no vendo", "Los que crees gangsters yo lo saco y eran tontos"]
