export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝗛𝗼𝗹𝗮 @${m.sender.split`@`[0]}, 𝗗𝗲𝗷𝗮𝗺𝗲 𝗗𝗲𝗰𝗶𝗿𝘁𝗲 𝗤𝘂𝗲 𝗘𝘀𝘁𝗮 𝗧𝗼𝘁𝗮𝗹𝗺𝗲𝗻𝘁𝗲 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝗱𝗼 𝗛𝗮𝗯𝗹𝗮𝗿𝗻𝗲 𝗔𝗹 𝗣𝘃 :𝟯 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗖𝗼𝗺𝗽𝗿𝗮𝗿 𝗢 𝗔𝗱𝗾𝘂𝗶𝗿𝗶𝗿𝗺𝗲 𝗣𝗮𝗿𝗮 𝗧𝘂 𝗚𝗿𝘂𝗽𝗼 𝗘𝘀𝗰𝗿𝗶𝗯𝗲 𝗔𝗹 : +51 936 994 155`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
