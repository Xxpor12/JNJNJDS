const handler = async (m, {conn}) => {
  m.reply(global.estado);
};
handler.command = /^(estado)$/i;
export default handler;
global.estado = `
🐧 𝗣𝗶𝗻𝗴𝘂𝗶 𝗘𝘀𝘁𝗮𝗱𝗼 🐧

𝗘𝗹 𝗘𝘀𝘁𝗮𝗱𝗼 𝗗𝗲 𝗣𝗶𝗻𝗴𝘂𝗶 𝗦𝗲 𝗘𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗔𝗰𝘁𝗶𝘃𝗼 𝗟𝗮𝘀 𝟮𝟰 𝗛𝗼𝗿𝗮𝘀 𝗗𝗲𝗹 𝗗𝗶𝗮
`;
