import {sticker} from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import {webp2png} from '../lib/webp2mp4.js';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  let stiker = false;
  const user = db.data.users[m.sender];
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp|image|video/g.test(mime)) {
      const img = await q.download?.();
      if (!img) throw `𝗢𝗲 𝗦𝗮𝗻𝗼/𝗮 𝗘𝗹 𝗩𝗶𝗱𝗲𝗼 𝗡𝗼 𝗗𝗲𝗯𝗲 𝗣𝗮𝘀𝗮𝗿 𝗗𝗲 𝟲 𝗦𝗲𝗴𝘂𝗻𝗱𝗼𝘀 `;
      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
      } catch (e) {
        console.error(e);
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== 'string') out = await uploadImage(img);
          stiker = await sticker(false, out, global.packname, global.author);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
      else return m.reply('𝗧𝗮𝗿𝗮𝗼 𝗕𝗮𝗯𝗼𝘀𝗼/𝗮 𝗗𝗲𝗯𝗲𝘀 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲𝗿 𝗔 𝗨𝗻𝗮 𝗜𝗺𝗮𝗴𝗲𝗻/𝘃𝗶𝗱𝗲𝗼 𝗢 𝗚𝗶𝗳 𝗣𝗮𝗿𝗮 𝗛𝗮𝗰𝗲𝗿 𝗘𝗹 𝗦𝘁𝗶𝗰𝗸𝗲𝗿');
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    else throw '𝗘𝘀𝗽𝗲𝗿𝗮 𝗖𝘁𝗺𝗿 𝗬𝗮 𝗧𝗲 𝗛𝗮𝗴𝗼 𝗧𝘂 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗧𝘀𝘀';
  }
};
handler.help = ['sfull'];
handler.tags = ['sticker'];
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i;

export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
};
