let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, 'Etiqueta a tu nv xd', m)

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    let str = `Ella Es Mi Novia Es Bonita Vrd?🥺🫶🏼 @${who.replace(/@.+/, ' La Mejor Del Mundo 🥺🫶🏼')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['group']
handler.command = /^minovia$/i

handler.group = true

export default handler
