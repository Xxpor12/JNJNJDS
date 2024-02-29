let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, '*Etiqueta A Esa Lesbiana Jaja 🌈*', m)

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    let str = `𝗟𝗮 𝗟𝗲𝘀𝗯𝗶𝗮𝗻𝗮 𝗧𝗼𝗽 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 𝗘𝘀 @${who.replace(/@.+/, \n'¿ 𝗧𝗮𝗻 𝗟𝗲𝘀𝗯𝗶𝗮𝗻𝗮 𝗝𝗮𝗷𝗮 🌈? ')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['group']
handler.command = /^Lesbi1$/i
export default handler
