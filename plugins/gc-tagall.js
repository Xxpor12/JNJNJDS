const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `╭┄〔 🐧 𝗣𝗶𝗻𝗴𝘂𝗶𝗕𝗼𝘁-𝗠𝗗 🐧 〕┄⊱\n┆\n┆ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 : ${participants.length} ${oi}\n┆\n┆ 𝘼𝙘𝙩𝙞𝙫𝙚𝙣𝙨𝙚 𝙥𝙡𝙖𝙣𝙩𝙖𝙨 ღ\n`;
  for (const mem of participants) {
    teks += `┆ღ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└🐧 𝗣𝗶𝗻𝗴𝘂𝗶𝗕𝗼𝘁-𝗠𝗗 🐧\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
