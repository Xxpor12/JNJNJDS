let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
let str = `𝗟𝗼𝗻𝗴 𝗧𝗶𝗺𝗲 𝗕𝗼𝘁

𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗗𝗼𝗻𝗮𝗿 𝗘𝘀𝗰𝗿𝗶𝗯𝗲 𝗔𝗹 𝗦𝗶𝗴𝘂𝗶𝗲𝗻𝘁𝗲 𝗡𝘂𝗺𝗲𝗿𝗼 : +51 936 994 155`
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝗟𝗼𝗻𝗴 𝗧𝗶𝗺𝗲 𝗕𝗼𝘁`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}
}
}, { quoted: fkontak })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
