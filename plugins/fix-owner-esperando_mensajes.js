/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] 𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐢𝐫𝐞𝐜𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐞𝐥 𝐧ú𝐦𝐞𝐫𝐨 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 𝐝𝐞𝐥 𝐁𝐨𝐭.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*[❗] 𝐈𝐧𝐢𝐜𝐢𝐚𝐧𝐝𝐨 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 𝐝𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢ó𝐧, 𝐞𝐱𝐜𝐞𝐩𝐭𝐨 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐜𝐫𝐞𝐝𝐬.𝐣𝐬𝐨𝐧...*'}, {quoted: m});
  const sessionPath = './MysticSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*[❗] 𝐋𝐚 𝐜𝐚𝐫𝐩𝐞𝐭𝐚 𝐅𝐮𝐫𝐢𝐨𝐮𝐬𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐧𝐨 𝐞𝐱𝐢𝐬𝐭𝐞 𝐨 𝐞𝐬𝐭á 𝐯𝐚𝐜í𝐚.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] 𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫ó 𝐧𝐢𝐧𝐠ú𝐧 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐩𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐞𝐧 𝐥𝐚 𝐜𝐚𝐫𝐩𝐞𝐭𝐚 𝐅𝐮𝐫𝐢𝐨𝐮𝐬𝐒𝐞𝐬𝐬𝐢𝐨𝐧.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] 𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐨𝐧 ${filesDeleted} 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢ó𝐧, 𝐞𝐱𝐜𝐞𝐩𝐭𝐨 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐜𝐫𝐞𝐝𝐬.𝐣𝐬𝐨𝐧.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('𝐄𝐫𝐫𝐨𝐫 𝐚𝐥 𝐥𝐞𝐞𝐫 𝐥𝐚 𝐜𝐚𝐫𝐩𝐞𝐭𝐚 𝐨 𝐥𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢ó𝐧:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] 𝐎𝐜𝐮𝐫𝐫𝐢ó 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐥𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢ó𝐧.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 ¡𝐇𝐨𝐥𝐚! 𝐀𝐡𝐨𝐫𝐚 𝐦𝐞 𝐯𝐞𝐬?*\n\n*[❗] 𝐒𝐢 𝐞𝐥 𝐁𝐨𝐭 𝐧𝐨 𝐥𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐬𝐮𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐡𝐚𝐠𝐚 𝐮𝐧 𝐩𝐞𝐪𝐮𝐞ñ𝐨 𝐬𝐩𝐚𝐦*\n\n*—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession)$/i;
handler.rowner = true
export default handler;
