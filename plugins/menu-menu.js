import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu =`
 ╭━〔 *🐧 Pingui Creador 🐧* 〕
*┃➤ Creador : Pingui 🐧*
*┃➤ Instagram : ${md} 😻*
*┃➤ Activo : ${uptime} 😹*
*┃➤ Usuarios :  ${rtotalreg}/${totalreg} 🌹*
 ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Adquirir 🐧* 〕
 *┃➤* _${usedPrefix}Vendedores / Vendedores ofc_
 *┃➤* _${usedPrefix}Preciobot / Comprar El Bot_
 *┃➤* _${usedPrefix}Proveedor / Deseas Vender Pingui ?_
 *┃➤* _${usedPrefix}Publicidad / Publicidad Del Ventas Y Sorteos_
 *┃➤* _${usedPrefix}Publicidadbot / Publicidad Del Bot_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Info 🐧* 〕
 *┃➤* _${usedPrefix}cafirexos_
 *┃➤* _${usedPrefix}gruposgb_
 *┃➤* _${usedPrefix}donar_
 *┃➤* _${usedPrefix}listagrupos_
 *┃➤* _${usedPrefix}estado_
 *┃➤* _${usedPrefix}infopingui_
 *┃➤* _${usedPrefix}instalarbot_
 *┃➤* _${usedPrefix}creador_
 *┃➤* _${usedPrefix}velocidad_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Free Fire 🐧* 〕
 *┃➤* _${usedPrefix}VsMixto_
 *┃➤* _${usedPrefix}VsFem_
 *┃➤* _${usedPrefix}VsMasc_
 *┃➤* _${usedPrefix}BsMixto_
 *┃➤* _${usedPrefix}BsFem_
 *┃➤* _${usedPrefix}BsMasc_
 *┃➤* _${usedPrefix}Bermuda_
 *┃➤* _${usedPrefix}Nexterra_
 *┃➤* _${usedPrefix}Kalahari_
 *┃➤* _${usedPrefix}Alpes_
 *┃➤* _${usedPrefix}Agenda_
 *┃➤* _${usedPrefix}Lista3_
 *┃➤* _${usedPrefix}Formulario_
 *┃➤* _${usedPrefix}Apos_
 *┃➤* _${usedPrefix}Vv2_
 *┃➤* _${usedPrefix}Mapa_
 *┃➤* _${usedPrefix}InfinitoFem_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Spamer 🐧* 〕
 *┃➤* _${usedPrefix}SpamApk_
 *┃➤* _${usedPrefix}Comunidades_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Reclutamientos 🐧* 〕
 *┃➤* _${usedPrefix}TeamFem_
 *┃➤* _${usedPrefix}TeamMasc_
  ╰━━━━━━━━━━━━━

   ╭━〔 *🐧 Pingui Edits 🐧* 〕
 *┃➤* _${usedPrefix}ApkEdit_
 *┃➤* _${usedPrefix}DriveEdits_
  ╰━━━━━━━━━━━━━

   ╭━〔 *🐧 Pingui Tarjetas 🐧* 〕
 *┃➤* _${usedPrefix}Cc2_
 *┃➤* _${usedPrefix}Tarjetas_
  ╰━━━━━━━━━━━━━

   ╭━〔 *🐧 Pingui Pornero 🐧* 〕
 *┃➤* _${usedPrefix}PinguiPajero_
 *┃➤* _${usedPrefix}PinguiPornero_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Premium 🐧* 〕
 *┃➤* _${usedPrefix}listapremium | listprem_
 *┃➤* _${usedPrefix}pase premium_
 *┃➤* _${usedPrefix}pass premium_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Juegos 🐧* 〕
 *┃➤* _${usedPrefix}mates | matemáticas | math_
 *┃➤* _${usedPrefix}lanzar *cara* | *cruz*_
 *┃➤* _${usedPrefix}ppt *piedra : papel : tijera*_
 *┃➤* _${usedPrefix}tictactoe | ttt *sala*_
 *┃➤* _${usedPrefix}deltictactoe | delttt_
 *┃➤* _${usedPrefix}topgays_
 *┃➤* _${usedPrefix}fake_
 *┃➤* _${usedPrefix}toppajer@s_
 *┃➤* _${usedPrefix}topput@s_
 *┃➤* _${usedPrefix}topintegrantes | topintegrante_
 *┃➤* _${usedPrefix}toplagrasa | topgrasa_
 *┃➤* _${usedPrefix}toppanasfrescos | toppanafresco_
 *┃➤* _${usedPrefix}topshiposters | topshipost_
 *┃➤* _${usedPrefix}toplindos | toplind@s_
 *┃➤* _${usedPrefix}topfamosos | topfamos@s_
 *┃➤* _${usedPrefix}topparejas | top5parejas_
 *┃➤* _${usedPrefix}gay | gay *@tag*_
 *┃➤* _${usedPrefix}gay2 *nombre : @tag*_
 *┃➤* _${usedPrefix}lesbiana *nombre : @tag*_
 *┃➤* _${usedPrefix}lesbi1 *nombre : @tag*_
 *┃➤* _${usedPrefix}manca *nombre : @tag*_
 *┃➤* _${usedPrefix}manco *nombre : @tag*_
 *┃➤* _${usedPrefix}pajero *nombre : @tag*_
 *┃➤* _${usedPrefix}pajera *nombre : @tag*_
 *┃➤* _${usedPrefix}puto *nombre : @tag*_
 *┃➤* _${usedPrefix}puta *nombre : @tag*_
 *┃➤* _${usedPrefix}rata *nombre : @tag*_
 *┃➤* _${usedPrefix}love *nombre : @tag*_
 *┃➤* _${usedPrefix}doxear *nombre : @tag*_
 *┃➤* _${usedPrefix}doxxeame_
 *┃➤* _${usedPrefix}pregunta *texto*_
 *┃➤* _${usedPrefix}apostar | slot *cantidad*_
 *┃➤* _${usedPrefix}formarpareja_
 *┃➤* _${usedPrefix}dado_
 *┃➤* _${usedPrefix}verdad_
 *┃➤* _${usedPrefix}acertijo_
 *┃➤* _${usedPrefix}cancion_
 *┃➤* _${usedPrefix}trivia_
 *┃➤* _${usedPrefix}pelicula_
 *┃➤* _${usedPrefix}adivinanza_
 *┃➤* _${usedPrefix}reto_
 *┃➤* _${usedPrefix}ruleta_
 *┃➤* _${usedPrefix}suerte_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Ia 🐧* 〕
 *┃➤* _${usedPrefix}geminiimg *reaccione a una foto*_
 *┃➤* _${usedPrefix}gemini *texto*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Ajustes Grupos 🐧* 〕
 *┃➤* _${usedPrefix}enable *o* disable *bienvenida | welcome*_
 *┃➤* _${usedPrefix}enable *o* disable *avisos | detect*_
 *┃➤* _${usedPrefix}enable *o* disable *autonivel | autolevelup*_
 *┃➤* _${usedPrefix}enable *o* disable *restringir | restrict*_
 *┃➤* _${usedPrefix}enable *o* disable *antillamar | anticall*_
 *┃➤* _${usedPrefix}enable *o* disable *publico | public*_
 *┃➤* _${usedPrefix}enable *o* disable *autovisto | autoread*_
 *┃➤* _${usedPrefix}enable *o* disable *temporal*_
 *┃➤* _${usedPrefix}enable *o* disable *stickers*_
 *┃➤* _${usedPrefix}enable *o* disable *autosticker*_
 *┃➤* _${usedPrefix}enable *o* disable *reacciones | reaction*_
 *┃➤* _${usedPrefix}enable *o* disable *audios*_
 *┃➤* _${usedPrefix}enable *o* disable *modocaliente | modohorny*_
 *┃➤* _${usedPrefix}enable *o* disable *antitoxicos | antitoxic*_
 *┃➤* _${usedPrefix}enable *o* disable *antiver | antiviewonce*_
 *┃➤* _${usedPrefix}enable *o* disable *antieliminar | antidelete*_
 *┃➤* _${usedPrefix}enable *o* disable *antinternacional | antifake*_
 *┃➤* _${usedPrefix}enable *o* disable *antienlace | antilink*_
 *┃➤* _${usedPrefix}enable *o* disable *antienlace2 | antilink2*_
 *┃➤* _${usedPrefix}enable *o* disable *antitiktok | antitk*_
 *┃➤* _${usedPrefix}enable *o* disable *antiyoutube | antiyt*_
 *┃➤* _${usedPrefix}enable *o* disable *antitelegram | antitel*_
 *┃➤* _${usedPrefix}enable *o* disable *antifacebook | antifb*_
 *┃➤* _${usedPrefix}enable *o* disable *antinstagram | antig*_
 *┃➤* _${usedPrefix}enable *o* disable *antitwitter | antitw*_
 *┃➤* _${usedPrefix}enable *o* disable *soloprivados | pconly*_
 *┃➤* _${usedPrefix}enable *o* disable *sologrupos | gconly*_  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Ajustes 🐧* 〕
 *┃➤* _${usedPrefix}configuracion_
 *┃➤* _${usedPrefix}settings_
 *┃➤* _${usedPrefix}vergrupo_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Descargas 🐧* 〕
 *┃➤* _${usedPrefix}imagen | image *texto*_
 *┃➤* _${usedPrefix}pinterest | dlpinterest *texto*_
 *┃➤* _${usedPrefix}wallpaper|wp *texto*_
 *┃➤* _${usedPrefix}play | play2 *texto o link*_
 *┃➤* _${usedPrefix}play.1 *texto o link*_
 *┃➤* _${usedPrefix}play.2 *texto o link*_ 
 *┃➤* _${usedPrefix}ytmp3 | yta *link*_
 *┃➤* _${usedPrefix}ytmp4 | ytv *link*_
 *┃➤* _${usedPrefix}pdocaudio | ytadoc *link*_
 *┃➤* _${usedPrefix}pdocvieo | ytvdoc *link*_
 *┃➤* _${usedPrefix}tw |twdl | twitter *link*_
 *┃➤* _${usedPrefix}facebook | fb *link*_
 *┃➤* _${usedPrefix}instagram *link video o imagen*_
 *┃➤* _${usedPrefix}verig | igstalk *usuario(a)*_
 *┃➤* _${usedPrefix}ighistoria | igstory *usuario(a)*_
 *┃➤* _${usedPrefix}tiktok *link*_
 *┃➤* _${usedPrefix}tiktokimagen | ttimagen *link*_
 *┃➤* _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
 *┃➤* _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
 *┃➤* _${usedPrefix}mediafire | dlmediafire *link*_
 *┃➤* _${usedPrefix}clonarepo | gitclone *link*_
 *┃➤* _${usedPrefix}clima *país ciudad*_
 *┃➤* _${usedPrefix}consejo_
 *┃➤* _${usedPrefix}morse codificar *texto*_
 *┃➤* _${usedPrefix}morse decodificar *morse*_
 *┃➤* _${usedPrefix}fraseromantica_
 *┃➤* _${usedPrefix}historia_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Anonimo 🐧* 〕
 *┃➤* _${usedPrefix}chatanonimo | anonimochat_
 *┃➤* _${usedPrefix}anonimoch_
 *┃➤* _${usedPrefix}start_
 *┃➤* _${usedPrefix}next_
 *┃➤* _${usedPrefix}leave_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Cmd Grupos 🐧* 〕
 *┃➤* _${usedPrefix}add *numero*_
 *┃➤* _${usedPrefix}sacar | ban | kick  *@tag*_
 *┃➤* _${usedPrefix}grupo *abrir o cerrar*_
 *┃➤* _${usedPrefix}group *open o close*_
 *┃➤* _${usedPrefix}daradmin | promote *@tag*_
 *┃➤* _${usedPrefix}quitar | demote *@tag*_
 *┃➤* _${usedPrefix}banchat_
 *┃➤* _${usedPrefix}unbanchat_
 *┃➤* _${usedPrefix}banuser *@tag*_
 *┃➤* _${usedPrefix}unbanuser *@tag*_
 *┃➤* _${usedPrefix}admins *texto*_
 *┃➤* _${usedPrefix}invocar *texto*_
 *┃➤* _${usedPrefix}tagall *texto*_
 *┃➤* _${usedPrefix}hidetag *texto*_
 *┃➤* _${usedPrefix}infogrupo | infogroup_
 *┃➤* _${usedPrefix}grupotiempo | grouptime *Cantidad*_
 *┃➤* _${usedPrefix}advertencia *@tag*_
 *┃➤* _${usedPrefix}deladvertencia *@tag*_
 *┃➤* _${usedPrefix}delwarn *@tag*_
 *┃➤* _${usedPrefix}crearvoto | startvoto *texto*_
 *┃➤* _${usedPrefix}sivotar | upvote_
 *┃➤* _${usedPrefix}novotar | devote_
 *┃➤* _${usedPrefix}vervotos | cekvoto_
 *┃➤* _${usedPrefix}delvoto | deletevoto_
 *┃➤* _${usedPrefix}enlace | link_
 *┃➤* _${usedPrefix}newnombre | nuevonombre *texto*_
 *┃➤* _${usedPrefix}newdesc | descripcion *texto*_
 *┃➤* _${usedPrefix}setwelcome | bienvenida *texto*_
 *┃➤* _${usedPrefix}setbye | despedida *texto*_
 *┃➤* _${usedPrefix}nuevoenlace | resetlink_
 *┃➤* _${usedPrefix}enable_
 *┃➤* _${usedPrefix}disable_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Parejas 🐧* 〕
 *┃➤* _${usedPrefix}listaparejas | listship_
 *┃➤* _${usedPrefix}mipareja | mylove_
 *┃➤* _${usedPrefix}pareja | couple *@tag*_
 *┃➤* _${usedPrefix}aceptar | accept *@tag*_
 *┃➤* _${usedPrefix}rechazar | decline *@tag*_
 *┃➤* _${usedPrefix}terminar | finish *@tag*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Votaciones 🐧* 〕
 *┃➤* _${usedPrefix}crearvoto | startvoto *texto*_
 *┃➤* _${usedPrefix}sivotar | upvote_
 *┃➤* _${usedPrefix}novotar | devote_
 *┃➤* _${usedPrefix}vervotos | cekvoto_
 *┃➤* _${usedPrefix}delvoto | deletevoto_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Convertidores 🐧* 〕
 *┃➤* _${usedPrefix}toimg | img | jpg *sticker*_
 *┃➤* _${usedPrefix}toanime | jadianime *foto*_
 *┃➤* _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
 *┃➤* _${usedPrefix}tovn | vn *video o audio*_
 *┃➤* _${usedPrefix}tovideo *audio*_
 *┃➤* _${usedPrefix}tourl *video, imagen*_
 *┃➤* _${usedPrefix}toenlace  *video, imagen o audio*_
 *┃➤* _${usedPrefix}tts es *texto*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Logos 🐧* 〕
 *┃➤* _${usedPrefix}logos *efecto texto*_
 *┃➤* _${usedPrefix}menulogos2_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Efectos 🐧* 〕
 *┃➤* _${usedPrefix}simpcard *@tag*_
 *┃➤* _${usedPrefix}hornycard *@tag*_
 *┃➤* _${usedPrefix}lolice *@tag*_
 *┃➤* _${usedPrefix}ytcomment *texto*_
 *┃➤* _${usedPrefix}itssostupid_
 *┃➤* _${usedPrefix}pixelar_
 *┃➤* _${usedPrefix}blur_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Anime 🐧* 〕
 *┃➤* _${usedPrefix}chica_
 *┃➤* _${usedPrefix}chico_
 *┃➤* _${usedPrefix}cristianoronaldo_
 *┃➤* _${usedPrefix}messi_
 *┃➤* _${usedPrefix}meme_
 *┃➤* _${usedPrefix}meme2_
 *┃➤* _${usedPrefix}itzy_
 *┃➤* _${usedPrefix}blackpink_
 *┃➤* _${usedPrefix}kpop *blackpink, o exo, o bts*_
 *┃➤* _${usedPrefix}lolivid_
 *┃➤* _${usedPrefix}loli_
 *┃➤* _${usedPrefix}navidad_
 *┃➤* _${usedPrefix}ppcouple_
 *┃➤* _${usedPrefix}neko_
 *┃➤* _${usedPrefix}waifu_
 *┃➤* _${usedPrefix}akira_
 *┃➤* _${usedPrefix}akiyama_
 *┃➤* _${usedPrefix}anna_
 *┃➤* _${usedPrefix}asuna_
 *┃➤* _${usedPrefix}ayuzawa_
 *┃➤* _${usedPrefix}boruto_
 *┃➤* _${usedPrefix}chiho_
 *┃➤* _${usedPrefix}chitoge_
 *┃➤* _${usedPrefix}deidara_
 *┃➤* _${usedPrefix}erza_
 *┃➤* _${usedPrefix}elaina_
 *┃➤* _${usedPrefix}eba_
 *┃➤* _${usedPrefix}emilia_
 *┃➤* _${usedPrefix}hestia_
 *┃➤* _${usedPrefix}hinata_
 *┃➤* _${usedPrefix}inori_
 *┃➤* _${usedPrefix}isuzu_
 *┃➤* _${usedPrefix}itachi_
 *┃➤* _${usedPrefix}itori_
 *┃➤* _${usedPrefix}kaga_
 *┃➤* _${usedPrefix}kagura_
 *┃➤* _${usedPrefix}kaori_
 *┃➤* _${usedPrefix}keneki_
 *┃➤* _${usedPrefix}kotori_
 *┃➤* _${usedPrefix}kurumi_
 *┃➤* _${usedPrefix}madara_
 *┃➤* _${usedPrefix}mikasa_
 *┃➤* _${usedPrefix}miku_
 *┃➤* _${usedPrefix}minato_
 *┃➤* _${usedPrefix}naruto_
 *┃➤* _${usedPrefix}nezuko_
 *┃➤* _${usedPrefix}sagiri_
 *┃➤* _${usedPrefix}sasuke_
 *┃➤* _${usedPrefix}sakura_
 *┃➤* _${usedPrefix}cosplay_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Efectos A. 🐧* 〕
 *┃➤* _${usedPrefix}bass_
 *┃➤* _${usedPrefix}blown_
 *┃➤* _${usedPrefix}deep_
 *┃➤* _${usedPrefix}earrape_
 *┃➤* _${usedPrefix}fast_
 *┃➤* _${usedPrefix}fat_
 *┃➤* _${usedPrefix}nightcore_
 *┃➤* _${usedPrefix}reverse_
 *┃➤* _${usedPrefix}robot_
 *┃➤* _${usedPrefix}slow_
 *┃➤* _${usedPrefix}smooth_
 *┃➤* _${usedPrefix}tupai_
  ╰━━━━━━━━━━━━━
  	
  ╭━〔 *🐧 Pingui Busqueda 🐧* 〕
 *┃➤* _${usedPrefix}animeinfo *texto*_
 *┃➤* _${usedPrefix}anuel_
 *┃➤* _${usedPrefix}conejo_
 *┃➤* _${usedPrefix}drago_
 *┃➤* _${usedPrefix}feid_
 *┃➤* _${usedPrefix}narcisistas_
 *┃➤* _${usedPrefix}mangainfo *texto*_
 *┃➤* _${usedPrefix}google *texto*_
 *┃➤* _${usedPrefix}googlelyrics *texto*_
 *┃➤* _${usedPrefix}letra | lirik *texto*_
 *┃➤* _${usedPrefix}ytsearch | yts *texto*_
 *┃➤* _${usedPrefix}wiki | wikipedia *texto*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Herramientas 🐧* 〕
 *┃➤* _${usedPrefix}afk *motivo*_
 *┃➤* _${usedPrefix}acortar *url*_
 *┃➤* _${usedPrefix}calc *operacion math*_
 *┃➤* _${usedPrefix}del *respondre a mensaje del Bot*_
 *┃➤* _${usedPrefix}qrcode *texto*_
 *┃➤* _${usedPrefix}readmore *texto1|texto2*_
 *┃➤* _${usedPrefix}spamwa *numero|texto|cantidad*_
 *┃➤* _${usedPrefix}styletext *texto*_
 *┃➤* _${usedPrefix}traducir *texto*_
 *┃➤* _${usedPrefix}morse codificar *texto*_
 *┃➤* _${usedPrefix}morse decodificar *morse*_
 *┃➤* _${usedPrefix}encuesta | poll *Motivo*_
 *┃➤* _${usedPrefix}horario_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Rpg 🐧* 〕
 *┃➤* _${usedPrefix}pase premium_
 *┃➤* _${usedPrefix}pass premium_
 *┃➤* _${usedPrefix}listapremium | listprem_
 *┃➤* _${usedPrefix}transfer *tipo cantidad @tag*_
 *┃➤* _${usedPrefix}dar *tipo cantidad @tag*_
 *┃➤* _${usedPrefix}enviar *tipo cantidad @tag*_
 *┃➤* _${usedPrefix}balance_
 *┃➤* _${usedPrefix}cartera | wallet_
 *┃➤* _${usedPrefix}experiencia | exp_
 *┃➤* _${usedPrefix}nivel | level | lvl_
 *┃➤* _${usedPrefix}rol | rango_
 *┃➤* _${usedPrefix}inventario | inventory_
 *┃➤* _${usedPrefix}aventura | adventure_
 *┃➤* _${usedPrefix}caza | cazar | hunt_
 *┃➤* _${usedPrefix}pescar | fishing_
 *┃➤* _${usedPrefix}animales_
 *┃➤* _${usedPrefix}alimentos_
 *┃➤* _${usedPrefix}curar | heal_
 *┃➤* _${usedPrefix}buy_
 *┃➤* _${usedPrefix}sell_
 *┃➤* _${usedPrefix}verificar | registrar_
 *┃➤* _${usedPrefix}perfil | profile_
 *┃➤* _${usedPrefix}myns_
 *┃➤* _${usedPrefix}unreg *numero de serie*_
 *┃➤* _${usedPrefix}minardiamantes | minargemas_
 *┃➤* _${usedPrefix}minarpinguicoins | minarcoins_
 *┃➤* _${usedPrefix}minarexperiencia | minarexp_
 *┃➤* _${usedPrefix}minar *:* minar2 *:* minar3_
 *┃➤* _${usedPrefix}rob | robar 
 *┃➤* _${usedPrefix}crime
 *┃➤* _${usedPrefix}reclamar | regalo | claim_
 *┃➤* _${usedPrefix}cadahora | hourly_
 *┃➤* _${usedPrefix}cadasemana | semanal | weekly_
 *┃➤* _${usedPrefix}cadames | mes | monthly_
 *┃➤* _${usedPrefix}cofre | abrircofre | coffer_
 *┃➤* _${usedPrefix}trabajar | work_
 *┃➤* _${usedPrefix}fantasy | fy_
 *┃➤* _${usedPrefix}fantasyinfo | fyinfo_
 *┃➤* _${usedPrefix}fylista_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🐧 Pingui Tops 🐧* 〕
 *┃➤* _${usedPrefix}top_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Stickers 🐧* 〕
 *┃➤* _${usedPrefix}sticker | s *imagen o video*_
 *┃➤* _${usedPrefix}sticker | s *url de tipo jpg*_
 *┃➤* _${usedPrefix}emojimix *😺+😆*_
 *┃➤* _${usedPrefix}scircle | círculo *imagen*_
 *┃➤* _${usedPrefix}semoji | emoji *tipo emoji*_
 *┃➤* _${usedPrefix}attp *texto*_
 *┃➤* _${usedPrefix}attp2 *texto*_
 *┃➤* _${usedPrefix}ttp *texto*_
 *┃➤* _${usedPrefix}ttp2 *texto*_
 *┃➤* _${usedPrefix}ttp3 *texto*_
 *┃➤* _${usedPrefix}ttp4 *texto*_
 *┃➤* _${usedPrefix}ttp5 *texto*_
 *┃➤* _${usedPrefix}ttp6 *texto*_
 *┃➤* _${usedPrefix}dado_
 *┃➤* _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *┃➤* _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *┃➤* _${usedPrefix}cs *:* cs2_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Stickers 2 🐧* 〕
 *┃➤* _${usedPrefix}wm *packname|author*_
 *┃➤* _${usedPrefix}wm *texto1|texto2*_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Stickers 3🐧* 〕
 *┃➤* _${usedPrefix}palmaditas | pat *@tag*_
 *┃➤* _${usedPrefix}bofetada | slap *@tag*_
 *┃➤* _${usedPrefix}golpear *@tag*_
 *┃➤* _${usedPrefix}besar | kiss *@tag*_
 *┃➤* _${usedPrefix}alimentar | food *@tag*_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🐧 Pingui Owners 🐧* 〕
 *┃➤* _${usedPrefix}join *enlace*_
 *┃➤* _${usedPrefix}unete *enlace*_
 *┃➤* _${usedPrefix}dardiamantes *cantidad*_
 *┃➤* _${usedPrefix}darxp *cantidad*_
 *┃➤* _${usedPrefix}darpinguicoins *cantidad*_
 *┃➤* _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
 *┃➤* _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
 *┃➤* _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
 *┃➤* _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
 *┃➤* _${usedPrefix}idioma | language_
 *┃➤* _${usedPrefix}cajafuerte_
 *┃➤* _${usedPrefix}comunicar | broadcastall | bc *texto*_
 *┃➤* _${usedPrefix}broadcastchats | bcc *texto*_
 *┃➤* _${usedPrefix}comunicarpv *texto*_
 *┃➤* _${usedPrefix}broadcastgc *texto*_
 *┃➤* _${usedPrefix}comunicargrupos *texto*_
 *┃➤* _${usedPrefix}borrartmp | cleartmp_
 *┃➤* _${usedPrefix}delexp *@tag*_
 *┃➤* _${usedPrefix}delpinguicoins *@tag*_
 *┃➤* _${usedPrefix}deldiamantes *@tag*_
 *┃➤* _${usedPrefix}reiniciar | restart_
 *┃➤* _${usedPrefix}actualizar | update_
 *┃➤* _${usedPrefix}addprem | +prem *@tag*_
 *┃➤* _${usedPrefix}delprem | -prem *@tag*_
 *┃➤* _${usedPrefix}listapremium | listprem_
 *┃➤* _${usedPrefix}añadirdiamantes *@tag cantidad*_
 *┃➤* _${usedPrefix}añadirxp *@tag cantidad*_
 *┃➤* _${usedPrefix}añadirpinguicoins *@tag cantidad*_
  ╰━━━━━━━━━━━━━
`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: '🐧 𝗣𝗶𝗻𝗴𝘂𝗶𝗕𝗼𝘁-𝗠𝗗 🐧', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu.getRandom()}}})
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = /^(menucompleto|menu|\?)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
