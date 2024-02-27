const handler = async (m, {conn}) => {
  m.reply(global.infopingui);
};
handler.command = /^(infopingui|infopingui|infopingui)$/i;
export default handler;

global.infopingui = `
🐧 𝗣𝗶𝗻𝗴𝘂𝗶 𝗜𝗻𝗳𝗼🐧

𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : @${owner[0][0].split('@s.whatsapp.net')[0]}
𝗡𝘂𝗺𝗲𝗿𝗼 : +51 936 994 155
𝗛𝗼𝘀𝘁 : ${hostname()}
𝗦𝗽𝗲𝗲𝗱 : ${latensi.toFixed(4)} ms
𝗧𝗶𝗲𝗺𝗽𝗼 𝗔𝗰𝘁𝗶𝘃𝗼 : ${uptime}
`;
