var handler = async (m, {conn}) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lesbiana2', { avatar: await conn.profilePictureUrl(who, "image").catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), }), 'error.png', '*MIREN A ESTA LESBIANA JAJA 😂🏳️‍🌈*', m)

}
handler.help = ['lesbiana2']
handler.tags = ['juegos']
handler.command = /^(lesbiana2)$/i

export default handler
