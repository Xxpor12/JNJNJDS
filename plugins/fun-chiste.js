// By https://github.com/elrebelde21

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗴 𝗕𝗼𝘁* 〕┄⊱\n┊\n┊ *${pickRandom(global.anuel)}*\n┊\n╰━⊰ 𝗔𝗻𝘂𝗲𝗹 𝗔𝗮 ⊱━დ`)
}
handler.tags = ['humor']
handler.command = ['anuel']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.anuel = ["Dile Que Se Perdio Una Perla Por Estar Buscando Piedras", "Con Poco Dinero Pero No Es El De Mis Padres", "Que Me Critique Dios Que Es El Unico Que No Es Pecador", "La Sangre Te Hace Pariente Pero La Lealtad Te Hace Familia", "Baby Tu Y Yo Nacimos Pa Morir", "Para Que Darle Amor A Una Mujer Cuando ella Prefiere Un Billete de Cien", "Tu Eres Una Diabla Disfrazada De Mujer", "Hoy Me Ama , Mañana Me Odia Solo Dios Sabe Por Que :(", "Conmigo Te Ve Mejor Que Con El", "Bebecita Estas Mas Rica Que Ayer", "Pa Chingar Tu No Me Tienes Que Amar", "Real Hasta La Muerte Brr", "To' Estos Cabrones Me Quieren Matar, Pero Tú Me Brincas Encima De Este Bicho Y Yo Te Devoro Como Un Animal", "Aquí To' El Mundo Se Muere, Nadie Resucita", "Tú Tiene' Lo Que Me Enloquece A Mí", "Mejor Que Yo Aquel Nunca Va A Ser, No", "Yo Soy Del Calentón, Pero En La Brea Estamo' Frío"]
