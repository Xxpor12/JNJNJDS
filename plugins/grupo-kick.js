const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '[ 📄𝐃𝐀𝐓𝐎📄 ] 𝗡𝗲𝗰𝗲𝘀𝗶𝘁𝗼 𝘁𝗲𝗻𝗲𝗿 𝗮𝗰𝘁𝗶𝘃𝗼 𝗲𝗹 (.𝐓𝐫𝐮𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭) 𝗣𝗮𝗿𝗮 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗿 𝗹𝗮 𝗮𝗰𝗰𝗶𝗼𝗻.';
  const kicktext = `[💖]𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢\n\n—◉ 🖋️𝗘𝗝𝗘𝗠𝗣𝗟𝗢:\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('[⛔] 𝐅𝐚𝐥𝐥𝐨, 𝐩𝐫𝐢𝐦𝐞𝐫𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐝𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫.');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('[🚫] 𝗡𝗢 𝗣𝗨𝗘𝗗𝗢 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥𝗠𝗘 𝗔 𝗠𝗜 𝗠𝗜𝗦𝗠𝗢, 𝗦𝗔𝗖𝗔𝗠𝗘 𝗠𝗔𝗡𝗨𝗔𝗟𝗠𝗘𝗡𝗧𝗘.');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `*@${mentioned.split('@')[0]} ғᴜᴇ ᴇʟɪᴍɪɴᴀᴅᴏ ᴇxɪᴛᴏsᴀᴍᴇɴᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`;
    const error1 = `*@${mentioned.split('@')[0]} ᴇs ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ, ɴᴏ ᴘᴜᴇᴅᴏ ᴇʟɪᴍɪɴᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ*`;
    const error2 = `*@${mentioned.split('@')[0]} ʏᴀ ʜᴀ sɪᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴏ ʜᴀ ᴀʙᴀɴᴅᴏɴᴀᴅᴏ ᴇʟ ɢʀᴜᴘᴏ*`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text :`[🚫] 𝐄𝐫𝐫𝐨𝐫 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨, 𝐅𝐚𝐥𝐥𝐨 𝐢𝐧𝐞𝐬𝐩𝐞𝐫𝐚𝐝𝐨`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['kick'];
handler.tags = ['group'];
handler.command = /^(kick|echar|hechar|sacar)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;

